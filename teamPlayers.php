<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

function run($teamName) {
    $mysqli = new mysqli("mysql.eecs.ku.edu", "j654t520", "iena4que", "j654t520");

    if ($mysqli->connect_errno) {
        printf("Connect failed: %s\n", $mysqli->connect_error);
        exit();
    }

    $qry = $mysqli->query("SELECT IGN, AGE FROM PLAYERS, TEAM WHERE TEAM.NAME = '$teamName' AND TEAM.TEAM_ACR = PLAYERS.TEAM_ACR;");

    if($qry){
        while($row = $qry->fetch_assoc()){
            echo "<tr> <td>IGN:". $row["IGN"] . "</td> <td>AGE:" . $row["AGE"] . "</td> </tr>";
        }
    }

}




$teamName = $_POST['name'];
echo "<table id='teamPlayersTable'>";
run($teamName);
echo "</table>";

?>