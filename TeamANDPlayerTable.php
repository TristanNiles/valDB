<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

function runtable(){
    $mysqli = new mysqli("mysql.eecs.ku.edu", "j654t520", "iena4que", "j654t520");

    if ($mysqli->connect_errno) {
        printf("Connect failed: %s\n", $mysqli->connect_error);
        exit();
    }
    
    $qry = $mysqli->query("SELECT IGN, AGE, REGION, TEAM.NAME, FRANCHISED FROM PLAYERS, TEAM WHERE TEAM.TEAM_ACR = PLAYERS.TEAM_ACR;");
    if($qry){
        while($row = $qry->fetch_assoc()){
            
            echo "<tr> <td>IGN:". $row["IGN"] . "</td> <td>AGE:" . $row["AGE"] . "</td> <td>REGION:" . $row["REGION"] . "</td> <td>TEAM:" . $row["NAME"] . "</td> <td>FRANCHISED:" . $row["FRANCHISED"] . "</td> </tr>";
        }
    }
}


echo "<table class = 'pteam' id='TeamANDPLayerTable'>";
runtable();
echo "</table>";
?>