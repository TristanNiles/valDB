<?php

$qry = $mysqli->query("SELECT DISTINCT NAME FROM TEAM NATURAL JOIN SPONSORS; ");
if ($qry == false) {
    echo "returned false";
} else {
    $all = $qry->fetch_all();
    $height = count($all);
    //$width = count($all[0]);
    for ($i = 0; $i < $height; $i++){
        $teamName = $all[$i][0];
        echo "<label for='$teamName' class='teamLabel2'>$teamName</label>";
        echo "<input type='radio' id='$teamName' name='$teamName'/>";
    }
}
?>