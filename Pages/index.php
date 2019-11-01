<?php
    session_start();
    $_SESSION['requestPage'] = $_SERVER['REQUEST_URI'];
    if(!isset($_SESSION['loginUsername'])){
        $_SESSION['loginUsername'] = "-1";
    }
?>

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
                <form action = "displayGroups.php" method="post">
                    <input title="Group Search" type="text" name="code" placeholder="Group Code">
                </form>
            <a title="Create Form" href="createForm.php"><img src="../Resources/createform.png"></a>
            <a title="Dashboard" href="dashboard.php"><img src="../Resources/dashboard.png"></a>
            <a title="Sign In" href="#"><img src="../Resources/loginguy.png"></a>
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
        </nav>
        <main>
            <article>
                <header>
                    <div class="subHeader">
                        <h1 id="startText" class="disableSelect">We help people</h1>
                        <h1 id="slideText" class="disableSelect">organize courses.</h1>
                    </div>
                </header>
 
                <section>
                    <p id="aboutText" class="disableSelect"> Peapods is a professional <span style="color:#1561ad;">matching service</span><br />that <span style="color:#fc5226;">streamlines</span> creating <span style="color:green;">meaningful groups</span><br />for classes based on <span style="color:#1dbab4;">data profiles</span>. </p><br>

                    <section class="iconGroup">
                        <div>
                            <img class="feature" src="../Resources/icons/018-magnifying glass.png"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec pulvinar felis. Mauris vulputate lectus ut sapien accumsan pellentesque. Cras id suscipit eros. Sed elementum non augue in maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur pellentesque feugiat. Aenean tristique risus vitae porttitor efficitur. Quisque lobortis sagittis magna, eget molestie ipsum eleifend eu. Morbi commodo nunc ac lacus volutpat consequat. Proin in nunc suscipit, fermentum dui vitae, malesuada dui. </p>
                        </div>
                        <div>
                            <img class="feature" src="../Resources/icons/023-lightbulb.png"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec pulvinar felis. Mauris vulputate lectus ut sapien accumsan pellentesque. Cras id suscipit eros. Sed elementum non augue in maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur pellentesque feugiat. Aenean tristique risus vitae porttitor efficitur. Quisque lobortis sagittis magna, eget molestie ipsum eleifend eu. Morbi commodo nunc ac lacus volutpat consequat. Proin in nunc suscipit, fermentum dui vitae, malesuada dui. </p>
                        </div>
                        <div>
                        <img class="feature" src="../Resources/icons/025-cloud computing.png"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec pulvinar felis. Mauris vulputate lectus ut sapien accumsan pellentesque. Cras id suscipit eros. Sed elementum non augue in maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur pellentesque feugiat. Aenean tristique risus vitae porttitor efficitur. Quisque lobortis sagittis magna, eget molestie ipsum eleifend eu. Morbi commodo nunc ac lacus volutpat consequat. Proin in nunc suscipit, fermentum dui vitae, malesuada dui. </p>
                        </div>
                    </section>

                </section>

            </article>
        </main>
    </body>
</html>