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
    echo "<thead>
            <tr>
                <th onclick='sortTable(0, 0)'>Players</th>
                <th onclick='sortTable(1, 0)'>GPU</th>
                <th onclick='sortTable(2, 0)'>Mouse</th>
                <th onclick='sortTable(3, 0)'>Keyboard</th>
                <th onclick='sortTable(4, 0)'>Crosshair</th>
                <th onclick='sortTable(5, 0)'>Sensitivity</th>
                <th onclick='sortTable(6, 0)'>First bloods</th>
                <th onclick='sortTable(7, 0)'>First deaths</th>
                <th onclick='sortTable(8, 0)'>ACS</th>
                <th onclick='sortTable(9, 0)'>KD</th>
                <th onclick='sortTable(10, 0)'>Win percentage</th>
                <th onclick='sortTable(11, 0)'>HS</th>
                <th onclick='sortTable(12, 0)'>KAST</th>
            </tr>
        </thead>
        <tbody>";
    for ($i = 0; $i < $height; $i++){
        echo "<tr>";
        for ($j = 0; $j < $width; $j++) {
            echo "<td>".$all[$i][$j]."</td>";
        }
        echo "</tr>";
    }
    echo "</tbody>
    </table>";
}
?>