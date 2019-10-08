<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Account Created</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <link rel="stylesheet" href="test.css" type="text/css" />
  </head>

  <body>
    <p>Congratulations! You are now a registered user!</p>
    <p>Please sign in now using the link below.<p>
    <a href="login.html">Click here to sign in</a>
    <a href="home.html">Click here to go to homepage</a>
  
  <?php

  $data = file_get_contents("users/hashedUserData.txt");
  $data = explode("\n", $data);
  $username = $_POST['username'];
  $pass1 = $_POST['password'];
  $pass2 = $_POST['passwordConfirm'];
  $email = $_POST['email'];
  $personName = $_POST['personName'];
  $allInput = ($username . $pass1 . $pass2 . $email . $personName);
  $x = 0;

  if (($username == '') or ($pass1 == '') or ($pass2 == '') or ($email == '') or ($personName == '')) {
    header ("Location: errors/tryAgain5.html");
    exit();
  }

  if ($pass1 != $pass2) {
    header ("Location: errors/tryAgain2.html");
    exit();
  }

  if (strlen($pass1) < 8) {
    header ("Location: errors/tryAgain4.html");
    exit();
  }

  foreach($data as $values) {
    $loginInfo = explode(":", $values);
    $userBase = $loginInfo[0];
    
    if ($userBase == $username) {
      $x = 1;
    }

  } 

  if ($x == 1) {
    header ("Location: errors/tryAgain1.html");
    exit();
  }

//If Submit Button Is Clicked Do the Following
  if ($_POST['Login']){

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

    }
  ?>
  </body>
</html>