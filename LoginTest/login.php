<!DOCTYPE html>
<html lang="en">
  
  <head>
    <title>Sign In</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
  </head>

  <body>
    <p>Logging in...</p>
  </body>

</html>

<?php

  $username = $password = $error = "";

  function validate($item) {
    $item = trim($item);
    $item = stripslashes($item);
    $item = htmlspecialchars($item);
    return $item;
  }

  if($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = validate($_POST['username']);
    $password = validate($_POST['password']);
    $data = file_get_contents("users/hashedUserData.txt");
    $data = explode("\n", $data);
    $validationPassed = 0;
  

    foreach($data as $values) {
      $loginInfo = explode(":", $values);
      if(!$loginInfo[0]) { continue; }
    
      else if(($loginInfo[0] == $username) and (password_verify($password, $loginInfo[1]))) {
        $validationPassed = 1;
        break;
      }
    }
  
    if($validationPassed) {
      session_set_cookie_params(0);
      session_start();
      $_SESSION['yourUserName'] = $username;
    }
    
    else { $error = "Error logging in: Make sure your username and password are correct"; }

    header("Location: ../index.php");
  }
?>