<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset = "UTF-8">
        <title>Prototype</title>
        <link rel="icon" type="image/png" href="resources/favicon.png">
        <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="Stylesheets/stylesheets.css">
        <link rel="stylesheet" type="text/css" href="Stylesheets/index.css">
        <script src="code/jquery-3.4.1.min.js"></script>
        <script src="code/login.js"></script>
        <script src="code/index.js"></script>
    </head>
    <body>
        <nav>
            <header>
                <a href = "index.php"><img src="Resources/Peapods.png"></a>
                <img src="Resources/loginguy.png">
                <p>
                    <?php
                    session_start();
                    if($_SESSION) {
                        echo("true");
                    }
                    else {
                        echo("false");
                    }
                    ?>
                </p>
            </header>
            <section>
				<nav>
					<a href="https:\\www.google.com">Groups</a>
					<a href="https:\\www.google.com">Create</a>
					<a href="https:\\www.google.com">Dashboard</a>
				</nav>
				<input type="text" name="search" placeholder="Search">
            </section>
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