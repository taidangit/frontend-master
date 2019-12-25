// JavaScript Document

(function($){
	$.fn.zSlider=function(options) {
		
		var defaults={
						"data": [],
						"sFolder" : "images/small/",
						"bFolder" : "images/big/",
						"defaultItem" : 0,
						"widthItem" : 118,
						"pic" : ".zSlider-img-content",
						"leftArrow" : ".zSlider-left-arrow",
						"rightArrow" : ".zSlider-right-arrow",
						"title" : ".zSlider-bar-title",
						"detail" : ".zSlider-bar-detail",
						"thumbs" : ".zSlider-thumb-bar"
						
					};
		options=$.extend(defaults, options);
		
		console.log(options);
		
		var dataArr=options.data;
		var itemTotal=options.data.length;
		var sFolder=options.sFolder;
		var bFolder=options.bFolder;
		var ulThumbs=options.thumbs+" ul";
		var itemSelected=options.defaultItem;
		var leftArrow=options.leftArrow;
		var rightArrow=options.rightArrow;
		var itemTitle=options.title;
		var itemDetail=options.detail;
		var widthUL=0;
		var runFlag="right";
		var divMark="";
		
		init().done(function(){
			console.log("Da thuc hien xong ham init");	
			run();	
		});
		
		function run(){
			timeout = setInterval(function(){
				if(runFlag == "right"){
					console.log("Chay ve phia ben tay phai");	
					runRight();	
				}else{
					console.log("Chay ve phia ben tay trai");
					runleft();	
				}
				
			},2000);
		}
		
		function runRight() {
			$(options.pic).animate({
				"left": "-920px",
				"duration": 500
			}, function() {
				itemSelected+=1;
				$(divMark).removeClass("maskHover");
				
				$(options.pic)
.css({"left": "0px"});	

				if(itemSelected + 1 < itemTotal){
					var leftPic = bFolder + dataArr[itemSelected].pic;
					var rightPic = bFolder + dataArr[itemSelected + 1].pic;
					var str = '<img src="' +  leftPic + '" /><img src="' +  rightPic + '" />';
					$(options.pic).empty().append(str);
					console.log("==============runRight=============");
					console.log(dataArr[itemSelected].pic);
					
					var thumbElemt = ulThumbs + " li:eq(" + itemSelected + ")";
					
					var elemtPosition = $(thumbElemt).position().left 
										- Math.abs($(ulThumbs).position().left);
					console.log("elemtPosition: " + elemtPosition);
					
					var thumbBarWidth = $(options.thumbs).width();
					console.log("thumbBarWidth: " + thumbBarWidth);
					
					var thumbBar2 = thumbBarWidth/2;
					console.log("thumbBar2: " + thumbBar2);
					
					rightSize = $(ulThumbs).width() - Math.abs($(ulThumbs).position().left) 
									- thumbBarWidth;
					console.log("rightSize: " + rightSize);
					
					if(elemtPosition + options.widthItem > thumbBarWidth){
						if(rightSize > thumbBar2){
							moveSize = thumbBar2;
						}else{
							moveSize = rightSize;
						}
						console.log("moveSize: " + moveSize);
						$(ulThumbs).animate({"left" : "-=" + moveSize},"slow");
					}
									
				}else if(itemSelected + 1 == itemTotal){
					if(rightSize > 0 && moveSize !=rightSize ){
						$(ulThumbs).animate({"left" : "-=" + rightSize},"slow");
					}
					//runFlag = "left";
					var leftPic = bFolder + dataArr[itemSelected - 1].pic;
					var rightPic = bFolder + dataArr[itemSelected].pic;
					var str = '<img src="' +  leftPic + '" /><img src="' +  rightPic + '" />';
					$(options.pic).css({"left" : "-920px"});
					runFlag = "left";
				}
				
				var markDefault = $(ulThumbs + " li:eq(" + itemSelected + ") div.mask");
				$(markDefault).addClass("maskHover");
					
				$(itemTitle).text(dataArr[itemSelected].title);
				$(itemDetail).text(dataArr[itemSelected].detail);			
			});
		}
		
		function runleft() {
			$(options.pic).animate({
				"left"		: "0px",
				"duration"	: 500	
			},function(){
				console.log("Da chay qua trai mot doan 920px");
				
				//1. Thiet lap lai hinh ke tiep se hien thi
				itemSelected -= 1;//1 -2 
				
				//2. Loai bo cac class maskHove cua cac the div.mask
				$(divMark).removeClass("maskHover");
				
				//3. Thiet lap lai vi tri left chua 2 hinh lon
				$(options.pic).css({"left": "-920px"});
				if(itemSelected - 1 >= 0){
					var leftPic 	= bFolder + dataArr[itemSelected-1].pic;
					var rightPic 	= bFolder + dataArr[itemSelected].pic;
					
					var str = '<img src="' +  leftPic + '" /><img src="' +  rightPic + '" />';
					
					$(options.pic).empty().append(str);
					
					console.log("==============runLeft=============");
					console.log(dataArr[itemSelected-1].pic);
					
					var thumbElemt = ulThumbs + " li:eq(" + itemSelected + ")";
					
					var elemtPosition = $(thumbElemt).position().left;
					console.log("elemtPosition: " + elemtPosition);
					
					var thumbBarWidth = $(options.thumbs).width();
					console.log("thumbBarWidth: " + thumbBarWidth);
					
					var thumbBar2 = thumbBarWidth/2;
					console.log("thumbBar2: " + thumbBar2);
					
					leftSize = Math.abs($(ulThumbs).position().left);
					console.log("leftSize: " + leftSize);
					
					if(elemtPosition- options.widthItem < leftSize){
						if(leftSize > thumbBar2){
							moveSize = 	thumbBar2;
						}else{
							moveSize = leftSize;
						}
						$(ulThumbs).animate({"left": "+=" + moveSize},"slow");
					}
					
					
				}else if(itemSelected - 1 < 0){
					//runFlag = "left";
					var leftPic 	= bFolder + dataArr[itemSelected].pic;
					var rightPic 	= bFolder + dataArr[itemSelected + 1].pic;
					var str = '<img src="' +  leftPic + '" /><img src="' +  rightPic + '" />';
					$(options.pic).css({"left" : "0px"});
					runFlag = "right";
				}
				
				var markDefault = $(ulThumbs + " li:eq(" + itemSelected + ") div.mask");
				$(markDefault).addClass("maskHover");
				
					
				$(itemTitle).text(dataArr[itemSelected].title);
				$(itemDetail).text(dataArr[itemSelected].detail);		
				
				
			});
		}
		
		function init() {
			var dfd=$.Deferred();
			
			if(itemTotal > 0) {
				setWidthUL();
				var str="";
				var picDir="";
				$(ulThumbs).empty();
				$.each(dataArr, function(i, val){
					picDir=sFolder+val.pic;
					str='<li><img src="'+picDir+'" /><div class="mask"></div</li>';
					$(ulThumbs).append(str);
				});
				
				divMark=ulThumbs+" li"+" div.mask";
				$(divMark).on({
					mouseenter: function() {
						$(this).addClass("maskHover");
						
					},
					mouseleave: function() {
						$(this).removeClass("maskHover");
						var markDefaut=$(ulThumbs+" li:eq("+itemSelected+") div.mask");
						$(markDefaut).addClass("maskHover");
						
					},
					click: function(){
						$(divMark).removeClass("maskHover");
						itemSelected=$(divMark).index($(this));
						
						setPicturePosition();
						
						
					}
					
				});
				
				$(leftArrow).on("click",function(e){
					runFlag = "left";
				});
				
				$(rightArrow).on("click",function(e){
					runFlag = "right";
				});
								
				setPicturePosition();
				dfd.resolve();
			} else {
				dfd.reject();
			}
			
			return dfd.promise();
		}
		
		function setPicturePosition(){
			if(runFlag=="right"){
				var leftPic=bFolder+dataArr[itemSelected].pic;
				var rightPic=bFolder+dataArr[itemSelected+1].pic;
				var str='<img src="'+leftPic+'"/><img src="'+rightPic+'"/>';
			} else {
				var leftPic=bFolder+dataArr[itemSelected-1].pic;
				var rightPic=bFolder+dataArr[itemSelected].pic;
				var str='<img src="'+leftPic+'"/><img src="'+rightPic+'"/>';
				$(options.pic).css({"left": "-920px"});
			}
			
			$(options.pic).empty().append(str);
			var markDefaut=$(ulThumbs+" li:eq("+itemSelected+") div.mask");
			$(markDefaut).addClass("maskHover");
			
			$(itemTitle).text(dataArr[itemSelected].title);
			$(itemDetail).text(dataArr[itemSelected].detail);
		}
		
		function setWidthUL() {
			widthUL = itemTotal * options.widthItem;
			$(ulThumbs).css({"width": widthUL});
		}
	}
})(jQuery);

