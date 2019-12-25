
function getStyleElement(element) {
	var styleElement;
		
	if(element.currentStyle) {
		var styleElement=element.currentStyle;//IE
	} else {
		var styleElement=window.getComputedStyle(element, null);
	}
		
	return styleElement;
}