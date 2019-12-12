<?php
    session_start();
    if($_SERVER["REQUEST_METHOD"] == "POST") {
        $db = new mysqli('localhost', 'moo', 'cows', 'peapods');
        $cookie = mysqli_real_escape_string($db, $_REQUEST['cookie']);
        
        $query = "DELETE FROM logins WHERE `loginCookie`=?";
        $statement = $db->prepare($query);
        if(!$statement){
            echo "Prepare failed: (" . $db->errno . ") " . $db->error;
            die();
        }
        $statement->bind_param("s", $cookie);
        $statement->execute();

        echo "";

        $db->close();
    }
    session_unset();
    session_destroy();
?>