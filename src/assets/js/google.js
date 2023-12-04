// Google Analytics tag (gtag.js)
(function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtag.js' });
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src = 'https://www.googletagmanager.com/gtag/js?id=' + i;
    f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'G-SQYX3YVVFL');

window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-SQYX3YVVFL');