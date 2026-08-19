const test = require('node:test');
const assert = require('node:assert/strict');

const {
  SITE_TIME_ZONE,
  dateKeyInTimeZone,
  getUpcomingState,
  updateUpcomingEvents,
  handlePastEventsKeydown,
} = require('../src/assets/js/upcoming-events');

test('uses the Jersey City calendar date across the UTC rollover', () => {
  assert.equal(SITE_TIME_ZONE, 'America/New_York');
  assert.equal(
    dateKeyInTimeZone(new Date('2026-08-20T01:30:00Z'), SITE_TIME_ZONE),
    '2026-08-19'
  );
  assert.equal(
    dateKeyInTimeZone(new Date('2026-08-20T04:00:00Z'), SITE_TIME_ZONE),
    '2026-08-20'
  );
});

test('hides yesterday while keeping today and future events visible', () => {
  const state = getUpcomingState(
    ['2026-08-18', '2026-08-19', '2026-08-20'],
    new Date('2026-08-19T16:00:00Z')
  );

  assert.deepEqual(state.hidden, [true, false, false]);
  assert.equal(state.visibleCount, 2);
  assert.equal(state.showEmpty, false);
});

test('shows the fallback when every event card has become stale', () => {
  const state = getUpcomingState(
    ['2026-08-17', '2026-08-18'],
    new Date('2026-08-19T16:00:00Z')
  );

  assert.deepEqual(state.hidden, [true, true]);
  assert.equal(state.visibleCount, 0);
  assert.equal(state.showEmpty, true);
});

test('updates event cards and the fallback together', () => {
  const cards = [{ hidden: false }, { hidden: false }];
  const dateElements = [
    {
      dataset: { eventDate: '2026-08-17' },
      closest: () => cards[0],
    },
    {
      dataset: { eventDate: '2026-08-18' },
      closest: () => cards[1],
    },
  ];
  const fallback = { hidden: true };
  const container = {
    querySelectorAll: () => dateElements,
    querySelector: () => fallback,
  };
  const document = {
    querySelectorAll: () => [container],
  };

  updateUpcomingEvents(document, new Date('2026-08-19T16:00:00Z'));

  assert.deepEqual(cards.map((card) => card.hidden), [true, true]);
  assert.equal(fallback.hidden, false);
});

test('toggles the past-events disclosure with Enter and Space', () => {
  const details = { open: false };
  let prevented = 0;
  const event = {
    key: 'Enter',
    currentTarget: { closest: () => details },
    preventDefault: () => { prevented += 1; },
  };

  handlePastEventsKeydown(event);
  assert.equal(details.open, true);

  event.key = ' ';
  handlePastEventsKeydown(event);
  assert.equal(details.open, false);
  assert.equal(prevented, 2);
});
