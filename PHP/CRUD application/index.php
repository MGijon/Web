<?php
require_once "pdo.php";
session_start();
?>

<html>
	<head> <title> Index </title> </head>
	<body>
<?php
if ( isset($_SESSION['error']) ){
	echo '<p style="color:red;">'.$_SESSION['error']  ."</p>\n";
	unset($_SESSION['error']);
}

if ( isset($_SESSION['success']) ){
	echo '<p style="color:green;">' .$_SESSION['success'] ."</p>\n";
	unset($_SESSION['success']);
}
echo('<table border="1">' ."\n");
