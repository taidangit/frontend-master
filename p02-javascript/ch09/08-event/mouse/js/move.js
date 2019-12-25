
this.moveElement=function(positionObj) {
	
	//==================PUBLIC FUNCTIONS=====================
	var _moveSize = 5;
	var _t;
	var _speed = 5;
	
	this.setMoveSize=function(val) {
		_moveSize = val;	
	}
	
	this.setSpeed=function(val) {
		_speed = val;	
	}
	
	this.stopMove=function() {
		stopMove();
	}
	
	this.getDirection=function() {
		return getDirection(positionObj);
	}
	
	this.run=function(objHTML) {
		objHTML.style.top=positionObj.yA+"px";
		objHTML.style.left=positionObj.xA+"px";
		objHTML.style.position="absolute";
		objHTML.style.zIndex=10101;
		
		var vDirection=getDirection(positionObj);
		
		if(vDirection != "") {
			if(vDirection == "right") {
				moveRight(positionObj, objHTML);	
			}
			
			if(vDirection == "left") {
				moveLeft(positionObj, objHTML);
			}
			
			if(vDirection == "top") {
				moveTop(positionObj, objHTML);
			}
			
			if(vDirection == "bottom") {
				moveBottom(positionObj, objHTML);
			}
			
			if(vDirection == "lefttop") {
				moveLeftTop(positionObj, objHTML);
				
			}
			
			if(vDirection == "righttop") {
				moveRightTop(positionObj, objHTML);
				
			}
			
			if(vDirection == "leftbottom") {
				moveLeftBottom(positionObj, objHTML);
				
			}
			
			if(vDirection == "rightbottom") {
				moveRightBottom(positionObj, objHTML);
				
			}
		}
		
	}
	
	//==================PRIVATE FUNCTIONS=====================
	function moveRight(posObj, objHTML) {
		var moveSize = _moveSize;//5px
		var speed = _speed;//0.005s
		var xStop = posObj.xB;
		var flag=true;
		var tmp=xStop- parseFloat(objHTML.style.left);
		if(tmp < moveSize) {
			moveSize=tmp;
			flag=false;
		}
		
		console.log(xStop+"|"+objHTML.style.left);
		
		objHTML.style.left = parseFloat(objHTML.style.left)+moveSize+"px";
		
		
			
		if(flag) {
			_t = setTimeout(function(){ moveRight(posObj, objHTML);}, speed);
		} else {
			
			var boxB=document.getElementById("boxB");
			insertToElement(objHTML, boxB);
			
		}
		
	}
	
	function moveLeft(posObj, objHTML) {
		var moveSize = _moveSize;//5px
		var speed = _speed;//0.005s
		var xStop = posObj.xB;
		var flag=true;
		var tmp= parseFloat(objHTML.style.left) - xStop;
		if(tmp < moveSize) {
			moveSize=tmp;
			flag=false;
	
		}
		
		console.log(xStop+"|"+objHTML.style.left);
		
		objHTML.style.left = parseFloat(objHTML.style.left) - moveSize +"px";
	
		if(flag) {
			_t = setTimeout(function(){ moveLeft(posObj, objHTML);}, speed);
		} else {
			
			var boxB=document.getElementById("boxB");
			insertToElement(objHTML, boxB);
		}
			
		
	}
	
	function moveTop(posObj, objHTML) {
		var moveSize = _moveSize;//5px
		var speed = _speed;//0.005s
		var yStop = posObj.yB;
		var flag=true;
		var tmp= parseFloat(objHTML.style.top) - yStop;
		if(tmp < moveSize) {
			moveSize=tmp;
			flag=false;
		}
		
		console.log(yStop+"|"+objHTML.style.top);
		
		objHTML.style.top = parseFloat(objHTML.style.top) - moveSize +"px";
	
		if(flag) {
			_t = setTimeout(function(){ moveTop(posObj, objHTML);}, speed);
		} else {
			
			var boxB=document.getElementById("boxB");
			insertToElement(objHTML, boxB);
			
		}
		
	}
	
	function moveBottom(posObj, objHTML) {
		var moveSize = _moveSize;//5px
		var speed = _speed;//0.005s
		var yStop = posObj.yB;
		var flag=true;
		var tmp= yStop - parseFloat(objHTML.style.top);
		if(tmp < moveSize) {
			moveSize=tmp;
			flag=false;
		}
		
		console.log(yStop+"|"+objHTML.style.top);
		
		objHTML.style.top = parseFloat(objHTML.style.top) + moveSize +"px";
	
		if(flag) {
			_t = setTimeout(function(){ moveBottom(posObj, objHTML);}, speed);
		} else {
			
			var boxB=document.getElementById("boxB");
			insertToElement(objHTML, boxB);
			
		}
		
	}
	
	function xyPecent(posObj) {
		var vHeight=Math.abs(posObj.yA-posObj.yB);
		var vWidth=Math.abs(posObj.xA-posObj.xB);
		
		var xPecent, yPecent;
		if(vHeight==vWidth) {
			xPecent=1;
			yPecent=1;
		} else if(vHeight > vWidth) {
			xPecent=(vWidth/vHeight).toFixed(5);
			yPecent=1;
		} else {
			xPecent=1;
			yPecent=(vHeight/vWidth).toFixed(5);
		}
		
		return {xPecent: Math.abs(xPecent), yPecent: Math.abs(yPecent)};
	}
	
	function moveLeftTop(posObj, objHTML) {
		var moveSize = _moveSize;//5px
		var speed = _speed;//0.005s
		var yStop = posObj.yB;
		var xStop = posObj.xB;
		
		var pecent=xyPecent(posObj);
		
		var flag=true;
		
		if(pecent.xPecent > pecent.yPecent) {
			var tmp=parseFloat(objHTML.style.left) - xStop;
		} else {
			var tmp=parseFloat(objHTML.style.top) - yStop;	
		}
		
		
		if(tmp < moveSize) {
			moveSize=tmp;
			flag=false;
		}
		
		console.log(objHTML.style.left+"|"+objHTML.style.top);
		
		objHTML.style.top = parseFloat(objHTML.style.top) - (moveSize*pecent.yPecent) +"px";
		objHTML.style.left = parseFloat(objHTML.style.left) - (moveSize*pecent.xPecent) +"px";
	
		if(flag) {
			_t = setTimeout(function(){ moveLeftTop(posObj, objHTML);}, speed);
		} else {
			
			var boxB=document.getElementById("boxB");
			insertToElement(objHTML, boxB);
			
		}
		
	}
	
	
	function moveRightTop(posObj, objHTML) {
		var moveSize = _moveSize;//5px
		var speed = _speed;//0.005s
		var yStop = posObj.yB;
		var xStop = posObj.xB;
		
		var pecent=xyPecent(posObj);
		
		var flag=true;
		
		if(pecent.xPecent > pecent.yPecent) {
			var tmp=xStop-parseFloat(objHTML.style.left);
		} else {
			var tmp=parseFloat(objHTML.style.top) - yStop;	
		}
		
		
		if(tmp < moveSize) {
			moveSize=tmp;
			flag=false;
		}
		
		console.log(objHTML.style.left+"|"+objHTML.style.top);
		
		objHTML.style.top = parseFloat(objHTML.style.top) - (moveSize*pecent.yPecent) +"px";
		objHTML.style.left = parseFloat(objHTML.style.left) + (moveSize*pecent.xPecent) +"px";
	
		if(flag) {
			_t = setTimeout(function(){ moveRightTop(posObj, objHTML);}, speed);
		} else {
			
			var boxB=document.getElementById("boxB");
			insertToElement(objHTML, boxB);
			
		}
		
	}
	
	function moveLeftBottom(posObj, objHTML) {
		var moveSize = _moveSize;//5px
		var speed = _speed;//0.005s
		var yStop = posObj.yB;
		var xStop = posObj.xB;
		
		var pecent=xyPecent(posObj);
		
		var flag=true;
		
		if(pecent.xPecent > pecent.yPecent) {
			var tmp=parseFloat(objHTML.style.left) - xStop;
		} else {
			var tmp=yStop - parseFloat(objHTML.style.top);	
		}
		
		
		if(tmp < moveSize) {
			moveSize=tmp;
			flag=false;
		}
		
		console.log(objHTML.style.left+"|"+objHTML.style.top);
		
		objHTML.style.top = parseFloat(objHTML.style.top) + (moveSize*pecent.yPecent) +"px";
		objHTML.style.left = parseFloat(objHTML.style.left) - (moveSize*pecent.xPecent) +"px";
	
		if(flag) {
			_t = setTimeout(function(){ moveLeftBottom(posObj, objHTML);}, speed);
		} else {
			
			var boxB=document.getElementById("boxB");
			insertToElement(objHTML, boxB);
			
		}
		
	}
	
	function moveRightBottom(posObj, objHTML) {
		var moveSize = _moveSize;//5px
		var speed = _speed;//0.005s
		var yStop = posObj.yB;
		var xStop = posObj.xB;
		
		var pecent=xyPecent(posObj);
		
		var flag=true;
		
		if(pecent.xPecent > pecent.yPecent) {
			var tmp= xStop - parseFloat(objHTML.style.left);
		} else {
			var tmp=yStop - parseFloat(objHTML.style.top);	
		}
		
		
		if(tmp < moveSize) {
			moveSize=tmp;
			flag=false;
		}
		
		console.log(objHTML.style.left+"|"+objHTML.style.top);
		
		objHTML.style.top = parseFloat(objHTML.style.top) + (moveSize*pecent.yPecent) +"px";
		objHTML.style.left = parseFloat(objHTML.style.left) + (moveSize*pecent.xPecent) +"px";
	
		if(flag) {
			_t = setTimeout(function(){ moveRightBottom(posObj, objHTML);}, speed);
		} else {
			
			var boxB=document.getElementById("boxB");
			insertToElement(objHTML, boxB);
			
		}
		
	}
	
	function insertToElement(objHTML, newParent) {
		
			objHTML.style.removeProperty("width");
			objHTML.style.removeProperty("left");
			objHTML.style.removeProperty("top");
			objHTML.style.removeProperty("position");
			objHTML.style.removeProperty("z-index");
			newParent.appendChild(objHTML);
			setTimeout(function() {objHTML.style.removeProperty("background-color");}, 900);
	}
	
	function stopMove() {
		clearTimeout(_t);
	}
	
	function getDirection(posObj) {
		var val="";
		if(posObj.xA > posObj.xB) {
			val+="left";
		}
		
		if(posObj.xA < posObj.xB) {
			val+="right";
		}
		
		if(posObj.yA < posObj.yB) {
			val+="bottom";
		}
		
		if(posObj.yA > posObj.yB) {
			val+="top";
		}
		
		if(posObj.xA == posObj.xB) {
			val+="";
		}
		
		if(posObj.yA == posObj.yB) {
			val+="";
		}		
		return val;
	}
}

