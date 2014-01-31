<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
include "base.php";
 
$stmt = PDODatabaseObject()->query("SELECT * FROM flags WHERE deleted=0");
$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode(array('num' => count($results)));
