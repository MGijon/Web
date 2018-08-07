<?php

	session_start();
	if ( isset($_POST["account"]) && isset($_POST["pw"]) ){
		unset($_SESSION["account"]); // logout current user
		if ( $_POST['pw'] == 'umsi' ){
			$_SESSION['account'] = $_POST['account'];
			$_SESSION['success'] = "Logger in.";
			header('Location: app.php');
			return;
		} else {
			$_SESSION["error"] = "Incorrect password";
			header('Location: logInOut.php');
			return;
		}
	}

?>

<html>
	<body style= "font-family: sans-serif;">
		<h1>
			Please log in
		</h1>

		<?php
			if ( isset($_SESSION['error']) ){
				echo('<p style="color:red;>"' .$_SESSION['error'] .'</p>\n');
				unset($_SESSION['error']);
			} 
			if ( isset($_SESSION['success']) ){
				echo('<p style="color:green;>"' .$_SESSION['success'] .'</p>\n');
				unset($_SESSION['success'])
			}
		?>
		<form method="post">
			<p>
				Account: <input type="text" name="account" value="">
			</p>
			<p>
				Password: <input type="text" name="pw" value="">
			</p>
			<!-- password is umsi -->
			<p> 
				<input type="submit" value="Log In">
				<a href="app.php">Cancell</a>
			</p>
		</form>
</html>