<?php
    session_start();
    if($_SERVER["REQUEST_METHOD"] == "POST") {
        if(isset($_SESSION['loginCookie'])){
            echo $_SESSION['loginCookie'];
        }
        else {
            echo "";
        }
    }

    /**
     * $.ajax({
     *      type: "POST",
     *      url: "../Ajax/ajaxCheckLogin.php",
     *      success: function(msg){
     *          alert(msg);
     *      }
     *  });
     */
?>