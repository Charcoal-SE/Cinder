// ==UserScript==
// @name Script name here
// @description Short description goes here
// @namespace Manishearth (This is to avoid conflicts with userscripts that share a name)
// @author Your name here
// @license GNU GPL v3 (http://www.gnu.org/copyleft/gpl.html)
// @include http://stackoverflow.com/*
// @include http://serverfault.com/*
// @include http://superuser.com/*
// @include http://meta.stackoverflow.com/*
// @include http://meta.serverfault.com/*
// @include http://meta.superuser.com/*
// @include http://stackapps.com/*
// @include http://.stackexchange.com/
// @include http://askubuntu.com/*
// @include http://meta.askubuntu.com/*
// @include http://answers.onstartups.com/*
// @include http://meta.answers.onstartups.com/*
// @include http://mathoverflow.net/*
// @include http://meta.mathoverflow.net/*
// @include http://discuss.area51.stackexchange.com/*
// @exclude http://chat./


// ==/UserScript==
function with_jquery(f) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.textContent = "(" + f.toString() + ")(jQuery)";
    document.body.appendChild(script);
};



with_jquery(function($) {
    $("#sidebar").prepend('<div id="hot-network-questions" class="module spam-list"><h4><span class="bounty-indicator-tab"><strong>2</strong></span> Network Spam</h4><ul><li><div class="favicon favicon-security" title="Information Security Stack Exchange"></div><a href="http://security.stackexchange.com/questions/49234/why-are-chips-safer-than-magnetic-stripes" class="js-gps-track" data-gps-track="site.switch({ item_type:8, target_site:162 }); posts_hot_network.click({ item_type:2, location:8 })">Buy football streaming!</a></li><li><div class="favicon favicon-stackoverflow" title="English Language &amp; Usage Stack Exchange"></div><a href="http://english.stackexchange.com/questions/147511/what-do-you-call-unclean-water-that-you-cant-see-through" class="js-gps-track" data-gps-track="site.switch({ item_type:8, target_site:97 }); posts_hot_network.click({ item_type:2, location:8 })">Please buy a new car!</a></li></ul></div>');
});
