---
pageName: how-to-dark-mode
blogTitle: How to add dark mode to your website
titleTag: How to Add Dark Mode to Your Website
blogDescription: In this post, I will share the code that I use to add dark mode to all my sites and it takes less than 5 minutes to implement. I provide the code and I even made the button for you!
blogHeader: How to add dark mode to a custom website in html and css
author: James Tsetsekas
date: 2023-10-30T05:24:48.980Z
tags:
  - post
image: /assets/images/blog/brick-wall-square.jpg
imageAlt: How to add dark mode to your website
---
<h3 class="blog-h3">Adding dark mode to your website in less than 5 minutes</h3>
<p>
    In this post I will show you how to easily add a functioning dark mode to your webiste in less than 5 minutes without frameworks, and I provide all the code for you - including the toggle button. 
</p>
<p>
    To get right to it, here's the code for adding dark mode to your website. I recommend having a separate dark.css stylsheet for all your dark mode styles. All you have to do is copy and paste the html, css, and js into your project and use this selector in your dark.css to target a class to add the dark mode styles to:
</p>

<pre><code class="language-css">
body.dark-mode .targetElement {
    background: #000000;
}
</code></pre>

<h2 class="code-h2">HTML</h2>

<pre><code class="language-markup">
&lt;button class="dark-mode-button top-dark-mode-button" aria-label="dark mode toggle"&gt;
    &lt;span aria-hidden="true" class="dark-toggle"&gt;
        &lt;span class="DTspan">&lt;/span&gt;
    &lt;/span&gt;
&lt;/button&gt;
</code></pre>
                                    
<h2 class="code-h2">CSS</h2>

<pre><code class="language-css">
/*CSS for Dark Mode Toggle

Copy and paste this code into it's own dark.css file. Keep all you dark mode
styles there, and make sure when you link to this sheet in your html head,
make it the bottom css link tag so it overrides all other styles.
At the bottom, that's where you start to add your dark mode styles by
starting starting with "body.dark-mode" and add your class you want to
target at the end. For example,

body.dark-mode .heading-one {}

then add your css properties like normal. That's it!
Scroll to the bottom to start adding your dark mode styles

*/

/* note that Internet Explorer does not support css variables */
:root {
    --dark: #000;
    --medium: #1b1b1b;
    --light: #2e2e2e;
}

