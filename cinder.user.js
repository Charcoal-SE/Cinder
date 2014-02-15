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
// @include http://mathoverflow.net/*
// @include http://meta.mathoverflow.net/*
// @include http://discuss.area51.stackexchange.com/*
// @exclude http://chat.*/*
// @exclude http://area51.stackexchange.com/*


// ==/UserScript==
function with_jquery(f) {
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.textContent = "(" + f.toString() + ")(jQuery)";
	document.body.appendChild(script);
};



with_jquery(function($) {

	var domain = "www.erwaysoftware.com";

	$('.post-menu').append($('<span class="lsep">|</span><a class="spam" href="javascript:void(0)" title="Mark as spam">spam</a>'));
	$('.spam').bind("click",function(){
		var postid=$(this).closest('div.question,div[id^=answer]').data('questionid')||$(this).closest('div.question,div[id^=answer]').data('answerid');
		var argstring = 'site=' + window.location.host + "&userid=" + StackExchange.options.user.userId + "&title=" + encodeURIComponent($("div#question-header h1 a.question-hyperlink").html()) + "&postid=" + postid;
		console.log(argstring);
		$.ajax({
			type: "POST",
			url: "http://" + domain + "/cinder/flag.php",
			data: argstring,
			success: function(data)
			{
					console.log(data);
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
				string = string + obj.length;

				string = string + "</span> Network Spam</h4><ul>";

				for (var i = 0; i < obj.length; i++) {
				    string = string + "<li><div class='favicon favicon-" + obj[i]["APISiteName"] + "' title=''></div><a href='http://" + obj[i]["Site"] + "/q/" + obj[i]["PostId"] + "'>" + obj[i]["Title"] + "</a></li>";
				}
				string = string + "</ul></div>";

				$("div #sidebar").prepend(string);
		},
	});
});
