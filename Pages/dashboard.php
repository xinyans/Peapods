<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset = "UTF-8">
        <title>Peapods-Home (Beta)</title>
        <link rel="icon" type="image/png" href="../Resources/favicon.png">
        <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="../Stylesheets/stylesheets.css">
        <link rel="stylesheet" type="text/css" href="../Stylesheets/login.css">
        <link rel="stylesheet" type="text/css" href="../Stylesheets/dashboard.css">
        <script src="../Code/jquery-3.4.1.min.js"></script>
        <script src="../Code/login.js"></script>
    </head>
    <body>
        <nav>
            <a title="Home" href = "index.php"><img src="../Resources/Peapods.png"></a>
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
            <?php
                session_start();

                $db = new mysqli('localhost', 'moo', 'cows', 'peapods');
                if ($db->connect_error) {
                    die("Connection failed: " . $db->connect_error);
                }

                $sql_username = 'SELECT * FROM logins WHERE loginCookie="' . $_SESSION['loginCookie'] . '"';
                $result = $db->query($sql_username);
                $username = $result->fetch_assoc()["username"];

                $sql_forms= 'SELECT * FROM forms WHERE creator="' . $username . '"';
                $forms = $db->query($sql_forms);

                while($row = $forms->fetch_assoc()) {
                    $code = $row["code"];
                    $groupjson = json_decode($row["groupjson"]);
                    $groupname = $groupjson->{'formTitle'};

                    $sql_submissions= 'SELECT COUNT(code) AS submissions FROM formdata WHERE code="'. $code .'"';
                    $submissions = $db->query($sql_submissions)->fetch_assoc()["submissions"];

                    echo '<div class="dashBar">
                          <h1>graph here</h1>
                          <div class="group">
                          <h1 class="groupname">'. $groupname .'</h2>
                          <div class="clearfix">
                          <h1 class="submissions">'. $submissions .' Submissions</h3>
                          <h1 class="code">CODE: '. $row["code"].'</h3>
                          </div></div></div>';
                }
                
                $db->close();
            ?>
        </main>
    </body>
</html>