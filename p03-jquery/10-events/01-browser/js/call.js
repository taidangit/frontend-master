function addDiv(selector, arr) {
			
	$(selector).empty();
	$.each(arr, function(i, val) {
		console.log(i+": "+val);
				
		$(selector).append("<div>"+(i+1)+". "+val+"</div>");
				
	});
}
		
function changeColor(selector, color1, color2) {
			
	$(selector).find(":even").addClass(color1)
				.end()
				.find(":odd").addClass(color2);
			
}