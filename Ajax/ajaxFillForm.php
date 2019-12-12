<?php
    session_start();
    if(isset($_REQUEST['code'])) {
        $code = $_REQUEST['code'];
        $db = new mysqli('localhost', 'moo', 'cows', 'peapods');
        if($_SERVER['REQUEST_METHOD'] == "GET"){
            $code = $_REQUEST['code'];
            $query = "SELECT formjson FROM forms WHERE code = '$code'";
            $result = mysqli_query($db, $query);
            $data = mysqli_fetch_assoc($result);
            echo $data['formjson'];
        }
        else if($_SERVER['REQUEST_METHOD'] == "POST"){
            $code = $_REQUEST["code"];
            $data = $_REQUEST["data"];
            echo $data;
            $query = "INSERT INTO formdata (code, responsejson) VALUES (?,?)";
            $statement = $db->prepare($query);
            $statement->bind_param("ss", $code, $data);
            $statement->execute();
        }
        $db->close();
    }
?>