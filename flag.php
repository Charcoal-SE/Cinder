<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
include "base.php";

$query = mysql_query("SELECT COUNT(*) AS number FROM flags WHERE id=". $id . " ");
$inDatabase = mysql_fetch_assoc($query);
$numInDatabase = $valid["number"];

$site = $_POST["site"];
$postid = $_POST["postid"];
$userid = $_POST["userid"];

if($numInDatabase == 0){
    $stmt = PDODatabaseObject()->prepare("INSERT INTO flags (Site, PostId, AddDate, UserId, NumFlags, LastFlag) VALUES (?, ?, NOW(),?, 1, NOW())");
	$stmt->execute(array($site, $postid, $userid));
	$affected_rows = $stmt->rowCount();
}
else{
    $stmt = PDODatabaseObject()->prepare("UPDATE flags SET NumFlags=NumFlags+1, LastFlag=NOW() Where Site=? AND PostId=?");
	$stmt->execute(array($site, $postid));
	$affected_rows = $stmt->rowCount();
}
