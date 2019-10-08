<?php
  
  $username = $_POST['username'];
  $password = $_POST['password'];
  $allInput = ($username . $password);
  $data = file_get_contents("users/hashedUserData.txt");
  $data = explode("\n", $data);
  //print($data);
  $x = 0;


//  function checkLogin() {
  foreach($data as $values) {
    $loginInfo = explode(":", $values);
      $userBase = $loginInfo[0];
      $passBase = $loginInfo[1];
  
    if(($userBase == $username) && (password_verify($password, $passBase)) && ($username !== "")) {
        //print("Login Successful!");
      $x = 1;
//        return $userBase;
        
      }
      
//        print("Login Failed");
      }

    if ($x == 1) {
      session_set_cookie_params(0);
      session_start();
      $_SESSION['yourUserName'] = $username;
      header("Location: IT_WORKS.php");
      exit();
    }
    
    else {
      header("Location: errors/IT_FAILED.html");
      exit();
  }
?>