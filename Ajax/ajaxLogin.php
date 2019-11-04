<?php
    session_start();
    if($_SERVER["REQUEST_METHOD"] == "POST") {
        $db = new mysqli('localhost', 'root', 'cows', 'peapods');
        $username = mysqli_real_escape_string($db, $_REQUEST['username']);
        $password = mysqli_real_escape_string($db, $_REQUEST['password']);
        
        $query = "SELECT * FROM userdata WHERE username='$username' LIMIT 1";
        $result = mysqli_query($db, $query);
        $user = mysqli_fetch_assoc($result);

        if ($user and $user['password'] == md5($password)) {
            $cookie = md5($username.$password);
            echo $cookie;       
            echo "fun";
        }
        else {
            echo "not logged in";
        }

        $db->close();
    }

    /**
     * $.ajax({
     *      type: "POST",
     *      url: "../Ajax/ajaxLogin.php",
     *      data: {username: "username", password: "password"},   // <== change is here
     *      success: function(msg){
     *          alert(msg);
     *      }
     *  });
     */
?>