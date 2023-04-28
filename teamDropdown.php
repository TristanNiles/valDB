<?php
$qry = $mysqli->query("SELECT TEAM_ACR FROM FRANCHISED;"); //eventually change query to select players on teams who have won trophies
if ($qry == false) {
    echo "returned false";
} else {
    $all = $qry->fetch_all();
    $height = count($all);
    //$width = count($all[0]);
    for ($i = 0; $i < $height; $i++){
        $name = $all[$i][0];
        echo "<option value='$name'>$name</option>";
    }
}
?>