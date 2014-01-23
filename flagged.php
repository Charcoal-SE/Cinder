<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
include "base.php";
 
echo json_encode(array('num' => '42'));
