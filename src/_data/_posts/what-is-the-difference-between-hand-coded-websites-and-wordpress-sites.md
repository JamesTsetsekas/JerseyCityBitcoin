---
pageName: what-is-the-difference-between-hand-coded-websites-and-wordpress-sites
blogTitle: What is the difference between hand coded websites and WordPress?
titleTag: What is the difference between hand coded websites and WordPress?
blogDescription: What makes the websites I build special and unique compared to using a page builder like Wordpress? It all comes down to how they are made, and how that affects load times, user retention, and your search rankings...
blogHeader: What is the difference between hand coded websites and WordPress sites?
author: James Tsetsekas
date: 2022-12-16T19:45:03.587Z
tags:
  - post
image: /assets/images/blog/wordpress.jpg
imageAlt: Wordpress
---
<h3 class="blog-h3">Static Websites (Hand Coded) vs Dynamic Websites (WordPress, Wix, etc.)</h3>
<h4>Key Takeaways:</h4>
<ul>
    <li>
        Static websites coded from scratch load up to 10 times faster than page builders like WordPress. If your website takes more than 3 seconds to load, the majority of your visitors will abandon the site, losing customers.
    </li>
    <li>
        Google indexes your website based on how your mobile site performs, and page builder mobile sites are not as optimized, not as fast, not as well built, and often times not 100% responsive, which could hinder your search rankings.
    </li>
    <li>
        My hand-made static sites are coded mobile first, meaning I write the code starting with mobile screens, then adding code for tablet and desktop.  This makes mobile more responsive, optimized, and incredibly fast to load - improving your website's performance on Google and making sure visitors don't abandon your site.
    </li>
    <li>
        WordPress is notoriously known for its vulnerabilities and needs to be updated regularly to patch security flaws that hackers can use to compromise your website.  Hand-made static sites cannot be compromised as easily, and are virtually impenetrable because of their simplicity and lack of entry points to hack.
    </li>
</ul>
<p>
    In the web development world there are two types of websites - static and dynamic. A <span class="bold">static site</span> is a site that has only the main building blocks of web development: html, css, and JavaScript. There are no databases or functionalities or manipulating data or anything fancy. It’s just displaying the page as it was created. These three coding languages make up everything you can see on a website and in many cases - is all you need. When you load a static site, your browser is what reads and compiles the code for the website and loads it instantly. Every user is loading the same exact content. And one of the best ways to make a static site is to code it by hand (which is what I do best!) or with a static site generator.  
</p>
<p>
    <span class="bold">A dynamic site</span> (WordPress, page builders) is one that uses additional server side languages and technologies to take html, css and assets from a database and stitch the website together as it loads on the server and THEN it gets sent to the browser. Instead of the browsers compiling the code, it’s the server that compiles it for the browser and sends it off, and instead of every user being served the exact same content they are all served different content individually. This makes the load times slower, and your website is vulnerable to attacks from malware and hackers interrupting the process of the server checking the database for the website content. Static sites have no databases, so there’s nothing to attack. We will dive more into this later down the page.
</p>
<p>
    Dynamic sites would include websites built by WordPress, Wix, Squarespace, GoDaddy, page builder, or built in php, etc. These page builders store the assets and content in a database and when someone visits the website, the server checks its inventory of stuff that the browser is asking for and it pulls them from that database and Frankenstein them together into landing page that you see. While these page builders make it easy to create your own website and for cheap, there are HUGE drawbacks when compared to the static websites that I build.
</p>
<h3 class="blog-h3">Why are static websites faster than dynamic websites?</h3>
<p>
    One of the most important aspects of your website ranking on google is how fast it loads and performs - especially on mobile. The problem with dynamic websites (WordPress, Wix, etc) is that the server takes more time to check the database and put everything together. And the more plug ins and extra stuff you have on your site the more you will only slow it down. This is critical because studies have shown that majority of users will abandon a website if it takes more than 3 seconds to load. So if your website is taking more than 3 seconds to load, what’s the point in even having it if a majority of the users won’t even view it? That’s one the <span class="bold">BIGGEST</span> drawbacks that I see with WordPress and Wix sites - they can take too long to load and cost you money.
