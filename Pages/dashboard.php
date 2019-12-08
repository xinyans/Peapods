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
            <script type="text/javascript">
                window.codes = [];
            </script>
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
                $ran = false;
                while($row = $forms->fetch_assoc()) {
                    $ran = true;
                    $code = $row["code"];
                    $query = 'SELECT formname FROM forms WHERE CODE = "'.$code.'"';
                    $groupname = $db->query($query)->fetch_assoc()['formname'];
                    $sql_submissions= 'SELECT COUNT(code) AS submissions FROM formdata WHERE code="'. $code .'"';
                    $submissions = $db->query($sql_submissions)->fetch_assoc()["submissions"];

                    echo '<div class="dashBar" id = "'. $code . '_container">
                          <canvas class="graph" id="'. $code .'"></canvas>
                          <div class="group">
                          <h1 class="groupname">'. $groupname .'</h1>
                          <div class="slidecontainer">
                          <input type="range" min="1" max="'. $submissions .'" value="'. (int)($submissions/2) .'" class="slider" id="'. $code .'_input">
                          </div>
                          <div class="clearfix">
                          <h1 class="submissions">'. $submissions .' Submissions</h1>
                          <h1 id="'. $code .'_input" class="count">       </h1>
                          <h1 class="code">Code: '. $code.'</h1>
                          </div></div></div><img class="generateGroups" src="https://img.icons8.com/pastel-glyph/64/000000/groups.png" id="'.$code.'_generate"></img>
                          <img class="deleteForm" src="https://img.icons8.com/android/96/000000/trash.png" id="'.$code.'_delete"></img>';
                    if($submissions > 0){
                        echo '<script type="text/javascript">
                        window.codes.push("'.$code.'");
                        createGraph("#'. $code .'", "'. $code .'");
                        </script></div>';
                    }
                    else {
                        echo '<script type="text/javascript">
                        createGraph("#'. $code .'", "'. $code .'");
                        </script></div>';
                    }

                }
                if($ran == false){
                    echo "<h1 id = 'noforms'><a href = 'createForm.php'>Create a Form</a></h1>";
                }

                $db->close();
            ?>
            <script type="text/javascript">        
                $(".slider").on('change', function(event){
                    $("h1[id="+ event.target.id +"]").text("Groups: " + event.target.value);
                });
                $(".deleteForm").click(function(event){
                    code = event.target.id.substring(0, 6);
                    $("#" + code + "_container").css("display", "none");
                    $.ajax({
                    type: "POST",
                    url: "../Ajax/ajaxRemoveForm.php",
                    data: {code: code},
                    success: function(msg){
                        console.log(msg);
                    }
                });
                });
                $(".generateGroups").click(function(event){
                    code = event.target.id.substring(0, 6);
                    console.log(code);
                    val = $(".slider[id*='" + code + "']").val();
                    runAlgo(code, val);
                    createGraph("#" + code, code)
                });
            </script>
        </main>
    </body>
</html>