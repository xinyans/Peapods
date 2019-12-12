<?php
    session_start();
    if($_SERVER["REQUEST_METHOD"] == "POST" or $_SERVER["REQUEST_METHOD"] == "GET") {
        $code = $_REQUEST['code'];
        $db = new mysqli('localhost', 'moo', 'cows', 'peapods');
        $query = "DELETE FROM formdata WHERE code = ?";
        $statement = $db->prepare($query);
        $statement->bind_param("s", $code);
        $statement->execute();
        $query = "DELETE FROM forms WHERE code = ? LIMIT 1";
        $statement = $db->prepare($query);
        $statement->bind_param("s", $code);
        $statement->execute();
        echo "";
        $db->close();
    }