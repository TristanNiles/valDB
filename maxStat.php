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
$stat = $_POST['stat'];
if ($stat == '') { $stat = 'FIRST_BLOOD'; }
$qry = $mysqli->query("SELECT A.IGN, FirstBloods FROM PLAYERS A, (SELECT TEAM_ACR, MAX($stat) AS FirstBloods FROM STATS, PLAYERS WHERE STATS.IGN = PLAYERS.IGN GROUP BY TEAM_ACR) AS B, STATS C WHERE A.TEAM_ACR = B.TEAM_ACR AND C.IGN = A.IGN AND FirstBloods = C.$stat;");

if ($qry == false) {
    echo "returned false";
} else {
    $all = $qry->fetch_all();
    $height = count($all);
    $width = count($all[0]);
    $ret = $ret . "<table id='maxStatTable'>";
    for ($i = 0; $i < $height; $i++){
        $ret = $ret . "<tr>";
        for ($j = 0; $j < $width; $j++) {
            $ret = $ret . "<td>".$all[$i][$j]."</td>";
        }
        $ret = $ret . "</tr>";
    }
    $ret = $ret . "</table>";
    print $ret;
}

?>