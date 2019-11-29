<?php
    session_start();
    if($_SERVER["REQUEST_METHOD"] == "POST") {
        if(isset($_SESSION['l'])){
            unset($_SESSION['l']);
            session_destroy();
        }
        else{
            $username = $_REQUEST['username'];
            $password = $_REQUEST['password'];
            echo $username."</br>";
            echo $password;
            $_SESSION['l'] = 'true';
        }
    }
    else {
        unset($_SESSION['l']);
    }
    if(isset($_SESSION['l'])){
        echo '<form method = "POST" action = "l.php"><input type = "submit"/></form>';
    }
    else{
        echo '<form method = "POST" action = "l.php"><input type = "text" name = "username"/><input type = "password" name = "password"/><input type = "submit"/></form>';
    }

    ?>