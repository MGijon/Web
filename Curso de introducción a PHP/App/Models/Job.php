<?php

require_once 'BaseElement.php';

class Job extends BaseElement{
    /* Job class. Extends BaseElement class. */
    
    public function __construct($title, $description){
        /* 
        Give a specific format to the information contained in the private variable $title and initizlize it and the
        public variable $description.
        */
        $newTitle = 'Job: ' . $title;
        $this->title = $newTitle;
    }
   
    public function getDurationAsString(){
        /* Return the information contained in the public variable $months in a specific format, as a string. */
        $years = floor($this->months / 12);
        $extraMonths = $this->months % 12;

        return "Job duration: $years years and $extraMonths months.";
    }


};

// Creo que todo este código es redundante
    /*private $title; 
    public $description;
    public $visible = true; 
    public $months;

    public function __construct($title, $description){
        $this->setTitle($title);
        $this->description = $description;
    }

    public function setTitle($t){
        if ($t == ''){
            $this->title = 'N/A';
        } else {
            $this->title = $t;
        }
    }
    */


?>


