<?php

class BaseElement {
    /* BaseElement class. */
   
    protected $title; 
    public $description;
    public $visible = true; 
    public $months; 

    public function __construct($title, $description){
        $this->title = $title; 
        $this->description = $description; 
    }

    public function setTitle($t){
        if ($t == ''){
            $this->title = 'N/A';
        } else {
            $this->title = $t;
        }
    }

    public function getTitle(){
        return $this->title;
    }

    public function getDurationAsString() {
        $years = floor($this->months / 12);
        $extraMonths = $this->months % 12;
      
        return "$years years $extraMonths months";
    }

}


/*
    private $title;        
    public $description; 
    public $visible; 
    public $months;

    public function __construct($title, $description){
        $this->setTitle($title);
        $this->description = $description;
    };

    public function setTitle($title){
        /* Set the $title value. 
        if ($title == ''){
            $this->title = 'N/A';
        } else{
            $this->title = $title;
        }
    };

    public function getTitle(){
        /* Get the $title value. 
        return $this->title;
    };

    public function getDurationAsString(){
        /* Print the $months value convert into a String. 
        $years = floor($this->months / 12);
        $extraMonths = $this->months % 12;

        echo "$years years and $extraMonths months";
    };

    // TODO
    public function setDescription($description){
        /* Set the $description value. 
        return 0
    };

    // TODO
    public function getDescription(){
        /* Get the $description value. 
        return 0
    };

    // TODO
    public function setVisible($visible){
        /* Set the $visible value. 
        return 0
    };  

    // TODO 
    public function getVisible(){
        /* Get the $visible value. 
        return 0
    };

    // TODO
    public function setMonths($months){
        /* Set the $months value. 
        return 0
    };

    // TODO
    public function getMonths(){
        /* Get the $months value. 
        return 0
    };
    */

?>