<!DOCTYPE html>
<html lang="en">
  <head>
    <title>PeaPods: Home</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <link rel="stylesheet" href="style.css" type="text/css" />
  </head>

  <body>
    <div>
      <span class="bodyLeft">
        PeaPods
      </span>
      <span class="bodyRight">
        Signed in as: <?php session_set_cookie_params(0); session_start(); echo $_SESSION['yourUserName']; ?>
        <a href="logout.php">Sign Out</a>
      </span>
    </div>

  </body>

</html>