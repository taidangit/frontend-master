<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
</head>

<body>
	<h1>file-001a.php</h1>
    <?php
		//GET - POST
		echo "Nhan du lieu bang phuong thuc GET";
		echo "<br>==============================";
		echo "<pre>";
		echo print_r($_GET);
		echo "</pre>";
		
		echo "Nhan du lieu bang phuong thuc POST";
		echo "<br>==============================";
		echo "<pre>";
		echo print_r($_POST);
		echo "</pre>";
	?>
</body>
</html>
