<?php
    session_start();
    if($_SERVER["REQUEST_METHOD"] == "POST") {
        $db = new mysqli('localhost', 'moo', 'cows', 'peapods');
        $username = mysqli_real_escape_string($db, $_REQUEST['username']);
        $password = mysqli_real_escape_string($db, $_REQUEST['password']);
        
        $query = "SELECT * FROM userdata WHERE username=? LIMIT 1";
        $statement = $db->prepare($query);
        $statement->bind_param("s", $username);
        $statement->execute();
        $result = $statement->get_result();
        $user = $result->fetch_assoc();
        if ($user and password_verify($password, $user['password'])) {
            $cookie = password_hash($username, PASSWORD_BCRYPT);
            $query = "INSERT INTO logins (loginCookie, username) VALUES ('$cookie', '$username')";
            mysqli_query($db, $query);
            echo $cookie;
            $_SESSION['loginCookie'] = $cookie;       
        }
        else {
            echo "";
        }
        $db->close();
    }
?>