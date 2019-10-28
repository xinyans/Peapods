<?php
    function validate($item) {
        $item = trim($item);
        $item = stripslashes($item);
        $item = htmlspecialchars($item);
        return $item;
    }

    session_start();

    if(!isset($_SESSION['loginUsername'])){
        $_SESSION['loginUsername'] = "-1";
    }
    else if($_SERVER["REQUEST_METHOD"] == "POST") {
        $username = $password = $error = "";

        $username = validate($_POST['username']);
        $password = validate($_POST['password']);
        $data = file_get_contents("users.txt");
        $data = explode("\n", $data);
        $validationPassed = FALSE;

        foreach($data as $values) {
            $loginInfo = explode(":", $values);
            if((validate($loginInfo[0]) == validate($username)) and (validate($loginInfo[1]) == validate($password))) {
                    $validationPassed = TRUE;
                    break;
            }
        }
        if($validationPassed) {
            $_SESSION['loginUsername'] = $username;
        }
    }
?>

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
				<input type="text" name="search" placeholder="Group Code">
            </section>
        </nav>
        <main>
			<article>
				<header>
                    <canvas id = "contentCanvas">
                    </canvas>
				</header>
                <section>
                </section>
            </article>
        </main>
    </body>
</html>