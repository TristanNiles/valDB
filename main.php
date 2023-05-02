<?php
$mysqli = new mysqli("mysql.eecs.ku.edu", "j654t520", "iena4que", "j654t520");

if ($mysqli->connect_errno) {
	printf("Connect failed: %s\n", $mysqli->connect_error);
	exit();
}
$wonTrophies = false;
?>