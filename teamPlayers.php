<?php
$qry = $mysqli->query("SELECT IGN FROM PLAYERS WHERE TEAM_ACR = 'NRG';"); //eventually change query to select players on teams who have won trophies
if ($qry == false) {
    echo "returned false";
} else {
    //echo "returned true";
    $all = $qry->fetch_all();
    $height = count($all);
    //$width = count($all[0]);
    echo "<div class='collapseContent'>";
    echo "<table id='teamPlayersTable'>";
    for ($i = 0; $i < $height; $i++){
        echo "<tr>";
        echo "<td>".$all[$i][0]."</td>";
        echo "</tr>";
    }
    echo "</table>";
    echo "</div>";
}
?>