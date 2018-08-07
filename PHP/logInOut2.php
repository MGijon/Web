<html>
	<head>
		<title></title>
	</head>
	<body>
		<h1>Log Out</h1>
		<?php
			if ( isset($_SESSION['success']) ){
				echo('<p style="color:green;">' .$_SESSION['success'] ."</p>\n");
				unset($_SESSION['success']);
			}

			// Check if we are already logged in
			if ( ! isset($_SESSION['account']) ) {

		?>

		<p> Please <a href="logInOut1.php">Log In</a> to start.</p>
		<?php 		
			} else {
		?>

		<p>This is where a cool application would be.</p>
		<p>Please <a href="logInOut2.php">Log Out</a> when you're done.</p>
		<?php
			}
		?>
	</body>
</html>