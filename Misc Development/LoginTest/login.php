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
    $data = file_get_contents("users/userData.txt");
    $data = explode("\n", $data);
    $validationPassed = FALSE;
  

    foreach($data as $values) {
      $loginInfo = explode(":", $values);
      if((validate($loginInfo[0]) == validate($username)) and (validate($loginInfo[1]) == validate($password))) {
        $validationPassed = TRUE;
        echo "passed <br/>";
        break;
      }
    }
  
    if($validationPassed) {
      session_set_cookie_params(0);
      session_start();
      session_regenerate_id(true);
      $_SESSION['yourUserName'] = $username;
    }
    else { $error = "Error logging in: Make sure your username and password are correct"; }
    //echo session_status() === PHP_SESSION_ACTIVE ? "true" : "false";
    header("Location: ../index.php");
  }
?>