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
$teamName = $_POST['stat'];
if ($teamName == '') { $teamName = 'DRX'; }
$qry = $mysqli->query("SELECT A.IGN, FirstBloods FROM PLAYERS A, (SELECT TEAM_ACR, MAX(FIRST_BLOOD) AS FirstBloods FROM STATS, PLAYERS WHERE STATS.IGN = PLAYERS.IGN GROUP BY TEAM_ACR) AS B, STATS C WHERE A.TEAM_ACR = B.TEAM_ACR AND C.IGN = A.IGN AND FirstBloods = C.FIRST_BLOOD;");

if ($qry == false) {
    echo "returned false";
} else {
    $all = $qry->fetch_all();
    $height = count($all);
    $ret = $ret . "<table id='maxStatTable'>";
    for ($i = 0; $i < $height; $i++){
        $ret = $ret . "<tr>";
        $ret = $ret . "<td>".$all[$i][0]."</td>";
        $ret = $ret . "</tr>";
    }
    $ret = $ret . "</table>";
    print $ret;
}

?>