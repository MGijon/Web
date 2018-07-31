<?php
class Hello{
    protected $lang;
    function __construct($lang){
      $this->lang = $lang;
    }
    function greet(){
      if($this->lang == 'fr') return 'Bonjour';
      if($this->lang == 'es') return 'Hola';
      return 'Hello';
    }
}

class Social extends Hello{
  function bye(){
    if ($this->lang == 'fr') return 'Ay revoir';
    if ($this->lang == 'es') return 'Adiós';
    return 'goodby';
  }
}

$hi = new Social('es');
echo $hi->greet() . "\n";
echo $hi->bye() . "\n";

/* class members variables are also in the scope:
   - PUBLIC: accesible outside the class, inside the class and in derived classes.
   - PROTECTED: accesible inside the class and in derived classes.
   - PRIVATE: only accesible inside the class (not for derived classes!).
*/

class MyClass{
  public $pub = 'Public';
  protected $pro = 'Protected';
  private $pri = 'Privated';
  function printHello(){
    echo $this->pub . "\n";
    echo $this->pro . "\n";
    echo $this->pri . "\n";
  }
}

$object = new MyClass();
echo $object->pub . "\n"; // works
echo $object->pro . "\n"; // Fatal Error
echo $object->pri . "\n"; // Fatal Error
$object->printHello(); // shows everything

?>
