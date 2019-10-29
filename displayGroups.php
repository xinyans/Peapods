<?php
    session_start();

    if(!isset($_SESSION['loginUsername'])){
        $_SESSION['loginUsername'] = "-1";
    }
    else if($_SERVER["REQUEST_METHOD"] == "POST") {
        $code = mysqli_real_escape_string($db, $_POST['code']);
    }
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset = "UTF-8">
        <title>Prototype</title>
        <link rel="icon" type="image/png" href="resources/favicon.png">
        <link rel="stylesheet" type="text/css" href="Stylesheets/stylesheets.css">
        <script src="code/jquery-3.4.1.min.js"></script>
        <script src="code/login.js"></script>
        <script src="code/displayGroups.js"></script>
    </head>
    <body>
        <nav>
            <header>
                <a href = "index.php"><img src="Resources/Peapods.png"></a>
                <a href = "#"><img src="Resources/loginguy.png"></a>
                <p>
                    <?php
                        echo $_SESSION['loginUsername'] != "-1" ? "true" : "false";
                    ?>
                </p>
            </header>
            <section>
				<nav>
					<a href="https:\\www.google.com">Groups</a>
					<a href="https:\\www.google.com">Create</a>
					<a href="https:\\www.google.com">Dashboard</a>
				</nav>
                <form action = "displaygroups.php" method="post">
				    <input type="text" name="code" placeholder="Group Code">
                </form>
            </section>
        </nav>
        <main>
			<article>
				<header>
					stuff for top of page goes here
				</header>
                <section class = "groups">
                </section>
            </article>
		</main>
    </body>
</html>