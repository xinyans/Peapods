<?php
      session_start();

      if($_SERVER["REQUEST_METHOD"] == "POST") {
        $db = new mysqli('localhost', 'moo', 'cows', 'peapods');
        $username = mysqli_real_escape_string($db, $_POST['username']);
        $password = mysqli_real_escape_string($db, $_POST['password']);
        $firstName = mysqli_real_escape_string($db, $_POST['firstname']);
        $lastName = mysqli_real_escape_string($db, $_POST['lastname']);
        $email = mysqli_real_escape_string($db, $_POST['email']);
        
        $password = password_hash($password, PASSWORD_BCRYPT);//encrypt the password before saving in the database
        
        $user_check_query = "SELECT * FROM userdata WHERE username=? LIMIT 1";
        $statement = $db->prepare($user_check_query);
        $statement->bind_param("s", $username);
        $statement->execute();
        $result = $statement->get_result();
        $user = $result->fetch_assoc();
        
        if ($user) { // if user exists
          echo $user["username"];
        }
        else {
          $querys = "INSERT INTO userdata (`lastName`, `firstName`, `username`, `password`, `email`) 
          VALUES(?,?,?,?,?)";
          $statement = $db->prepare($querys);
          $statement->bind_param("sssss", $lastName, $firstName, $username, $password, $email);
          $statement->execute();
          echo md5($username.$password);
        }
        $db->close();
      }
    ?>