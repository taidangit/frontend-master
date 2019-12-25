// JavaScript Document

function checkIe7() {
		var browser=navigator.appVersion;
		
		if(browser.search("MSIE 7.0;")>0) {
			return true;
		}
		
		return false;
			
	}