// JavaScript Document

(function($){
	
	$.fn.zoomIt = function(options) {
		var defaults;
		var newWidth, newHeight;
		
		defaults={
					width:100,//100%
					height: 100, //100%
					both: 100
				}
		
		options=$.extend(defaults, options);
		
		console.log(options);
		
		if(options.both!=100) {
			newWidth=$(this).width()*options.both/100;
			
			newHeight=$(this).height()*options.both/100;
		} else {
			newWidth=$(this).width()*options.width/100;
			
			newHeight=$(this).height()*options.height/100;
		}
		
		$(this).animate({width: newWidth , height: newHeight}, 500);
		
		return this;
		
	};
		
})(jQuery);

$(document).ready(function(e) {	
	$("#zoomIn").click(function(e) {
        $("#box").zoomIt({width: 80, height: 70}).removeClass("bg01").addClass("bg02");
    });
	
	$("#zoomOut").click(function(e) {
        $("#box").zoomIt({width: 120, height: 130}).removeClass("bg02").addClass("bg01");
    });
	
});