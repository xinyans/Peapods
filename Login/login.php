<?php
    session_start();
    if($_SERVER["REQUEST_METHOD"] == "POST") {
        $db = new mysqli('localhost', 'root', 'Techie0110', 'peapods');
        $username = mysqli_real_escape_string($db, $_POST['username']);
        $password = mysqli_real_escape_string($db, $_POST['password']);
        
        if (empty($username)) { array_push($errors, "Username is required"); }
        if (empty($password)) { array_push($errors, "Password is required"); }
        
        $user_check_query = "SELECT * FROM userdata WHERE username='$username' LIMIT 1";
        $result = mysqli_query($db, $user_check_query);
        $user = mysqli_fetch_assoc($result);

        if ($user and $user['password'] == md5($password)) {
            $_SESSION['loginUsername'] = $username;
            $_SESSION['errors'] = "";
        }
        else {
            $_SESSION['errors'] = "Error: Please check your credentials and try again";
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