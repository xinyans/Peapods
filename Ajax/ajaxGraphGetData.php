<?php
    session_start();
    if(isset($_REQUEST['code'])) {
        $code = $_REQUEST['code'];
        $db = new mysqli('localhost', 'moo', 'cows', 'peapods');
        $query = "SELECT responsejson FROM forms WHERE code = ? LIMIT 1";
        $statement = $db->prepare($query);
        $statement->bind_param("s", $code);
        $statement->execute();
        $result = $statement->get_result();
        if($result){
            $printData = $result->fetch_assoc();
            echo $printData["responsejson"];
        }
        else {
            //if there is no such code
            echo "";
        }
        $db->close();
    }
?>
