// ==UserScript==
// @name Cinder Client
// @description Flag-tracker-thingy
// @namespace Charcoal (This is to avoid conflicts with userscripts that share a name)
// @author Charcoal Team
// @license MIT
// @include http://stackoverflow.com/*
// @include http://serverfault.com/*
// @include http://superuser.com/*
// @include http://meta.stackoverflow.com/*
// @include http://meta.serverfault.com/*
// @include http://meta.superuser.com/*
// @include http://stackapps.com/*
// @include http://*.stackexchange.com/*
// @include http://askubuntu.com/*
// @include http://meta.askubuntu.com/*
// @include http://answers.onstartups.com/*
// @include http://meta.answers.onstartups.com/*
// @include http://mathoverflow.net/*
// @include http://meta.mathoverflow.net/*
// @include http://discuss.area51.stackexchange.com/*
// @exclude http://chat.*/


// ==/UserScript==
function with_jquery(f) {
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.textContent = "(" + f.toString() + ")(jQuery)";
	document.body.appendChild(script);
};



with_jquery(function($) {

	var domain = "www.fakedomain.com"; //For development!

	$('.post-menu').append($('<span class="lsep">|</span><a class="spam" href="javascript:void(0)" title="Mark as spam">spam</a>'));
	$('.spam').bind("click",function(){
		var postid=$(this).closest('div.question,div[id^=answer]').data('questionid')||$(this).closest('div.question,div[id^=answer]').data('answerid');
		var argstring = 'site=' + StackExchange.options.site.name + "&userid=" + StackExchange.options.user.userId + "&title=" + encodeURIComponent($("div#question-header h1 a.question-hyperlink").html()) + "&postid=" + postid;
		console.log(argstring);
		$.ajax({
			type: "POST",
			url: "http://" + domain + "/cinder/flag.php",
			data: argstring,
			success: function(data)
			{
					console.log(data);
					var obj = eval("(" + data + ")");
					string = string + obj["num"].toString();
					console.log(obj["num"]);
					console.log(string);
			},
		});
	});

	var string = '<div id="hot-network-questions" class="module spam-list"><h4><span class="supernovabg mod-flag-indicator" style="font-size:16px">';
	$.ajax({
		type: "POST",
		url: "http://" + domain + "/cinder/flagged.php",
		data: "",
		success: function(data)
		{
				console.log(data);
				var obj = eval("(" + data + ")");
				string = string + obj["num"].toString();
				console.log(obj["num"]);
				console.log(string);
				$("div #sidebar").prepend(string + '</span> Network Spam</h4><ul><li><div class="favicon favicon-security" title="Information Security Stack Exchange"></div><a href="http://security.stackexchange.com/questions/49234/why-are-chips-safer-than-magnetic-stripes" class="js-gps-track" data-gps-track="site.switch({ item_type:8, target_site:162 }); posts_hot_network.click({ item_type:2, location:8 })">Buy football streaming!</a></li><li><div class="favicon favicon-stackoverflow" title="English Language &amp; Usage Stack Exchange"></div><a href="http://english.stackexchange.com/questions/147511/what-do-you-call-unclean-water-that-you-cant-see-through" class="js-gps-track" data-gps-track="site.switch({ item_type:8, target_site:97 }); posts_hot_network.click({ item_type:2, location:8 })">Please buy a new car!</a></li></ul></div>');
		},
	});
});
