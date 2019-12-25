<?php
	$info = array();
	$info["name"] = "KhanhPham";
	$info["email"] = "abc@zend.vn";
	$info["website"] = "www.zend.vn";
	
	$jsonString = json_encode($info);
	echo $jsonString;
?>
