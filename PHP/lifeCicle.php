<?php

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

>