<?php
    session_start();
    if($_SERVER["REQUEST_METHOD"] == "POST") {
        $db = new mysqli('localhost', 'root', 'Techie0110', 'peapods');
        $username = mysqli_real_escape_string($db, $_POST['username']);
        $password = mysqli_real_escape_string($db, $_POST['password']);
        
        if (empty($username)) { array_push($errors, "Username is required"); }
        if (empty($password)) { array_push($errors, "Password is required"); }
        
        $user_check_query = "SELECT * FROM userdata WHERE username='$username' OR email='$email' LIMIT 1";
        $result = mysqli_query($db, $user_check_query);
        $user = mysqli_fetch_assoc($result);
        
        $validationPassed = FALSE;

        if ($user and $user['password'] == md5($password)) { // if user exists
          $validationPassed = TRUE;
        }
        /*
        foreach($data as $values) {
            $loginInfo = explode(":", $values);
            if((validate($loginInfo[0]) == validate($username)) and (validate($loginInfo[1]) == validate($password))) {
                $validationPassed = TRUE;
                break;
            }
        }
        */
        if($validationPassed) {
            $_SESSION['loginUsername'] = $username;
        }

        $db->close();
    }
    header("location: index.php");
?>