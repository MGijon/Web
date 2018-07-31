<?php
// will be call from another files
$pdo = new PDO('mysql:host=localhost;port=8889;dbname=NameDataBase', 'id', 'password')
// to catch the errors, don't know much about this yet
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE EXCEPTION)
 ?>
