<?php
    session_start();
    if(isset($_REQUEST['code'])) {
        $code = $_REQUEST['code'];
        $db = new mysqli('localhost', 'moo', 'cows', 'peapods');
        $query = "SELECT responsejson FROM forms WHERE code = '$code' LIMIT 1";
        $result = mysqli_query($db, $query);
        if($result){
            $printData = mysqli_fetch_assoc($result);
            echo $printData["responsejson"];
        }
        else {
            //if there is no such code
            echo "";
        }
        $db->close();
    }
?>
