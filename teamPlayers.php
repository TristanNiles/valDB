<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
$mysqli = new mysqli("mysql.eecs.ku.edu", "t070m625", "Phoh7kei", "t070m625");

if ($mysqli->connect_errno) {
	printf("Connect failed: %s\n", $mysqli->connect_error);
	exit();
}

$ret = "";
//print $ret;
$teamName = $_POST['name'];
if ($teamName == '') { $teamName = 'DRX'; }
$qry = $mysqli->query("SELECT IGN FROM PLAYERS, TEAM WHERE TEAM.NAME = '$teamName' AND TEAM.TEAM_ACR = PLAYERS.TEAM_ACR;");

if ($qry == false) {
    echo "returned false";
} else {
    $all = $qry->fetch_all();
    $height = count($all);
    $ret = $ret . "<table id='teamPlayersTable'>";
    for ($i = 0; $i < $height; $i++){
        $ret = $ret . "<tr>";
        $ret = $ret . "<td>".$all[$i][0]."</td>";
        $ret = $ret . "</tr>";
    }
    $ret = $ret . "</table>";
    print $ret;
}

?>