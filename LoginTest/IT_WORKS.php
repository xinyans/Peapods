<!DOCTYPE html>
<html lang="en">
  <head>
    <title>PeaPods: WELCOME!</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <link rel="stylesheet" href="test.css" type="text/css" />
    <script type="text/javascript" src="jquery-3.1.1.min.js"></script>
  </head>
  
  <body>
    <p>YES! MY CODE WORKS! Here you are logged in!</p>
    <p>Your username is:</p>
    <p>
      <?php
      session_set_cookie_params(0);
      session_start();
      echo $_SESSION['yourUserName'];
      ?>
    </p>
    <ul>Link for testing purposes:
      <li><a href="home2.php">Homepage</a></li>
    </ul>
  </body>
</html>