const fetch = require('node-fetch');
const fs = require('fs-extra');
const path = require('path');
const Turndown = require('turndown');

const turndown = new Turndown();
const LIMIT = 200; // max
const JSON_PATH = path.resolve(__dirname, '../events.json'); // Updated path for events.json
const POSTS_JSON_PATH = path.resolve(__dirname, '../posts.json'); // New path for posts.json

function makeEventFileName(time, title) {
  const date = new Date(time).toISOString().slice(0, 10);
  const name = title.toLowerCase().replace(/\s/g, '-');
  return `${date}-${name}.md`;
}

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };

  return text.replace(/[&<>"']/g, (m) => map[m]);
}

async function run() {
  // Get the events
  let events = [];
  try {
    events = JSON.parse(fs.readFileSync(JSON_PATH, 'utf-8'));
    console.log(`Loaded ${events.length} events from ${JSON_PATH}`);
  } catch (err) {
    console.log('Failed to load local events, fetching them from API');
    const res = await fetch(`https://api.meetup.com/BitDevsNYC/events?&sign=true&photo-host=public&page=${LIMIT}&status=past`);
    events = await res.json();
    fs.writeFileSync(JSON_PATH, JSON.stringify(events, null, 2));
    console.log(`Saved ${events.length} events to ${JSON_PATH}`);
  }

  // Format and save the little buggers
  const posts = {};
  const counters = {
    socratic: 1,
    whitepaper: 1,
  };

  const results = await Promise.all(events.map(async (e) => {
    // Skip events that aren't socratics or whitepapers
    if (e.name.indexOf('Socratic') === -1 && e.name.indexOf('Whitepaper') === -1) {
      return false;
    }
    if (!e.description) {
      return false;
    }

    // Get the fields
    const title = e.name.split('(')[0].trim();
    const eventType = e.name.indexOf('Whitepaper') !== -1 ? 'W' + counters.whitepaper++ : 'SS' + counters.socratic++;
    const markdown = turndown.turndown(e.description)
      .replace(/\[masked\]/g, '');

    const htmlBody = escapeHtml(markdown);

    // Important to not indent here, every space counts!
    const content = {
      layout: 'post.html',
      type: e.name.indexOf('Whitepaper') !== -1 ? 'whitepaper' : 'socratic',
      title: title,
      meetup: e.link,
      body: `<p>${htmlBody}</p>`,
    };

    posts[eventType] = content;

    return true;
  }));

  fs.writeFileSync(POSTS_JSON_PATH, JSON.stringify(posts, null, 2));
  console.log(`Created ${results.filter(r => !!r).length} posts!`);
}

run();
