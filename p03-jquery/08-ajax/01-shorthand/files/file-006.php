<?php
	$book_1 = array("title"=> "jQuery Master",
					"author" => "KhanhPham",
					"pages"=> 500);
					
	$book_2 = array("title"=> "Joomla Master",
					"author" => "KhanhPham",
					"pages"=> 670);
					
	$id = $_GET["id"];
	
	if($id == 1){
		$jsonString = json_encode($book_1);
	}else{
		$jsonString = json_encode($book_2);
	}
	
	echo $jsonString;
										
?>