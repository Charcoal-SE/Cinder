<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
include "base.php";
 
$stmt = PDODatabaseObject()->query("SELECT flags.Site, flags.PostId, flags.Title, siteinfo.`APISiteName` FROM flags INNER JOIN siteinfo ON flags.`Site` = siteinfo.`SiteDomain`  WHERE flags.deleted=0 ORDER BY flags.AddDate DESC LIMIT 10");
$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($results);