$(document).ready(function(e) {
	var dataArr=[
					{"pic":"1.jpg", "title": "Picture 1", "detail":"This is a test 1"},
					{"pic":"2.jpg", "title": "Picture 2", "detail":"This is a test 2"},
					{"pic":"3.jpg", "title": "Picture 3", "detail":"This is a test 3"},
					{"pic":"4.jpg", "title": "Picture 4", "detail":"This is a test 4"},
					{"pic":"5.jpg", "title": "Picture 5", "detail":"This is a test 5"},
					{"pic":"6.jpg", "title": "Picture 6", "detail":"This is a test 6"},
					{"pic":"7.jpg", "title": "Picture 7", "detail":"This is a test 7"},
					{"pic":"8.jpg", "title": "Picture 8", "detail":"This is a test 8"},
					{"pic":"9.jpg", "title": "Picture 9", "detail":"This is a test 9"},
					{"pic":"10.jpg", "title": "Picture 10", "detail":"This is a test 10"},
					{"pic":"11.jpg", "title": "Picture 11", "detail":"This is a test 11"},
					{"pic":"12.jpg", "title": "Picture 12", "detail":"This is a test 12"}
					
				];
    var obj={
			
				"data": dataArr,
				"sFolder" : "images/img114x72/",
				"bFolder" : "images/img920x360/"
		};
		
	$("#zSlider").zSlider(obj);
});