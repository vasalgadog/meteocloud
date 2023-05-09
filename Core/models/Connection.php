<?php

class Connection extends PDO
{
    private $host="localhost";
    private $tipoBD="mysql";
    private $user="root"; 
    private $pass="";
    private $nombreBD="bd_certamen3";

    public function __construct(){
        try {
            parent::__construct($this->tipoBD . ':host=' . $this->host . ';dbname=' . $this->nombreBD, $this->user, $this->pass, array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));
        }catch(PDOException $ex){
            echo "OCurrió un error : ".$ex->getMessage();
        }
    }
}