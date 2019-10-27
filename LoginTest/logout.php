<!DOCTYPE html>
<html lang="en">
  <head>
    <title>RoundAboutMe: Home</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <link rel="stylesheet" href="test.css" type="text/css" />
  </head>

  <body class="bodyLeft">
    <p>Logging out...</p>
  </body>
</html>

<?php
  session_start();
  unset($_SESSION['yourUserName']);
  unset($_SESSION['saveList']);
  session_destroy();
  header ("Location: ../index.php");
?>