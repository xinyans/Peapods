<?php
  $data = $firstname = $lastname = $email = $username = $password = "";
  $er1 = $er2 = $er3 = $er4 = $er5 = "";

  function validate($item) {
    $item = trim($item);
    $item = stripslashes($item);
    $item = htmlspecialchars($item);
    return $item;
  }

  if($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = file_get_contents("users.txt");
    $data = explode("\n", $data);
    $firstname = validate($_POST['firstname']);
    $lastname = validate($_POST['lastname']);
    $email = validate($_POST['email']);
    $username = validate($_POST['username']);
    $password = validate($_POST['password']);
    //$pass2 = validate($_POST['passwordConfirm']);
    $validationPassed = true;

    if($firstname == "") {
      $er1 = "Error: First name is required";
      $validationPassed = false;
    }

    if($lastname == "") {
      $er2 = "Error: Last name is required";
      $validationPassed = false;
    }

    if($email == "") {
      $er3 = "Error: Email address is required";
      $validationPassed = false;
    }

    if($username == "") {
      $er4 = "Error: Username is required";
      $validationPassed = false;
    }

    if($password == "") {
      $er5 = "Error: Password is required";
      $validationPassed = false;
    }

    if(strlen($password) < 8 and $validationPassed) {
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
    if ($_POST['Register'] and $validationPassed) {

      $myFile = "LoginTest/users/userData.txt";
      $fh = fopen($myFile, 'a') or die("can't open file");
      $stringData = $_POST['username'] . ":";
      fwrite($fh, $stringData);
      $stringData = $_POST['password'] . ":";
      fwrite($fh, $stringData);
      /*
      $stringData = $_POST['email'] . ":";
      fwrite($fh, $stringData);
      $stringData = $_POST['personName'] . "\n";
      fwrite($fh, $stringData);
      */
      fclose($fh);

      $myFile = "LoginTest/users/hashedUserData.txt";
      $fh = fopen($myFile, 'a') or die("can't open file");
      $stringData = "\n\n" . $_POST['username'] . ":";
      fwrite($fh, $stringData);
      $stringData = $_POST['password'];
      $hashed_password = password_hash($stringData, PASSWORD_DEFAULT);
      fwrite($fh, $hashed_password);
      /*
      $stringData = "\n" . $_POST['email'] . ":";
      fwrite($fh, $stringData);
      $stringData = $_POST['personName'];
      $hashed_name = password_hash($stringData, PASSWORD_DEFAULT);
      fwrite($fh, $hashed_name);
      */
      fclose($fh);

      /*
      $myFile = ("users/account_" . $username . "_data.txt");
      $fh = fopen($myFile, 'w') or die("can't open file");
      $stringData = ("User:" . $username . "\nName:" . $personName . "\n\nForms:\n\n");
      fwrite($fh, $stringData);
      fclose($fh);
      */

      header("Location: index.php");
    }
  }
?>