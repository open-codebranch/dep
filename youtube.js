let sw = 0;

e = selector => document.querySelector(selector);
e("#title > h1").addEventListener("click", function(){
	console.log("clicked");
	if (sw == 0) {
		console.log("inside if");
		sw = 1;
		e("#secondary").style.visibility = "hidden";
		e("#related").style.visibility = "visible";

		e("#related").style.cssText = `   height: calc(-80px + 100vh);
											overflow: hidden scroll;
											position: fixed; top: 80px; right: 0;
											z-index: 99999999999;
											padding-right: var(--ytd-margin-6x);
											width: var(--ytd-watch-flexy-sidebar-width); min-width: var(--ytd-watch-flexy-sidebar-min-width);
											margin-top: -10px;`;
	} else {
		sw = 0;
		e("#secondary").style.visibility = "visible";
		e("#related").style.visibility = "hidden";
	}
});