// JavaScript Document

this.myCssElement = function(elemt) {
	this.element=elemt //boxA
	
	this.cssStyle=function() {
		return getStyleElement(elemt);
	}
	
	this.innerWidth=function() {
			
		var cssElement=getStyleElement(elemt);
		
		var vInnerWidth=parseInt(cssElement.paddingLeft)+
						parseInt(cssElement.width)+
						parseInt(cssElement.paddingRight);
						
		return vInnerWidth;
	}
	
	this.innerHeight=function() {
			
		var cssElement=getStyleElement(elemt);
		
		var vInnerHeight=parseInt(cssElement.paddingTop)+
						parseInt(cssElement.height)+
						parseInt(cssElement.paddingBottom);
						
		return vInnerHeight;
	}
	
	function getStyleElement(element) {
		var styleElement;
		
		if(element.currentStyle) {
			var styleElement=element.currentStyle;//IE
		} else {
			var styleElement=window.getComputedStyle(element, null);
		}
		
		return styleElement;
	}
}