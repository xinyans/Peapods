<?php
    session_start();
    $_SESSION['requestPage'] = $_SERVER['REQUEST_URI'];
    if(!isset($_SESSION['loginUsername'])){
        $_SESSION['loginUsername'] = "-1";
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
            <header>
                <a href = "../index.php"><img src="../Resources/Peapods.png"></a>
                <a href = "#"><img src="../Resources/loginguy.png"></a>
                <p>
                    <?php
                        echo $_SESSION['loginUsername'] != "-1" ? "true" : "false";
                    ?>
                </p>
            </header>
            <section>
				<nav>
					<a href="makeForm.php">Create</a>
					<a href="dashboard.php">Dashboard</a>
				</nav>
                <form action = "displayGroups.php" method="post">
				    <input type="text" name="code" placeholder="Group Code">
                </form>
            </section>
            <?php echo $_SESSION['errors']; ?>
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