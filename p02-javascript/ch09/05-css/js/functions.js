
function getStyleElement(element) {
	var styleElement;
		
	if(element.currentStyle) {
		styleElement=element.currentStyle;//IE
	} else {
		styleElement=window.getComputedStyle(element, null);
	}
		
	return styleElement;
}