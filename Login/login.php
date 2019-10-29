<?php
    session_start();
    if($_SERVER["REQUEST_METHOD"] == "POST") {
        $db = new mysqli('localhost', 'root', 'cows', 'peapods');
        $username = mysqli_real_escape_string($db, $_POST['username']);
        $password = mysqli_real_escape_string($db, $_POST['password']);
        
        if (empty($username)) { array_push($errors, "Username is required"); }
        if (empty($password)) { array_push($errors, "Password is required"); }
        
        $user_check_query = "SELECT * FROM userdata WHERE username='$username' LIMIT 1";
        $result = mysqli_query($db, $user_check_query);
        $user = mysqli_fetch_assoc($result);
        
        $validationPassed = FALSE;

        if ($user and $user['password'] == md5($password)) { // if user exists
          $validationPassed = TRUE;
        }

        if($validationPassed) {
            $_SESSION['loginUsername'] = $username;
        }

        $db->close();
    }
    if(isset($_SESSION['requestPage'])){
        header("location: ..".$_SESSION['requestPage']);
    }
    else {
        header("location: ../index.php");
    }
?>