<?php
    require_once 'Action.php';

    if( isset($_REQUEST['action'])){
        $action = (isset($_REQUEST['action']) ? $_REQUEST['action'] : NULL);
        $action = filter_var($action,FILTER_SANITIZE_STRING);

        $obj = new Action();
        $obj->setAction($action);

        if(in_array($obj->getAction(), $obj->getActionList())){
            switch($obj->getAction()){
                case 'getApiData':

                    $url = 'https://climatologia.meteochile.gob.cl/application/productos/estacionesRedEma';
                    $ch = curl_init();
                    $options = array(
                        CURLOPT_RETURNTRANSFER => true,
                        CURLOPT_FOLLOWLOCATION => true,
                        CURLOPT_SSL_VERIFYHOST => false,
                        CURLOPT_SSL_VERIFYPEER => false,
                        CURLOPT_USERAGENT => 'Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0)',
                        CURLOPT_URL => $url
                    );
                    curl_setopt_array($ch , $options);
                    $output = curl_exec($ch);
                    if(!$output){
                        echo "Curl Error : " . curl_error($ch);
                    }
                    else{
                        echo($output);
                    }

                    break;
                case 'getEstacionesData':
                    $url = 'https://climatologia.meteochile.gob.cl/application/productos/datosRecientesRedEma';
                    $ch = curl_init();
                    $options = array(
                        CURLOPT_RETURNTRANSFER => true,
                        CURLOPT_FOLLOWLOCATION => true,
                        CURLOPT_SSL_VERIFYHOST => false,
                        CURLOPT_SSL_VERIFYPEER => false,
                        CURLOPT_USERAGENT => 'Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0)',
                        CURLOPT_URL => $url
                    );
                    curl_setopt_array($ch , $options);
                    $output = curl_exec($ch);
                    if(!$output){
                        echo "Curl Error : " . curl_error($ch);
                    }
                    else{
                        echo($output);
                    }

                    break;
            }
        }

    }