</p>
<p>
    Static sites, however, can load up to 10 times faster than a dynamic website because it doesn’t need to do website surgery and reattach the limbs of the page as fast as possible on the browsers operating table. Everything is already prebuilt, so all the browser has to do is load it and throw it at us. There’s no plugins, no databases, no wasted space or bloat. Every line of code that I write in my sites are done with purpose, and written in an organized manner that’s easy for Google to read and understand. Dynamic sites like WordPress have TONS of bloated and messy code that only further bog down the load times.
</p>
<p>
    Imagine if you have a plate of spaghetti and you want to know how many noodles are on your plate. Well, they’re all mixed up and tangled up in each other that it will take a lot of time to separate them and count how many noodles there and make sense of it. On your other plate (your “static” plate) you have all your noodles lined up in nice groups of 10 on the plate with the meat on the side ready to eat (please don’t eat spaghetti like this). It’s a lot easier and faster to analyze how many noodles you have when everything is grouped together accordingly and organized. This is the difference in how the code of a dynamic site looks versus the code of a static site. It’s called “spaghetti code”. And it makes loading a site a more time-consuming effort for the browser to analyze and load, and Google’s search crawlers will have a hard time understanding your content and what it means since it’s tucked away in a mess of code with no context around it.
</p>
<p>
    The benchmark load time for a website is 2 seconds. My hand-made static websites can often times load in under 0.5 seconds, significantly lower than the average. They load almost instantly. The code is grouped together and organized so reading it and understanding it is easier for your browser and for Google, which improves load times and in turn keeps customers from leaving your site and improves your websites ranking on Google. So if your website isn’t bringing in a lot of business, check to see how long it takes to load with this tool from <a href="https://developers.google.com/speed/pagespeed/insights/">Google.</a>
</p>
<p>
    If it’s load time is over 3 seconds chances are people are leaving before they even reach it.
</p>
<p>
    Speaking of Google and speed, they recently made an update to their search algorithm in which <span class="bold">they rank your website based on how the mobile site performs, called Mobile First Indexing.</span> So basically, the faster your mobile site loads, the better you rank. That’s where static sites win every time.
</p>
<h3 class="blog-h3">Mobile first programming and increased site speed</h3>
<p>
    Mobile first programming is something that can’t be done by a page builder. It’s a design pattern in which we as developers write the code starting with the mobile screens first and adding code for tablet and desktop as we go down the file. When the browser reads the CSS file to see how the page should be structured and styled, it reads it from top to bottom. If we start out at the top writing desktop code, the browser will read that first and load it, then it will keep going down the page checking for rules for different screen sizes and loading those designs editing the desktop content to fit into mobile. If you’re on mobile, and the mobile code is at the bottom of the CSS file, the browser has to read ALL of the code in that file, loading desktop code, checks the screen size rule and says “yup, this is mobile alright”. It then has to break everything down from desktop and squeeze it all into the mobile screen. This wastes time and resources.
</p>
<p>
    <span class="bold">With the mobile first approach, your mobile code is at the top and is read first.</span> So when you’re on your phone and the site loads, it loads the mobile styling code first, checks the screen size rules and says “welp, that’s it boys, put that code up on the screen. It’s showtime!”.
</p>
<p>
    Let me tell you from experience - it’s easier to make content grow into its space instead of shrinking it down and cramming it in the smaller spaces. <span class="bold">Mobile first programming + static site development will make your site lightning fast.</span> It might even shock some people.
</p>
<h3 class="blog-h3">Why are static sites more secure than dynamic sites?</h3>
<p>
    Dynamic sites have databases, and server-side platforms that can be attacked when they are trying to access the database or content management systems that store all your website's data. So as the server is building the site and getting it ready for the browser, hackers can inject themselves into the process and compromise your website.
</p>
<p>
    Static sites however, have nothing to attack. There’s no database, no session tokens, no information being collected or transmitted for a hacker to interfere or intercept. There’s no steps for them to slide in and sneak something in our website's back pocket on its way to the browser.
</p>
<p>
    One of the problems with WordPress sites is the amount of plugins you have to use. If you put up a WordPress site and just forget about it for a while, many of those plugins will have had updates to patch security vulnerabilities and if you don’t update them your site will not be safe from attackers and sometimes the outdated plugins will just not play nice with the others and it will take down the whole site without you knowing. Who has time to keep up with all these updates and patches? That’s where my work with creating static sites really stands out - there’s no updating necessary. It’s just html and css. There’s no security patches to be made manually to keep your site safe and secure. When it’s up, it’s done.
