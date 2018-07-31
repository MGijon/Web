  <?php
/*
PDO:
*/

echo "<pre>"
// 8889 linux, 3306 xampp/linux
$pdo = new PDO('mysql:host=localhost;port=8889;dbname=NameDataBase', 'user', 'password');
$stmt = $pdo->query("SELECT * FROM users") // select all the camps from the table users
while ( $row = $stmt->fetch(PDO::FETCH_ASSOC) ){
  print_r($row);
}

echo "</pre>\n";

/* More fancy stuff */
$pdo = new PDO('mysql:host=localhost;port=8889;dbname=NameDataBase', 'user', 'password');
$stmt = $pdo->query("SELECT * FROM users") // select all the camps from the table users
echo "<table border="1">" . "\n";
while ( $row = $stmt->fetch(PDO::FETCH_ASSOC) ){
  echo "<tr><td>";
  echo($row['name']);
  echo "</td><td>";
  echo($row['email']);
  echo "</td><td>";
  echo($row['password']);
  echo("</td></tr>\n");
}
echo "</table>\n";
?>
