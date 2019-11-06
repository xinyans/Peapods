<?php
  session_start();
  $home = '"location: ../index.php"';
  if(isset($_SESSION['requestPage'])){
    $home = "location: ..".$_SESSION['requestPage'];
  }
  session_unset();
  session_destroy();
  header($home);
?>