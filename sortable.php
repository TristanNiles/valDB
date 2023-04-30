<?php
$qry = $mysqli->query("SELECT * FROM SETTINGS_PERIPH NATURAL JOIN STATS");
if ($qry == false) {
    echo "returned false";
} else {
    //echo "returned true";
    $all = $qry->fetch_all();
    $height = count($all);
    $width = count($all[0]);
    echo "<table>";
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