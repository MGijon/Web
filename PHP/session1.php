<?php

// OBS: cannot have any output before this

// session_name() to create a named session
session_start(); // si no existe el archivo de sesión lo crea

// now we can call the variable $_SESSION
if ( ! isset($_SESSION['pizza']) ){
	echo("<p>Session is empty</p>\n");
	$_SESSION['pizza'] = 0;
} else if ( $_SESSION['pizza'] < 3 ){
	$_SESSION['pizza'] = $_SESSION['pizza'] + 1;
	echo("<p>Added one... </p>\n"); 
} else {
	session_destroy();
	session_start();
	echo("<p>Sessino Restarted</p>\n");
}
?>

<p><a href="session1.php">Click me!</a></p>
<p>Our session id is: <?php echo(session_id()); ?></p>
<pre>
<?php print_r($_SESSION); ?>
</pre>