</p>
<p>
    Think about it like this - you have two cabins in the woods, one has electricity and internet and fancy electronic locks on the doors you control with an app and lights and appliances are connected to the internet and the cloud that you control from your phone. That’s living! In the other cabin, it’s not connected to a grid or a cloud and the fireplace makes all the heat and the locks on the doors are just regular old deadbolts.
</p>
<p>
    Well, in the other fancy cabin, someone hacked into their internet connection and gained control of the locks on the house and disabled them, allowing them to come inside and take everything. All those fancy bells and whistles just created more entry points for attackers to get into your cabin when all you needed the cabin for was to relax after hiking.
</p>
<p>
    But the other cabin that had no electricity or internet-controlled locks and devices is still safe. They get by with the basics like a fire stove and lanterns. That’s html and css. Just good old fashioned fire stoves and lanterns. And the locks on the door are safe from attack. No one is getting in. That’s what a static site is. It removes all the extras and is just a website built out of its core building blocks. That’s the type of website I make. They’re log cabins cut and built by hand with only the tools of a craftsman. Those page builders are mass produced lower quality security risks.
</p>
<p>
    And since WordPress is the most popular content management system (CMS) for website building, hackers will specifically target WordPress sites to exploit known vulnerabilities and target websites with out-of-date versions and plugins. Your website has a target on its back. By going the static site route, we remove that target from your back and your website can live freely without worrying about being abducted off the internet streets.
</p>
<p>
    But what about the servers that these static sites live on? Can’t they be compromised and the site can come down? Nope! When your static site is served up by a Content Delivery Network (CDN) your site lives on multiple servers across the globe ready to be accessed. So when one server goes down, it can just be loaded up from a other one in a different location. No down time!
</p>
<h3 class="blog-h3">Handmade static sites vs WordPress and Wix</h3>
<p>
    Overall, hand-made static websites will almost ALWAYS beat page builders like WordPress and Wix. Static websites load in milliseconds compared to the multiple seconds or more it can take a WordPress or Wix site. And the fact that they are almost virtually impenetrable from being hacked or compromised due to their simplicity makes them the clear winner in the fight for your business.
</p>
<p>
    Dynamic sites also currently offer no ways to do mobile first programming and are unable to take advantage of its benefits.  One of the problems you can see for yourself is to find a Wix site and try to resize the browser.  You'll notice they don't offer a tablet version of your site and the whole page is not very responsive, meaning the content doesn't change or move as the screen gets bigger or smaller.  On certain screen sizes your webpage content is squeezing into it's box and is actually being cut off on the edges of the screen because it has nowhere to go and now people can't even read what is there.  Or text can start wrapping around images in odd ways that distort the layout, making your site appear broken.  These page builders don't give you the amount of control you need to make your site responsive for any possible screen size without knowing how to code and access page builders API to talk to their system and make very custom, complicated work.
</p>
<h3 class="blog-h3">Why should I pay someone to make a website when I can make it myself?</h3>
<p>
    Wix and WordPress advertise that anyone can make a website for free, which makes it very appealing to small businesses that don’t have the money to hire a developer like me to make them one. However, if page speed, loading times, security, converting more customers, and Google rankings are concerns you would like to have addressed in a website and want to stand out from the competition then I highly advise finding someone to make a static website for you (like me!). Think about it this way, anyone can just buy paint and go paint their own house. But not everyone will be able to do it with the same quality as a professional, and their house will suffer for it and look terrible. Much like painting, web development is a trade and can get a little expensive. Having a static site built by a developer can run anywhere from $1800 - $3,000+ depending on complexity. So it’s natural to be attracted to page builders and save money by doing it yourself. There’s nothing wrong with that! But if you’re looking to take your business to the next step, stop leaving money on the table and consider getting a static site made. Make something that will perform miles better and get a one up on the competition
