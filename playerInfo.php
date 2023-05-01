<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
$mysqli = new mysqli("mysql.eecs.ku.edu", "t070m625", "Phoh7kei", "t070m625");

if ($mysqli->connect_errno) {
	printf("Connect failed: %s\n", $mysqli->connect_error);
	exit();
}

$ret = "";
$player = $_POST['player'];
$qry = $mysqli->query("SELECT IGN, TEAM_ACR, REGION, ACS, KD, WIN_PERC FROM STATS NATURAL JOIN PLAYERS WHERE IGN='$player'; ");

if ($qry == false) {
    echo "returned false";
} else {
    $all = $qry->fetch_all();
    $height = count($all);
    if ($height < 1) {
        print "<td colspan='6'>Invalid name</td>";
        return;
    }
    $width = count($all[0]);

    
    for ($i = 0; $i < $height; $i++){
        $ret = $ret . "<tr>";
        for ($j = 0; $j < $width; $j++) {
            $ret = $ret . "<td>".$all[$i][$j]."</td>";
        }
        $ret = $ret . "</tr>";
    }
    print $ret;
}
?>