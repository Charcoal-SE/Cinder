<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
include "base.php";
 
$query = mysql_query("select * from flags where deleted=0");
 
echo json_encode(array('num' => mysql_num_array($query)));
