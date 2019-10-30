<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Account Creation</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <link rel="stylesheet" href="test.css" type="text/css" />
  </head>

  <body>
    <?php
      $data = $username = $pass1 = $pass2 = $email = $personName = "";
      $er1 = $er2 = $er3 = $er4 = $er5 = "";

      function validate($item) {
        $item = trim($item);
        $item = stripslashes($item);
        $item = htmlspecialchars($item);
        return $item;
      }

      if($_SERVER["REQUEST_METHOD"] == "POST") {
        $data = file_get_contents("users/hashedUserData.txt");
        $data = explode("\n", $data);
        $username = validate($_POST['username']);
        $pass1 = validate($_POST['password']);
        $pass2 = validate($_POST['passwordConfirm']);
        $email = validate($_POST['email']);
        $personName = validate($_POST['personName']);
        $validationPassed = 1;

        if($username == "") {
          $er1 = "Error: Username is required";
          $validationPassed = 0;
        }

        if($pass1 == "") {
          $er2 = "Error: Password is required";
          $validationPassed = 0;
        }

        if($pass2 == "") {
          $er3 = "Error: Password confirmation is required";
          $validationPassed = 0;
        }

        if($email == "") {
          $er4 = "Error: Email address is required";
          $validationPassed = 0;
        }

        if($personName == "") {
          $er5 = "Error: Your name is required";
          $validationPassed = 0;
        }

        if($pass1 != $pass2 and $validationPassed) {
          $er2 = "Error: Passwords must match";
          $er3 = "Error: Passwords must match";
          $validationPassed = 0;
        }

        if(strlen($pass1) < 8 and $validationPassed) {
          $er2 = "Error: Password too short";
          $validationPassed = 0;
        }

        if($validationPassed) {
          foreach($data as $values) {
            $loginInfo = explode(":", $values);
            $userBase = $loginInfo[0];
            
            if($userBase == $username) {
              $er1 = "Error: Username already taken";
              $validationPassed = 0;
              break;
            }
          }
        }

      //If Submit Button Is Clicked Do the Following
        if ($_POST['Login'] and $validationPassed) {

          $myFile = "users/userData.txt";
          $fh = fopen($myFile, 'a') or die("can't open file");
          $stringData = $_POST['username'] . ":";
          fwrite($fh, $stringData);
          $stringData = $_POST['password'] . ":";
          fwrite($fh, $stringData);
          $stringData = $_POST['email'] . ":";
          fwrite($fh, $stringData);
          $stringData = $_POST['personName'] . "\n";
          fwrite($fh, $stringData);
          fclose($fh);

          $myFile = "users/hashedUserData.txt";
          $fh = fopen($myFile, 'a') or die("can't open file");
          $stringData = "\n\n" . $_POST['username'] . ":";
          fwrite($fh, $stringData);
          $stringData = $_POST['password'];
          $hashed_password = password_hash($stringData, PASSWORD_DEFAULT);
          fwrite($fh, $hashed_password);
          $stringData = "\n" . $_POST['email'] . ":";
          fwrite($fh, $stringData);
          $stringData = $_POST['personName'];
          $hashed_name = password_hash($stringData, PASSWORD_DEFAULT);
          fwrite($fh, $hashed_name);
          fclose($fh);

          $myFile = ("users/account_" . $username . "_data.txt");
          $fh = fopen($myFile, 'w') or die("can't open file");
          $stringData = ("User:" . $username . "\nName:" . $personName . "\n\nForms:\n\n");
          fwrite($fh, $stringData);
          fclose($fh);

          header("Location: regSuccess.html");
        }
      }
    ?>
      <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post">
        <fieldset> 
          <legend>Create Your Account</legend>
          <div class="formData">
                          
            <label class="field" for="username">*Username:</label>
            <div class="value">
              <input type="text" size="60" value="" name="username" id="username"/>
              <span><?php echo $er1; ?></span>
            </div>
            
            <label class="field" for="password">^*Password:</label>
            <div class="value">
              <input type="password" size="60" value="" name="password" id="password"/>
              <span><?php echo $er2; ?></span>
            </div>

            <label class="field" for="passwordConfirm">^*Confirm Password:</label>
            <div class="value">
              <input type="password" size="60" value="" name="passwordConfirm" id="passwordConfirm"/>
              <span><?php echo $er3; ?></span>
            </div>
            
            <label class="field" for="email">*Email:</label>
            <div class="value">
              <input type="email" size="60" value="" name="email" id="email"/>
              <span><?php echo $er4; ?></span>
            </div>
            
            <label class="field" for="personName">*Your Name:</label>
            <div class="value">
              <input type="text" size="60" value="" name="personName" id="personName"/>
              <span><?php echo $er5; ?></span>
            </div>
            
            <input type="submit" value="Login" id="Login" name="Login"/>

          </div>
        </fieldset>
      </form>
      <p>*Indicates required fields. Characters < > / \ ( ) [ ] { } : ; are restricted</p>
      <p>^Password must be at least 8 characters long</p>
  </body>
</html>