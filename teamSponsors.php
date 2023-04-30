<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

function run($teamName) {
    $mysqli = new mysqli("mysql.eecs.ku.edu", "j654t520", "iena4que", "j654t520");

    if ($mysqli->connect_errno) {
        printf("Connect failed: %s\n", $mysqli->connect_error);
        exit();
    }

    $qry = $mysqli->query("SELECT SPONSOR FROM SPONSORS, TEAM WHERE TEAM.NAME = '$teamName' AND TEAM.TEAM_ACR = SPONSORS.TEAM_ACR;");
    if($qry){
        while($row = $qry->fetch_assoc()){
            
            echo "<tr> <td>". $row["SPONSOR"] . "</td> </tr>";
        }
    }

}




$teamName = $_POST['name'];
echo "<table id='teamSponsorsTable'>";
run($teamName);
echo "</table>";

?>