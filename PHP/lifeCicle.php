<?php

/* First example */

class Animal {
	function __construct() {
		echo("Constructed!! \n");
	}
	function something() {
		echo("Something!! \n")
	}
	function __destruct() {
		echo("Destructed!! \n")
	}
}

echo("-- ONE -- \n");

$x = new Animal();

echo("-- TWO -- \n");

$y = new Animal();

echo ("-- THREE -- \n");

x-> something();
/* if the programm ends here the objects x and y would be destroed, the garbage collector calls the __destruct function */

/* Second example */

class Hello {
	protected $lang; // only accesible in the class

	function __construct($lang){
		$this -> lang = $lang;
	}
	function greet() {
		if ($this -> lang == 'fr') return 'Bonjour';
		if ($this -> lang == 'es') return 'Hola';
		return 'Hello';
	}
}

$hi = new Hello('es');
echo $hi->greet()."\n";


?>
