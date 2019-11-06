<?php
      session_start();

      if($_SERVER["REQUEST_METHOD"] == "POST") {
        $db = new mysqli('localhost', 'root', 'Techie0110', 'peapods');
        $username = mysqli_real_escape_string($db, $_POST['username']);
        $password = mysqli_real_escape_string($db, $_POST['password']);
        $firstName = mysqli_real_escape_string($db, $_POST['firstname']);
        $lastName = mysqli_real_escape_string($db, $_POST['lastname']);
        $email = mysqli_real_escape_string($db, $_POST['email']);
        
        $password = md5($password);//encrypt the password before saving in the database
        
        $user_check_query = "SELECT * FROM userdata WHERE username='$username' LIMIT 1";
        $result = mysqli_query($db, $user_check_query);
        $user = mysqli_fetch_assoc($result);
        
        if ($user) { // if user exists
          echo "";
        }
        else {
          $querys = "INSERT INTO userdata (lastName, firstName, username, password, email) 
          VALUES('$lastName', '$firstName', '$username', '$password', '$email')";
          $db->query($querys); 
          echo md5($username.$password);
        }
        $db->close();
      }
    ?>