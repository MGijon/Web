  <?php
/* PDO:
*/

echo "<pre>"
// 8889 linux, 3306 xampp/linux
$pdo = new PDO('mysql:host=localhost;port=8889;dbname=NameDataBase', 'user', 'password');
$stmt = $pdo->query("SELECT * FROM users") // select all the camps from the table users
while ( $row = $stmt->fetch(PDO::FETCH_ASSOC) ){
  print_r($row);
}

echo "</pre>\n";


?>
