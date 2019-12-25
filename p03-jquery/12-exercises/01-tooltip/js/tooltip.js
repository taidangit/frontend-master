// JavaScript Document

(function($){
	$.fn.zTooltip=function(options) {//object
		var defaults={
						idDefault: "#ztooltip-container",
						
					};
					
		options=$.extend(defaults, options);
		
		var container = options.idDefault;
		var left, top;
		var tooltipWidth, tooltipHeight;
		
		$(this).mouseover(function(e){
			if($(this).attr("ztool-type") == "text"){
				$(container).text($(this).attr("ztool-source"));
			}
			
			if($(this).attr("ztool-type") == "html"){
				//ztooltip-source-tmp1
				var id = "#ztooltip-source-" + $(this).attr("ztool-source");
				
				$(container).html($(id).html());
			}
			$(container).css({'display':'block'});
			
		}).mousemove(function(e){
			tooltipWidth = $(container).outerWidth();
			tooltipHeight = $(container).outerHeight();
			
			var pageWidth = $("body").width();
			
			if(e.pageX < pageWidth/2){
				left = e.pageX - 20;
			}else{
				left = e.pageX - tooltipWidth;
			}
			
			if(e.pageY > tooltipHeight){
				top = e.pageY - (tooltipHeight + 20);	
			}else{
				top = e.pageY + 20; 
			}
			
			$(container).css({"top": top + "px", "left" : left + "px"});
			 
		}).mouseout(function(e){
			$(container).css({'display':'none'});
		});
	};
	
})(jQuery);

$(document).ready(function(e) {
    $(".ztooltip").zTooltip();
});
