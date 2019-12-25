<?php
 $user 		= "khanhpham";
 $password 	= "889900";
 $msg		= '';
 if(@$_POST["username"] != $user){
	 $msg = "Username này không tồn tại";
 }else if(@$_POST["password"] != $password){
	 $msg = "Password không chính xác";
 }
 
 $flagLogin = "error"; //0
 if(empty($msg)){
	 $flagLogin = "ok"; //1
 }
 
header("Content-type: text/xml");
echo '<?xml version="1.0" encoding="utf-8"?>';
echo '<root>';
echo '<flag>' . $flagLogin . '</flag>';
echo '<msg>' . $msg . '</msg>';
echo '</root>';