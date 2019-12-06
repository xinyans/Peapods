<?php
    session_start();
    $dbPassword = "cows";
    $dbName = "peapods";
    $db = new mysqli('localhost', 'moo', $dbPassword, $dbName);
    
    if($db->connect_error) {
        die("Connection failed: " . $db->connect_error);
    }
    $dbOk = true;
    
    if($dbOk And $_SERVER["REQUEST_METHOD"] == "GET"){
		if(array_key_exists("code",$_GET)){
			$code_exists = true;
			$code = $_GET["code"];
		}
		else{
			$code_exists = false;
		}
	}
?>


<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Peapods-Fill Form</title>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
		<link rel="icon" type="image/png" href="../Resources/favicon.png"/>
		<link rel="stylesheet" href="../Stylesheets/formCreate.css" type="text/css" />
		<link rel="stylesheet" href="../Stylesheets/stylesheets.css" type="text/css" />
        <link rel="stylesheet" type="text/css" href="../Stylesheets/login.css"/>
		<link href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap" rel="stylesheet">
		<style>
			body,h1,h2,h3,h4,h5,h6 {font-family: 'Ubuntu', sans-serif;}
		</style>
		<script src="../Code/jquery-3.4.1.min.js"></script>
        <script src="../Code/login.js"></script>
		<script src="../Code/knn.js"></script>
		<script src="../Code/fillForm.js"></script>
	</head>

	<body>
		<nav>
            <a title="Home" href = "index.php"><img src="../Resources/Peapods.png" alt="Home"/></a>
            <section>
                <form id="groupSearch" action="#">
                    <input title="Group Search" type="text" name="code" placeholder="Form Code" value="<?php if($code_exists){echo $code;} ?>"/>
                </form>
                <a title="Create Form" href="createForm.php"><img src="../Resources/createform.png" alt="Create Form"/></a>
                <a title="Dashboard" href="dashboard.php"><img src="../Resources/dashboard.png" alt="Dashboard"/></a>
                <a title="Sign In" href="#"><img src="../Resources/loginguy.png" alt="Sign In"/></a>
            </section>
        </nav>
		<main class="mainContent">
		</main>
	</body>

</html>