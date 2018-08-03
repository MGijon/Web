<?php

// note .- cannot have any output before setcoockie
if ( ! isset($_COOCKIE['zap']) ){
  setcoockie('zap', '42', time() + 3600);
}

?>

<pre>
<?php print_r($_COOCKIE) ?>
</pre>

<p><a href="coockie1.php">Click me!</a> or press refresh</p>
