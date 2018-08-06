<?php

session_start();

if ( isset($_POST['where']) ){
	if( $_POST['where'] == '1' ){
		header("Location: redirect1.php");
		return;
	} else if ( $_POST['where'] == '2' ){
		header("Location: redir2.php?parm=123"); // same script but changing the line (*)
		return;
	} else {
		header("Location: google.com");
		return;
	}
}
?>

<html>
	<body style="font-family: sans-serif;">
		<p>I'm Router ONE... </p>               <!-- (*) -->
		<form method="post">
			<p>
				<label for="inp9">Where two go? (1-3)</label>
				<input type="text" name="where" id="inp9" size="5">
			</p>
			<input type="submit"/>
		</form>
	</body>
</html>