/*
	LIKE, REBLOG, EDIT AND DELETE (LRED) BUTTON UNDER EVERY TUMBLR POST
	little-vince.tumblr.com
	Version: 0.4
	Last edited: 22 January 2014

	Copyright (c) 2014 little-vince

	Released under the MIT License, this copyright section and all credits in the script must be included in modifications or redistributions of this script.
*/

var marker = 0;

function addSource(target) {
	var elements = target.querySelectorAll(".lred");
	for (; marker < elements.length; marker++) {
		var e = elements[marker];
		e.src = vince(e.getAttribute('data-reblog'), e.getAttribute('data-plink'));
	}
}

function vince(url, plink) {
	var id = "&pid=" + url.split('/')[4] + "&rk=" + url.split('/')[5];
	return "http://assets.tumblr.com/assets/html/iframe/o.html?src=" + encodeURIComponent(plink) + id;
}

window.addEventListener("DOMContentLoaded", function() {
	addSource(document.body);

	var observer = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			if (mutation.type === 'childList') {
				addSource(mutation.target);
			}
		});
	});

	observer.observe(document.body, {childList: true, subtree: true});

}, false);
