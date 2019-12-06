<?php
    session_start();
    if($_SERVER["REQUEST_METHOD"] == "POST" or $_SERVER["REQUEST_METHOD"] == "GET") {
        $code = $_REQUEST['code'];
        $db = new mysqli('localhost', 'root', 'cows', 'peapods');
        $query = "DELETE FROM formdata WHERE code = '$code'";
        $result = mysqli_query($db, $query);
        $query = "DELETE FROM forms WHERE code = '$code' LIMIT 1";
        $result = mysqli_query($db, $query);
        echo "";
        $db->close();
    }