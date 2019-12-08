<?php
    session_start();
    if($_SERVER["REQUEST_METHOD"] == "POST" or $_SERVER["REQUEST_METHOD"] == "GET") {
        $code = $_REQUEST['code'];
        $db = new mysqli('localhost', 'moo', 'cows', 'peapods');
        $query = "SELECT * FROM forms WHERE code = '$code' LIMIT 1";
        $result = mysqli_query($db, $query);
        if($result and $result->num_rows == 1){
            $printData = mysqli_fetch_assoc($result);
            echo $printData['groupjson'];
        }
        else {
            //if there is no such code
            echo "";
        }
        $db->close();
    }
?>