<?php

require_once "pdo.php";

$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

$stmt = $pdo->prepare("SELECT * FROM users WHERE user_id = :xyz");
$stmt->execute(array(
  ":xyz" => $_GET['user_id']
));
$row = $stmt->fetch(PDO::FETCH_ASSOC);
if ( $row == false ){
  echo("<p>user_id not found</p>\n");
} else{
  echo("<p>user_id found</p>\n");
}

?>
