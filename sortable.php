<?php
$qry = $mysqli->query("SELECT * FROM SETTINGS_PERIPH NATURAL JOIN STATS");
if ($qry == false) {
    echo "returned false";
} else {
    //echo "returned true";
    $all = $qry->fetch_all();
    $height = count($all);
    $width = count($all[0]);
    echo "<table class='sortable'>";
    echo "<tr>
            <th>Players</th>
            <th>GPU</th>
            <th>Mouse</th>
            <th>Keyboard</th>
            <th>Crosshair</th>
            <th>Sensitivity</th>
            <th>First bloods</th>
            <th>First deaths</th>
            <th>ACS</th>
            <th>KD</th>
            <th>Win percentage</th>
            <th>HS</th>
            <th>KAST</th>
        </tr>";
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