<?php

class Person {
	public $fullname = false;
	public $givenname = false;
	public $familyname = false;
	public $room = false;
	function get_name() {
		if ( $this -> fullname !== false ) return $this -> fullname;
		if ( $this -> familyname !== false && $this -> givenname !== false ) {
			return $this -> givenname . ' ' . $this -> familyname;
		}
		return false;
	}
}
	
$jose = new Person();
$jose -> fullname = "jose martinez";
$jose -> room = "465";

$juan = new Person();
$juan -> familyname = "Castro";
$juan -> givenname = "Juan";

print $jose -> get_name() . "\n";
print $juan -> get_name() . "\n";
>