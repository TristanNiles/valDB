<?php

$qry = $mysqli->query("SELECT NAME FROM TEAM;");
if ($qry == false) {
    echo "returned false";
} else {
    while($row = $qry->fetch_assoc()){
        $teamName = $row['NAME'];
        echo "<label for='$teamName' class='teamLabel'>$teamName</label>";
        echo "<input type='radio' id='$teamName' name='$teamName'/>";
    }
}
?>