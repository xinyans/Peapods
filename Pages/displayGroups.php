<?php
    session_start();
    if($_SERVER["REQUEST_METHOD"] == "GET") {
        $code = $_GET['code'];
    }
    else if($_SERVER["REQUEST_METHOD"] == "POST"){
        $code = $_POST['code'];
    }
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset = "UTF-8">
        <title>Prototype</title>
        <link rel="icon" type="image/png" href="resources/favicon.png">
        <link rel="stylesheet" type="text/css" href="../Stylesheets/stylesheets.css">
        <link rel="stylesheet" type="text/css" href="../Stylesheets/login.css">
        <link rel="stylesheet" type="text/css" href="../Stylesheets/displayGroups.css">
        <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"> 
        <script src="../Code/jquery-3.4.1.min.js"></script>
        <script src="../Code/login.js"></script>
        <script src="../Code/displayGroups.js"></script>
    </head>
    <body>
        <nav>
            <a title="Home" href = "../index.php"><img src="../Resources/Peapods.png"></a>
            <section>
                <form id = "groupSearch" src="#">
                    <input title="Group Search" type="text" name="code" placeholder="Group Code">
                </form>
                <a title="Create Form" href="../Misc Development/LoginTest/create.html"><img src="../Resources/createform.png"></a>
                <a title="Dashboard" href="dashboard.php"><img src="../Resources/dashboard.png"></a>
                <a title="Sign In" href="#"><img src="../Resources/loginguy.png"></a>
            </section>
            <p>
                <?php
                    echo $code;
                ?>  
            </p>
        </nav>
        <main>
      <article>
        <header>
                    <canvas id = "groupcanvas"></canvas>
        </header>
                <section class = "groups">
                </section>
            </article>
    </main>
    </body>
</html>