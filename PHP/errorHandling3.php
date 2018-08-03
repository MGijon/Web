<?php

require_once "pdo.php";
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

try{
  $stmt = $pdo->prepare("SELECT * FROM users WHERE user_id = :xyz");
  $stmt->execute( array(":dog" => $GET_['user_id']) );
} catch(Exception $ex){
  echo("Internal error, please contact support");
  error_log("errors.php, SQL error " .$ex->getMessage());
  return;
}
$row = $stmt->fetch(PDO::FETCH_ASSOC);

?>
