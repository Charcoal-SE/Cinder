<?php
include "base.php";

$query = mysql_query("SELECT COUNT(*) AS number FROM flags WHERE id=". $id . " ");
$inDatabase = mysql_fetch_assoc($query);
$numInDatabase = $valid["number"];

if($numInDatabase == 0){
    $site = $_POST["site"];
    $postid = $_POST["postid"];
    $userid = $_POST["userid"];
    mysql_query("INSERT INTO flags (Site, PostId, AddDate, UserId, NumFlags, LastFlag)
    VALUES ('" . $site . "', '" . $postid . "', NOW(), '" . $userid . "', 1, NOW())");
}
else{
    mysql_query("UPDATE flags SET NumFlags = NumFlags + 1, LastFlag=NOW() Where Site = NULL AND PostId = NULL");
}