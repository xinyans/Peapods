<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Sign In</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <link rel="stylesheet" href="test.css" type="text/css" />
  </head>

  <body>
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
        //$allInput = ($username . $password);
        $data = file_get_contents("users/hashedUserData.txt");
        $data = explode("\n", $data);
        //print($data);
        $validationPassed = 0;
      
      
      //  function checkLogin() {
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
          header("Location: home2.php");
        }
        
        else { $error = "Error logging in: Make sure your username and password are correct"; }
      }
    ?>
      <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post">
        <fieldset> 
          <legend>Welcome Back</legend>
          <div class="formData">
                          
            <label class="field" for="username">*Username:</label>
            <div class="value"><input type="text" size="60" value="" name="username" id="username"/></div>
            
            <label class="field" for="password">*Password:</label>
            <div class="value"><input type="password" size="60" value="" name="password" id="password"/></div>
            
            <span><?php echo $error; ?></span>

            <input type="submit" value="Login" id="Login" name="Login"/>

          </div>
        </fieldset>
      </form>
      <p>*Indicates required fields</p>
      <a href="register3.php">Create an Account</a>
  </body>

</html>