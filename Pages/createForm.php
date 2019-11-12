<!DOCTYPE html>
<html lang="en">
	<head>
		<title>PeaPods: Create Form</title>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
		<link rel="stylesheet" href="../Stylesheets/formCreate.css" type="text/css" />
		<link rel="stylesheet" href="../Stylesheets/stylesheets.css" type="text/css" />
		<link href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap" rel="stylesheet">
		<style>
			body,h1,h2,h3,h4,h5,h6 {font-family: 'Ubuntu', sans-serif;}
		</style>
		<script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js"></script>
		<script src="../Code/createForm.js"></script>
	</head>

	<body>
		<nav>
			<a title="Home" href = "../index.php"><img src="../Resources/Peapods.png"></a>
			<section>
			<form id = "groupSearch" src="#">
				<input title="Group Search" type="text" name="code" placeholder="Group Code">
			</form>
			<a title="Create Form" href="createForm.php"><img src="../Resources/createform.png"></a>
			<a title="Dashboard" href="dashboard.php"><img src="../Resources/dashboard.png"></a>
			<a title="Sign In" href="#"><img src="../Resources/loginguy.png"></a>
			</section>
		</nav>
		<main class="mainContent">
				<!-- Main Part of Content -->
				<h2>Create Your Form</h2>
				<form name="peapodForm" action="#" id="formCreationForm" method="post" onsubmit="return false;">
					<fieldset>
						<legend><span class="section">1</span>Basic Information</legend>
						<label class="" for="formName">Form Name</label>
						<input type="text" name="formName" id="formName" placeholder="50 Chars Max" maxlength="50" required autofocus>
						<p id="noName"></p>
						<label class="" for="dueDate">Due Date</label>
						<input type="date" name="dueDate" id="dueDate" required>
						<p id="noDate"></p>
					</fieldset>
					<fieldset id="creationQuestions">
						<legend><span class="section">2</span>Choices of your Choice</legend>
					</fieldset>
					<button type="button" id="addQuestion">Add Question</button>
					<!-- Add the submit button with javascript so that users cannot submit with javascript disabled -->
					<!-- We will need javascript for form creation but not necessarily when filling them out -->
					<input id="submitButton" type="submit" value="Create Form!">
				</form>
		</main>
	</body>

</html>