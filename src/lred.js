/*
	LIKE, REBLOG, EDIT AND DELETE (LRED) BUTTON UNDER EVERY TUMBLR POST
	little-vince.tumblr.com
	Version: 0.6
	Last edited: 04 February 2014

	Copyright (c) 2014 little-vince

	Released under the MIT License, this copyright section and all credits in the script must be included in modifications or redistributions of this script.
*/

var marker = 0; // keeps track of which iframes have been fixed

/**
 * Determines the url of the iframe
 * @param {string} url The reblog url of the post
 * @param {string} plink The permalink of the post
 * @return {string} The url of the iframe.
 */
function vince(url, plink) {
	var id = "&pid=" + url.split('/')[4] + "&rk=" + url.split('/')[5];
	return "http://assets.tumblr.com/assets/html/iframe/o.html?src=" + encodeURIComponent(plink) + id;
}

/**
 * Adds the source of the iframes in an element
 * @param {element} target The element to search for iframes in
 * @return {boolean} True if successful
 */
function addSource(target) {
	var elements = target.querySelectorAll("iframe.lred");
	if (elements.length < 1) {
		return false;
	}

	for (; marker < elements.length; marker++) {
		var e = elements[marker];
		e.src = vince(e.getAttribute("data-reblog"), e.getAttribute("data-plink")) + "&name=" + e.getAttribute("data-user") + "&avatar=" + e.getAttribute("data-pic");
	}
	return true;
}

document.addEventListener("DOMContentLoaded", function() {
	// only continue if the first call to addSource() was successful
	if (!addSource(document.body)) {
		return;
	}

	// create an observer that will trigger addSource() whenever infinite scroll is enabled
	var observer = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			if (mutation.type === 'childList') {
				addSource(mutation.target);
			}
		});
	});
	observer.observe(document.body, {childList: true, subtree: true});
}, false);
