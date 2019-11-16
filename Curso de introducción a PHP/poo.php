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

  public function setTitle($t){
    $this->title = $t;
  }
  public function getTitle() {
    return $title;
  }
}

$job1 = new Job();
//$job1 ->title = 'PHP Developer';
$job1 ->setTitle('PHP Developer');
$job1 ->description = 'lorem ipsum';
$job1 ->visible = true;
$job1 ->months = 19;

if ($job1->visible ) == false){
  return;
}

//echo $job1->title.' <br>';

 ?>
