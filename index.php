<?php
    session_start();

    if(!isset($_SESSION['loginUsername'])){
        $_SESSION['loginUsername'] = "-1";
    }
    else if($_SERVER["REQUEST_METHOD"] == "POST") {
        $db = new mysqli('localhost', 'root', 'cows', 'userdata');
        $username = mysqli_real_escape_string($db, $_POST['username']);
        $password = mysqli_real_escape_string($db, $_POST['password']);
        
        if (empty($username)) { array_push($errors, "Username is required"); }
        if (empty($password)) { array_push($errors, "Password is required"); }
        
        $user_check_query = "SELECT * FROM user WHERE username='$username' OR email='$email' LIMIT 1";
        $result = mysqli_query($db, $user_check_query);
        $user = mysqli_fetch_assoc($result);
        
        $validationPassed = FALSE;

        if ($user) { // if user exists
          $validationPassed = TRUE;
        }

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

        $db->close();
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
                <form action = "displaygroups.php" method="post">
				    <input type="text" name="code" placeholder="Group Code">
                </form>
            </section>
        </nav>
        <main>
			<article>
				<header>
                    <canvas id = "contentCanvas"></canvas>
				</header>
                <section>
                </section>
            </article>
        </main>
    </body>
</html>