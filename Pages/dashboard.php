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
        <script src="../Code/knn.js"></script>
        <script src="../Graph/graph.js"></script>
        <script src="../Code/dashboard.js"></script>
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
                          <canvas class="graph" id="'. $code .'"></canvas>
                          <div class="group">
                          <h1 class="groupname">'. $groupname .'</h1>
                          <div class="slidecontainer">
                          <input type="range" min="1" max="'. $submissions .'" value="'. (int)($submissions/2) .'" class="slider" id="'. $code .'_input">
                          </div>
                          <div class="clearfix">
                          <h1 class="submissions">'. $submissions .' Submissions</h1>
                          <h1 class="code">CODE: '. $code.'</h1>
                          </div></div></div><img class="generateGroups" src="https://img.icons8.com/pastel-glyph/64/000000/groups.png" id="'.$code.'_generate"></img>
                          <img class="deleteForm" src="https://img.icons8.com/android/96/000000/trash.png"></img>';

                    echo '<script type="text/javascript">
                            window.codes = [];
                            window.codes.push("'.$code.'");
                            createGraph("#'. $code .'", "'. $code .'");
                         ';
                }

                $db->close();
            ?>

                for (x = 0; x < window.codes.length; x++) { 
                    document.getElementById(window.codes[x] + "_generate").onclick = function() {
                    for (x = 0; x < window.codes.length; x++) {
                        runAlgo(window.codes[x], document.getElementById(window.codes[x]+"_input").value);
                        console.log("RunAlgo complete for" + window.codes[x]);
                        createGraph("#" + window.codes[x], window.codes[x])
                    }
                };
                } 
                
            </script>

        </main>
    </body>
</html>