userscripts
===========

Bookmarklets and userscripts for tampermonkey..

Here is the bookmarklet link for EditAllPages (to edit current page ur on)
<a contenteditable="true" href="javascript:(function(){doms = document.getElementsByTagName("*");for (var i=0, max=doms.length; i < max; i++) {if(typeof doms[i].setAttribute === 'function') {doms[i].setAttribute("contenteditable","true");}}})();" title="Drag this to bookmarks toolbar">Edit This Page</a>
