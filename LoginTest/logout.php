<!DOCTYPE html>
<html lang="en">
  
  <head>
    <title>RoundAboutMe: Home</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
  </head>

  <body>
    <p>Logging out...</p>
  </body>

</html>

<?php
  session_start();
  session_unset();
  session_destroy();
  header ("Location: ../index.php");
?>