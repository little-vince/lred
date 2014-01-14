/*
	LIKE, REBLOG, EDIT AND DELETE (LRED) BUTTON UNDER EVERY POST
	little-vince.tumblr.com
	Version: 0.3
	Last edited: 14 January 2014

	Copyright (c) 2014 little-vince

	Released under the MIT License, this copyright section and all credits in the script must be included in modifications or redistributions of this script.
*/

function vince(url, plink) {
	var id = "&pid=" + url.split('/')[4] + "&rk=" + url.split('/')[5];
	return "http://assets.tumblr.com/assets/html/iframe/o.html?src=" + encodeURIComponent(plink) + id;
}

window.addEventListener("DOMContentLoaded", function() {
	var elements = document.getElementsByClassName("lred");
	for (var i = 0; i < elements.length; i++) {
		var e = elements[i];
		e.src = vince(e.getAttribute('data-reblog'), e.getAttribute('data-plink'));
	}
}, false);
