<?php
echo "<pre>\n";
require_once "pdo.php";    // load the 'pdo.php' file and its variables

$stmt = $pdo->query("SELECT * FROM users");   // pdo is a variable in the loaded file
while ( $row = $stmt->fetch(PHP::FETCH_ASSOC) ){
  print_r($row);
}
echo "</pre>\n";
 ?>
