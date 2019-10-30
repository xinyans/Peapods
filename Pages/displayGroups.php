<?php
    session_start();
    if(!isset($_SESSION['loginUsername'])){
        $_SESSION['loginUsername'] = "-1";
    }
    if($_SERVER["REQUEST_METHOD"] == "POST") {
        $data = $username = $password = $firstName = $lastName = $email = "";
        $errors = array();
        $db = new mysqli('localhost', 'root', 'cows', 'peapods');
        $code = mysqli_real_escape_string($db, $_POST['code']);
        if (empty($code)) {
            array_push($errors, "No code was included");
        }
        $code_query = "SELECT * FROM groupdata WHERE usercode = '$code' LIMIT 1";
        $result = mysqli_query($db, $code_query);
        if($result and $result->num_rows == 1){
            $printData = mysqli_fetch_assoc($result);
            $_SESSION['code'] = $_POST['code'];
        }
        else {
            $_SESSION['errors'] += "a";
            if(isset($_SESSION['requestPage']) and $_SESSION['requestPage'] == '/Pages/displayGroups.php' and isset($_SESSION['code'])){
                $code = $_SESSION['code'];
                $code_query = "SELECT * FROM groupdata WHERE usercode = '$code' LIMIT 1";
                $result = mysqli_query($db, $code_query);
                $printData = mysqli_fetch_assoc($result);
            }
            else if(isset($_SESSION['requestPage'])){
                if($_SESSION['requestPage'] == '/Pages/displayGroups.php'){
                    header("location: ../index.php");                
                }
                else{
                    header("location: ..".$_SESSION['requestPage']);                    
                }
            }
            else {
                header("location: ../Pages/index.php");
            }
        }
        $db->close();
    }
    else {
        header("location: ../Pages/index.php");
    }
    $_SESSION['requestPage'] = $_SERVER['REQUEST_URI'];
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
                <?php
                    if(isset($_SESSION['errors'])){
                        echo $_SESSION['errors'];
                        unset($_SESSION['errors']);
                    }
                ?>
            </p>
            <p>
                <?php
                    echo $printData['groupjson'];
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