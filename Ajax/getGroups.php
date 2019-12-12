<?php
    session_start();
    if($_SERVER["REQUEST_METHOD"] == "POST" or $_SERVER["REQUEST_METHOD"] == "GET") {
        $code = $_REQUEST['code'];
        $db = new mysqli('localhost', 'moo', 'cows', 'peapods');
        $query = "SELECT * FROM forms WHERE code = ? LIMIT 1";
        $statement = $db->prepare($query);
        $statement->bind_param("s", $code);
        $statement->execute();
        $result = $statement->get_result();
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