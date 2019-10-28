<?php
  session_start();
  unset($_SESSION['yourUserName']);
  unset($_SESSION['saveList']);
  session_destroy();
  header ("Location: ../index.php");
?>