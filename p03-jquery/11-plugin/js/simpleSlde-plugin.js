// JavaScript Document

(function($){
	
	$.simpleSlide=function(selector, options) {
			var defaults;
			
			defaults={
				itemDefaults: 0,
				delay: 2000,
				fadeSpeed: 1000,
				from: "az",
				auto: true
			};
			
		options=$.extend(defaults, options);
		
		console.log(options);
		
		var title 	= $(selector).find("div.title");		
		var i 		= options.itemDefault;	
		var imgs	= $(selector).find("img");
		var count	= imgs.length;
		
		console.log(count);
		
		imgs.eq(i).show();
		
		
		title.text(imgs.eq(i).attr("title")).css("opacity","0.7");
		
		//console.log(count);
		if(options.auto){
			setInterval(function(){
				imgs.eq(i).fadeOut(options.fadeSpeed);
				if(options.from == "az"){
					i = (i + 1 == count)? 0:i+1;
				}else{
					i = (i == 0)? count-1:i-1;
				}
				imgs.eq(i).fadeIn(options.fadeSpeed);
				title.text(imgs.eq(i).attr("title")).css("opacity","0.7");
				
				
			},options.delay);
		}
	};
	
})(jQuery);

$(document).ready(function(e) {
	$.simpleSlide("#slide",{itemDefault: 0,from: "az" , auto: true});
   
});