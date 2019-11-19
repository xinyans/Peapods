<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset = "UTF-8">
        <title>Peapods-Home (Beta)</title>
        <link rel="icon" type="image/png" href="../Resources/favicon.png">
        <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="../Stylesheets/stylesheets.css">
        <link rel="stylesheet" type="text/css" href="../Stylesheets/login.css">
        <link rel="stylesheet" type="text/css" href="../Stylesheets/index.css">
        <script src="../Code/jquery-3.4.1.min.js"></script>
        <script src="../Code/login.js"></script>
        <script src="../Code/index.js"></script>
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
        <main>
            <form id="searchBar" src="#">
                <h1>Find Your Group</h1>
                <input placeholder="Group Code"/>
                <img src="../Resources/search.png" alt="Search"/>
            </form>
        </main>
    </body>
</html>