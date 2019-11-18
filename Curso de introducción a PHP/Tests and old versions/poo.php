<?php
/*
  POO: programación orientada a objetos
*/

class Job {

  //public $title;
  private $title;
  public $description;
  public $visible;
  public $months;

  public function __construct($title, $description) {
    // constructor de la función
    $this->title = $title;
    $this->description = $description;
    $this->visible = true; // visible by default
  }

  public function setTitle($t){
    if ($t == ''){
      $this->title = 'Na';
    }else{
      $this->title = $t;
    }
  }

  public function getTitle() {
    return $title;
  }

  public function getDurationAsString(){
    $years = floor($this->months / 12);
    $extraMonths = $months % 12;

    return "$years years and $extraMonths months";
  }
}

$job1 = new Job();
//$job1 ->title = 'PHP Developer';
$job1 ->setTitle('PHP Developer');
$job1 ->description = 'lorem ipsum';
//$job1 ->visible = true;
$job1 ->months = 19;

if ($job1->visible ) == false){
  return;
}

//echo $job1->title.' <br>';
echo $job1->getTitle();
echo $job1->getDurationAsString();

$job2 = new Jon('Python Developer', 'lorem ipsum, lorem ipsum');


 ?>
