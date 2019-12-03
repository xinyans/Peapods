<!DOCTYPE html>
<html lang="en">
	<head>
		<title>PeaPods: Create Form</title>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
		<link rel="stylesheet" href="../Stylesheets/formCreate.css" type="text/css" />
		<link rel="stylesheet" href="../Stylesheets/stylesheets.css" type="text/css" />
        <link rel="stylesheet" type="text/css" href="../Stylesheets/login.css"/>
		<link href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap" rel="stylesheet">
		<style>
			body,h1,h2,h3,h4,h5,h6 {font-family: 'Ubuntu', sans-serif;}
		</style>
		<script src="../Code/jquery-3.4.1.min.js"></script>
        <script src="../Code/login.js"></script>
		<script src="../Code/fillForm.js"></script>
	</head>

	<body>
		<nav>
            <a title="Home" href = "../index.php"><img src="../Resources/Peapods.png" alt="Home"/></a>
            <section>
                <form id="groupSearch" action="#">
                    <input title="Group Search" type="text" name="code" placeholder="Group Code"/>
                </form>
                <a title="Create Form" href="createForm.php"><img src="../Resources/createform.png" alt="Create Form"/></a>
                <a title="Dashboard" href="dashboard.php"><img src="../Resources/dashboard.png" alt="Dashboard"/></a>
                <a title="Sign In" href="#"><img src="../Resources/loginguy.png" alt="Sign In"/></a>
            </section>
        </nav>
		<main class="mainContent">
            <h2>Fill Out the Form</h2>
            <fieldset id="">
                <legend>Form Code</legend>
                <input id="formCode" placeholder="Please input the 6-digit form code">
                <button id="formCodeSubmit">Search Form</button>
            </fieldset>
		</main>
	</body>

</html>