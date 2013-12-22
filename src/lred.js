/*
	LIKE, REBLOG, EDIT AND DELETE (LRED) BUTTON UNDER EVERY POST
	LRED (c) 2013 little-vince
	little-vince.tumblr.com
	Version: 0.2
	Last edited: 22 December 2013

	This copyright section and all credits in the script must be included in modifications or redistributions of this script.
*/

function little(plink) {
	// no ReblogURL so we need to find the rk and pid ourselves.
	// this uses AJAX (slower) but there's nothing we can do about it.
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open("GET",plink,false);
	xmlHttp.send();
	var str = xmlHttp.responseText;
	str = str.slice(str.lastIndexOf("BEGIN TUMBLR CODE"), str.lastIndexOf("END TUMBLR CODE"));
	// find pid
	var vvpid = str.substring(str.search("pid=") + 4, str.search("pid=") + 4 + str.substring(str.search("pid=") + 4).search("&"));
	// find rk
	var vvrk = str.substring(str.search("rk=") + 3, str.search("rk=") + 3 + str.substring(str.search("rk=") + 3).search("&"));
	return "&pid=" + vvpid + "&rk=" + vvrk;
}

function vince(url,plink) {
	var id = (url.indexOf('reblog') !== -1) ? "&pid=" + url.split('/')[4] + "&rk=" + url.split('/')[5] : little(plink);
	return "http://assets.tumblr.com/assets/html/iframe/o.html?src=" + encodeURIComponent(plink) + id;
}