<?php
    session_start();
    if($_SERVER["REQUEST_METHOD"] == "POST") {
        $db = new mysqli('localhost', 'root', 'cows', 'peapods');
        $username = mysqli_real_escape_string($db, $_REQUEST['username']);
        $password = mysqli_real_escape_string($db, $_REQUEST['password']);
        
        $query = "SELECT * FROM userdata WHERE username='$username' LIMIT 1";
        $result = mysqli_query($db, $query);
        $user = mysqli_fetch_assoc($result);

        if ($user and $user['password'] == password_hash($password, "PASSWORD_BCRYPT")) {
            $cookie = md5($username.$password);
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

    /**
     * $.ajax({
     *      type: "POST",
     *      url: "../Ajax/ajaxLogin.php",
     *      data: {username: "username", password: "password"},
     *      success: function(msg){
     *          alert(msg);
     *      }
     *  });
     */
?>