.dark-mode-button {
    background: transparent;
    border: none;
    height: 40px;
    width: 30px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.top-dark-mode-button {
    position: absolute;
    top: 60px;
    right: 15px;
    -webkit-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
    z-index: 1000;
    -webkit-transition: .3s ease-in;
    -o-transition: .3s ease-in;
    transition: .3s ease-in;
}

.top-dark-mode-button .dark-toggle {
    background: rgb(230, 230, 230);
    border-color: rgb(230, 230, 230);
    width: 35px;
}

.top-dark-mode-button:after {
    content: 'DARK';
    position: absolute;
    color: #fff;
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
    right: 22px;
    top: 10px;
    -webkit-transition: .1s ease-in;
    -o-transition: .1s ease-in;
    transition: .1s ease-in;
}

body.dark-mode .top-dark-mode-button:after {
    content: 'LIGHT';
    color: var(--primary);
    top: 12px;
}

.dark-toggle {
    margin: 0;
    width: 30px;
    height: 16px;
    z-index: 20;
    border-radius: 10px;
    background: transparent;
    border: 3px solid #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-transition: .3s ease;
    -o-transition: .3s ease;
    transition: .3s ease;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    z-index: 1000;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    align-items: center;
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
}

body.dark-mode .dark-toggle {
    background: rgb(67,183,255);
    background: -o-linear-gradient(left, rgba(67,183,255,1) 0%, rgba(0,221,246,1) 100%);
    background: -webkit-gradient(linear, left top, right top, from(rgba(67,183,255,1)), to(rgba(0,221,246,1)));
    background: linear-gradient(90deg, rgba(67,183,255,1) 0%, rgba(0,221,246,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#43b7ff",endColorstr="#00ddf6",GradientType=1);
    border: none;
}

.dark-toggle span {
    height: 20px;
    width: 20px;
    left: -8px;
    border-radius: 50%;
    background: #fff;
    position: absolute;
    -webkit-transition: .3s ease;
    -o-transition: .3s ease;
    transition: .3s ease;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
}

body.dark-mode .dark-toggle span {
    left: 15px;
    -webkit-transition: .3s ease;
    -o-transition: .3s ease;
    transition: .3s ease;
}

.top-dark-mode-button .dark-toggle {
    background: rgb(230, 230, 230);
    border-color: rgb(230, 230, 230);
    width: 35px;
}


/* Begin adding your dark mode styles here, like so: */

body.dark-mode {
    background: #000
}

body.dark-mode p {
    color: #fff
}
</code></pre>


<h2 class="code-h2">JAVSCRIPT</h2>
<pre><code class="language-JS">
// Add this to your javascript file
<BR>
/* Body */
const body = document.querySelector('body');
<BR>
// Dark Mode Action
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector('.dark-mode-button');
const darkModeToggleFooter = document.querySelector('footer .dark-mode-button');
<BR>
// Enable Dark Mode
const enableDarkMode = () => {
    body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled")
}
<BR>
// Disable Dark Mode
const disableDarkMode = () => {
    body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", null)
}
<BR>
if (darkMode == "enabled") {
    enableDarkMode();
}
<BR>
// Desktop Button
darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
})
<BR>
// Footer button, optional. This is for if you have a second dark mode toggle button
//in the footer, just make sure the button is inside the footer tag, and it will be
//linked to this function.
<BR>
    darkModeToggleFooter.addEventListener('click', () => {
        darkMode = localStorage.getItem("darkMode");
        if (darkMode !== "enabled") {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    })
</code></pre>

<p class="extra-margin">
    All you have to do is add the html button wherever you want it, add the dark.css to all your pages, copy and paste the dark mode javascript into your javascript file, and on the dark.css file, just write:
</p>
<pre><code class="language-CSS">
body.dark-mode #updates {
    background: #000000;
}
</code></pre>
<br>
<p>
    What is happening is we we're setting new dark mode styles based on if the body has the dark mode class on it. The code is basically saying that when the body has the "dark-mode" class on it, select this element and add this style to it. When the body has the class removed, that code doesn't run becuase there is no dark mode class on body, so the background never gets changed to black. This code only be ran when the dark mode class is on the body. So all we have to do for each dark mode style is to preface the selector with "body.dark-mode" and that's it - you added a dark mode style! The toggle button I provided in the code above does all the work, so everytime it is toggled, the class gets toggled on and off the body, and dark mode is switched on and off. That's all you have to do. No crazy frameworks. Just good old fashioned vanilla code.
</p>
<br>
<p>
    You’ll probably spend the most time positioning the button into your navbar or wherever you want it. Easiest solution is to absolutely position it. I place my button at the very top of my code so it’s the first thing a screen reader will focus on.
</p>
<h3 class="blog-h3">Why should I add dark mode to my website?</h3>
<p>
    Adding dark mode to a website has been increasing in popularity after the <a class="blog-link" href="https://www.cnbc.com/2019/10/07/dominos-supreme-court.html">Dominoes Pizza lawsuit</a> opened the floodgates for more accessible websites. Before the lawsuit, web accessibility was just a nice feature to have if you had the money, but now it has become more of a necessity. Dark mode can help check off alot of the web accessibility issues with a website by removing contrast issues and accomadating those who wish to view everything with less brightness and harsh white light.
</p>
<p>
    If you have never heard of web accessibility, welcome to the new world from under your rock. Web accessibility has to do with how people with visual, motor/mobility, auditory, seizure risks, and cognitive/intellectual disabilities use the web. What dark mode does is it enables developers to fix text with low contrast ratios to their background, and people with light sensitivities won't have as much trouble reading your website.
</p>
<p>
    For example, when you’re working with a company’s brand, you often can’t just change their brand color to make it more accessible, so rather than changing the brand color on the text, we change the background that the text is on to straight black. But dark mode is not just about changing the background to black, it’s about transforming the website and its contents into a usable, beautiful layout.
</p>
<p>
    Imagine the website elements as being stacked on top of each other. The bottom most layer (the body) will be the darkest, then if there is a card element on top of the body, that card's background will be a lighter shade, and if there's another dark element inside that card, it will be lighter than the card. That's a good rule to follow when making your dark theme. It looks a ton better when you use a visual hierarchy to show depth. Darkest elements go on the bottom, and they get lighter and lighter in color as elements keep stacking on top of each other.
</p>
<p>
    Adding dark mode to a custom website is, in my opinion, one of those new trends in web development that you should try to add to all of your websites. It not only helps your website accessibility, but it also adds a "wow" factor to it. Dark mode will definitely distinguish your client from the rest of the competition and show a more forward thinking company that takes every aspect of their business seriously, including the website.
</p>