<?php
    session_start();
    $_SESSION['requestPage'] = $_SERVER['REQUEST_URI'];
    if(!isset($_SESSION['loginUsername'])){
        $_SESSION['loginUsername'] = "-1";
    }
    if($_SESSION['errors']) {
        echo '<script type="text/javascript">alert("' . $_SESSION['errors'] . '");</script>';
    }
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset = "UTF-8">
        <title>Peapods-Home (Beta)</title>
        <link rel="icon" type="image/png" href="../Resources/favicon.png">
        <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="../Stylesheets/stylesheets.css">
        <link rel="stylesheet" type="text/css" href="../Stylesheets/login.css">
        <link rel="stylesheet" type="text/css" href="../Stylesheets/index.css">
        <script src="../Code/jquery-3.4.1.min.js"></script>
        <script src="../Code/login.js"></script>
    </head>
    <body>
        <nav>
            <a href = "../index.php"><img src="../Resources/Peapods.png"></a>
            <section>
                <form action = "displayGroups.php" method="post">
                    <input type="text" name="code" placeholder="Group Code">
                </form>
            <a href="createForm.php"><img src="../Resources/createform.png"></a>
            <a href="dashboard.php"><img src="../Resources/dashboard.png"></a>
            <a href = "#"><img src="../Resources/loginguy.png"></a>
            </section>
            <p>
                <?php
                    echo $_SESSION['loginUsername'] != "-1" ? "true" : "false";
                ?>
            </p>
            <p>
                <?php echo $_SESSION['errors']; ?>
            </p>
        </nav>
        <main>
			<article>
				<header>

				</header>
                <section>
                </section>

            </article>
        </main>
    </body>
</html>