<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset = "UTF-8">
        <title>Prototype</title>
        <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="Stylesheets/stylesheets.css">
        <link rel="stylesheet" type="text/css" href="Stylesheets/index.css">
        <script src="code/jquery-3.4.1.min.js"></script>
        <script src="code/index.js"></script>
        <script src="code/login.js"></script>
    </head>
    <body>
        <nav>
            <header>
				<img src="Resources/Peapods.png">
                <img src="Resources/loginguy.png">
                <h3>Your username is:</h3>
                <p>
                    <?php
                    session_start();
                    if($_SESSION) {
                        echo $_SESSION['yourUserName'];
                    }
                    ?>
                </p>
                <a href="LoginTest/logout.php"><img src="Resources/door.png"></a>
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
					<img id="background" src="Resources/homeBackground.png">
                    <h1 id="startText">We help people</h1>
                    <h1 id="slideText">organize courses.</h1>
				</header>
 
                <section>
                    <p id="aboutText"> Peapods is a professional <span style="color:#1561ad;">matching service</span><br />that <span style="color:#fc5226;">streamlines</span> creating <span style="color:green;">meaningful groups</span><br />for classes based on <span style="color:#1dbab4;">data profiles</span>. </p>

                </section>

            </article>
        </main>
    </body>
</html>