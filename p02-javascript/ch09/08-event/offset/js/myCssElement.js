// JavaScript Document
this.myCssElement = function(objHTML){
	this.element = objHTML;//boxA
	
	/*=======================================
	* PUBLIC FUNCTIONS
	*========================================*/
	this.cssStyle = function(){
		return getStyleElement(objHTML);
	}
	
	this.outerWidth = function(){
		return getOuterWidth(objHTML);
	}
	
	this.outerHeight = function(){
		return getOuterHeight(objHTML);
	}
	
	this.innerHeight = function(){
		return getInnerHeight(objHTML);
	}
	
	this.innerWidth = function(){
		return getInnerWidth(objHTML);
	}
	
	this.position = function(vType){
		if(vType != "min"){
			return	getPostionMax(objHTML);
		}else{
			return getPostionMin(objHTML);
		}
	}
	
	this.getOffset = function(ele){
		return getOffset(ele);
	}
		
	/*=======================================
	* PRIVATE FUNCTIONS
	*========================================*/
	
	function getOffset(elemt){
		console.log("getOffset");
		var oLeft = 0;
		var oTop = 0;
		
		while(elemt.tagName != "BODY"){
			oLeft += elemt.offsetLeft;
			oTop += elemt.offsetTop;
			elemt = elemt.offsetParent;
			var cssElemt = getStyleElement(elemt);
			oLeft += parseInt(cssElemt.borderLeftWidth);
			oTop += parseInt(cssElemt.borderTopWidth);
		}
		
		return {left: oLeft, top: oTop};
		
	}
	
	function getPostionMin(elemt){
		var left, right, top, bottom;
		var cssElemt = getStyleElement(elemt);
		
		left 	= elemt.offsetLeft +  parseInt(cssElemt.borderLeftWidth);
		top 	= elemt.offsetTop +  parseInt(cssElemt.borderTopWidth);
		right	= elemt.offsetLeft + elemt.offsetWidth - parseInt(cssElemt.borderRightWidth);
		bottom	= elemt.offsetTop + elemt.offsetHeight - parseInt(cssElemt.borderBottomWidth);
		
		return {left: left, top: top, right: right, bottom: bottom  };
	}
	
	function getPostionMax(elemt){
		var left, right, top, bottom;
		
		left 	= elemt.offsetLeft;
		top 	= elemt.offsetTop;
		right	= elemt.offsetLeft + elemt.offsetWidth;
		bottom	= elemt.offsetTop + elemt.offsetHeight;
		
		return {left: left, top: top, right: right, bottom: bottom  };
	}
	
	function getOuterWidth(elemt){
		var vOuterWidth = elemt.offsetWidth;
		return vOuterWidth;
	}
	
	function getOuterHeight(elemt){
		var vOuterHeight = elemt.offsetHeight;
		return vOuterHeight;
	}
	
	function getInnerHeight(elemt){
		var cssElemt = getStyleElement(elemt);
		var vInnerHeight = elemt.offsetHeight - parseInt(cssElemt.borderTopWidth)
							- parseInt(cssElemt.borderBottomWidth);
		return vInnerHeight;
	}
	
	function getInnerWidth(elemt){
		var cssElemt = getStyleElement(elemt);
		var vInnerWidth = elemt.offsetWidth - parseInt(cssElemt.borderLeftWidth)
							- parseInt(cssElemt.borderRightWidth);
		return vInnerWidth;
	}
	
	function getStyleElement(elemt){
		var styleElement;
		if(elemt.currentStyle){
			styleElement = elemt.currentStyle; //IE
		}else{
			styleElement = window.getComputedStyle(elemt,null);
		}
		
		return styleElement;
	}
}