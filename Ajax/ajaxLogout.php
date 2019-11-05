<?php
    session_start();
    if($_SERVER["REQUEST_METHOD"] == "POST") {
        $db = new mysqli('localhost', 'root', 'cows', 'peapods');
        $cookie = mysqli_real_escape_string($db, $_REQUEST['cookie']);
        
        $query = "DELETE FROM logins WHERE loginCookie='$cookie'";
        $result = mysqli_query($db, $query);

        echo "";

        $db->close();
    }
    session_unset();
    session_destroy();

    /**
     * $.ajax({
     *      type: "POST",
     *      url: "../Ajax/ajaxLogout.php",
     *      data: {cookie: "cookiedata"}, 
     *      success: function(msg){
     *          alert(msg);
     *      }
     *  });
     */
?>