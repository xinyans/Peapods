<?php
    session_start();
    if(isset($_REQUEST['code']) and isset($_REQUEST['data'])) {
        $code = $_REQUEST['code'];
        $data = $_REQUEST['data'];
        $db = new mysqli('localhost', 'moo', 'cows', 'peapods');
        $query = "UPDATE forms SET groupjson = ? WHERE code = ?";
        $statement = $db->prepare($query);
        $statement->bind_param("ss", $data, $code);
        $statement->execute();
        $result = $statement->getresult();
        $db->close();
        echo "success";
    }
    else {
        echo "failure";
    }
?>