</p>
<p>
    And there are some developers who make custom WordPress sites and they do a good job and care about what they do. I'm not saying ALL WordPress website or developers are tricksters or making terrible products. Those are still totally ok to use and have their purposes. If you need a website that HAS to have a database and dynamically build hundreds of pages depending on the content the visitor is requesting then that's where WordPress shines.  WordPress is great for people who want to edit their own content, set up an online store, a blog they can write and edit themselves, custom applications or data manipulation, and anything needing a database.  Static sites are just that - they're static, unchanging.  They are perfect for websites who only need to display information.  They don't store it or manipulate it or generate new content individually for each visitor. Using Wordpress to make a strictly informational site is like using a jackhammer to drive in a nail.  
</p>
<p>
    Chances are your competition will have a WordPress site too. Some developers or agencies charge thousands to make these simple WordPress sites that could have been made static, and many of them are just template pump and dumps they hand off to you with no support, wham bam thank you ma'am. So finding a good developer or agency will be difficult, but it will be well worth the trouble. You just have to take some time to weed through the bad ones from the good ones.
</p>
<h3 class="blog-h3">Invest in your website</h3>
<p>
    In my experience there are two types of people: business owners, and entrepreneurs. One of the most common mistakes business owners make when it comes to a website is that they see it as an expense, rather than an investment. Entrepreneurs understand that when you spend money on the business it’s an investment <span class="bold">INTO</span> the business, not an expense, and can justify the value of it by seeing the return that investment will bring. For example, you buy a website from a developer for $3000 to make a static site for you. Seems like a lot, but with a better looking and better performing site you might be able to convert visitors into customers who would have left the site because it took too long to load or looked out of date and awful and like you can’t be trusted. $3,000 all of sudden is bringing in an extra $10,000 a year or more after some time in new business. If you could spend $3,000 and in a year make $10,000 off of it, would you make that “investment”? I know I pulled those numbers out of nowhere, but that doesn't mean it's not possible.  I've had some clients double their business after a year working with me.  
</p>
<p>
    Let’s look a how I do things. I sell websites at $150 a month. Some might be thinking “why should I pay every month for years?” Think about this way, with all the benefits my static sites have, did it bring in more than $150 a month in value this month? The answers almost always going to be yes. A painter, for example, would make $800+ per new client. If my site brings in only an extra 1 client per month that’s a $650 return. And every new customer you get every month only adds to the value you receive from my sites. And for that $150 a month you have someone on call 24/7 to handle your website for you, make updates to the site for changes in the priorities of search algorithms, and answer any question you may have. You are getting more than just a website, you're getting a partner who is also invested in the success of your business.
</p>
<p>
    Websites are a lot like tattoos - you get what you pay for. If you want something slapped together that looks generic or outdated which might make people avoid you, then that’s what you’ll get for a $300 website from Craigslist or Fiverr. Much like finding a tattoo artist, you need to do some research and find reputable developers who can answer all your questions and just make a high quality, beautiful product.
</p>
<p>
    So with all these cheap and quick options available to build a website, it’s important to know that a great website will never come from that price point. It should actually be a deterrent. If I had to get surgery, I certainly wouldn’t trust the doc I found online to do it for about $350 when it costs $4000 everywhere else. It just screams lack of quality and lack of effort and somewhere along the line they are skipping a few steps to crank it out as fast as possible to make as much money as possible with as little effort as possible. Your business deserves better. If you want the cheap site, expect cheap results. But if you want it done right, that’s where a developer comes in.
</p>
<h3 class="blog-h3">Conclusion:</h3>
<p>
    In the end, whether you go for a static site or a dynamic site, it all comes down to your budget and priorities. If you don’t have a lot to spend on a website and just need something out there then it’s okay to use WordPress or Wix. But if you have the budget to get something done that’s a step up and can maximize your online presence then having a static site made is your best return on investment.  Or if you need something bigger that involves the need for a database or the ability to edit your content yourself, then WordPress and other page builders are the way to go
</p>
<p>
    With my business model you don’t have to make a choice between doing it yourself to save money or having a developer do it for a high price tag. Because instead of charging $2500+ for my work, I offer it at $0 down and $150 a month so my work can be more accessible to small businesses who need it the most and need a partner they can rely on to handle the web part of their business while they handle their day to day. I’m able to do this kind of work for so little upfront because I’m a stay-at-home dad - my bills are already paid, I just have to stay married! So I can afford to put all this work into my sites for so little upfront because I have no operating costs or an office or employees. It’s just me. My goal is to build a website that lasts years and helps you grow your business, and I’ll be a part of it with you every step of the way.
</p>
</div>