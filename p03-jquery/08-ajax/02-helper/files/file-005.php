<?php
	//username: KhanhPham & password: 123456
	/*echo "<pre>";
	print_r($_POST);
	echo "</pre>";*/
	$user 	= $_POST["username"];
	$pwd 	= $_POST["password"];

	$msg = array();
	
	if(empty($user)){
		$msg["username"] = "Username khong duoc rong";
	}else if($user != "KhanhPham"){
		$msg["username"] = "Username nay khong ton tai";
	}
	
	if(empty($pwd)){
		$msg["password"] = "Password khong duoc rong";
	}else if($pwd != "123456"){
		$msg["password"] = "Password nay khong chinh xac";
	}
	
	$status = "error";
	if(count($msg) == 0){
		$status = "success";
	}
	
	$response = array("status"=>$status,"msg"=>$msg);
	$jsonString = json_encode($response);
	echo $jsonString;
?>