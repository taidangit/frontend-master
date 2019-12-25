// JavaScript Document

function getElementByClassName(parentNode,targetClass){
		
		var retnode = [];		
		var elemts = parentNode.getElementsByTagName("*"); 
		
		if(elemts.length > 0){
			var myClass = new RegExp("\\b" + targetClass + "\\b");
			for(var i = 0; i <elemts.length; i++){				
				var classes = elemts.item(i).className;
				if(myClass.test(classes)){
					retnode.push(elemts.item(i));
				}
			}
		} 
		
		return retnode;
	}