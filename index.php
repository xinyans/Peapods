<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset = "UTF-8">
        <title>Prototype</title>
        <link rel="icon" type="image/png" href="resources/favicon.png">
        <link rel="stylesheet" type="text/css" href="Stylesheets/stylesheets.css">
        <script src="code/jquery-3.4.1.min.js"></script>
        <script src="code/login.js"></script>
    </head>
    <body>
        <nav>
            <header>
				<img src="Resources/Peapods.png">
                <img src="Resources/loginguy.png">
                <a href="LoginTest/logout.php"><img src="Resources/door.png"></a>
            </header>
            <section>
				<nav>
					<a href="https:\\www.google.com">Groups</a>
					<a href="https:\\www.google.com">Create</a>
					<a href="https:\\www.google.com">Dashboard</a>
				</nav>
				<input type="text" name="search" placeholder ="Search">
            </section>
        </nav>
        <main>
			<article>
				<header>
					stuff for top of page goes here
				</header>
                	remainder goes header
                <section>
                    individual items
                </section>
                <h3>Your username is:</h3>
                <p><?php session_start(); echo $_SESSION['yourUserName']; ?></p>
            </article>
		</main>
    </body>
</html>