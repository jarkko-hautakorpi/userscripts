// ==UserScript==
// @name       EditAllPages
// @namespace  http://www.raspiscope.com
// @version    0.1
// @description  Makes all themepreviews editable, except some shitty Flash-themes
// @match      http://themeforest.net
// @match      http://themeforest.net/*
// @copyright  2014+, Jarkko Hautakorpi
// ==/UserScript==

doms = document.getElementsByTagName("*");
for (var i=0, max=doms.length; i < max; i++) {
    if(typeof doms[i].setAttribute === 'function') {
        doms[i].setAttribute("contenteditable","true");
	}
}
