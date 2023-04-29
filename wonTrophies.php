<?php
$qry = $mysqli->query("SELECT IGN, TEAM_ACR FROM PLAYERS;"); //eventually change query to select players on teams who have won trophies
if ($qry == false) {
    echo "returned false";
} else {
    //echo "returned true";
    $all = $qry->fetch_all();
    $height = count($all);
    $width = count($all[0]);
    echo "<table id='wonTrophiesTable'>";
    for ($i = 0; $i < $height; $i++){
        echo "<tr>";
        for ($j = 0; $j < $width; $j++) {
            echo "<td>".$all[$i][$j]."</td>";
        }
        echo "</tr>";
    }
    echo "</table>";
}
?>