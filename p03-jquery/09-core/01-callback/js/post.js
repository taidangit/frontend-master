// JavaScript Document
$(document).ready(function(e) {
    
	var url, dta;
	
	$("#btnLogin").click(function(e) {
    	url="files/file-005.php?t="+Math.random();    
		dta={
			
				"username": $("#appForm :text[name='username']").val(),
					"password": $("#appForm :password[name='password']").val()
			}
			$.post(url, dta, function(data, status){
				$("#info").html(data);
				if(status=="success") {
					$("#appForm *").remove(".txtError").removeClass("bg01");
					if(data.status="error") {
						$("#info").addClass("bg01").text("Co loi xay ra");	
						
						$.each(data.msg, function(i, val){
							var ele="#appForm [name='"+i+"']";
							$(ele).addClass("bg01").after("<span class='txtError'>"+val+"</span>");
							
						});
					} else {
						$("#info").addClass("bg02").text("Dang nhap thanh cong");	
						$("#appForm").remove();
					}
				}
			}, "json");
    });
});