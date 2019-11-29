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
            <header>
                <img src="../Resources/peas.png" alt="PeaPods Logo"/>
                <h1>
                    <span>Collaborate.</span>
                    <span> Learn. </span>
                    <span>Excel.</span>
                </h1>
                <h2>All with the power of <span>PeaPods.</span></h2>
            </header>
            <form id="searchBar" src="#">
                <h1>Find Your Group</h1>
                <input placeholder="Group Code"/>
                <img src="../Resources/search.png" alt="Search"/>
            </form>
            <article>
                <section id="what">
                    <h3>What is PeaPods? ▼</h3>
                    <p>
                        &emsp;&emsp;&emsp;&emsp;If you want to create or join a group of people where
                        everyone gets along, then PeaPods is the tool for the job. Whether you're
                        looking for project partners, roommates, study buddies, or even just a friend,
                        PeaPods will find who's best for you. <em>To learn more about how we do this,
                        see "How does it work?".</em> Simply put, we'll help find people right for you
                        based on how you and others answer relevant questions. Below you will find common
                        hypothetical use cases that can help elaborate on the specific ways in which you
                        can utilize PeaPods.
                    </p>
                    <p>
                        &emsp;&emsp;&emsp;&emsp;<strong>If you want to start a group, </strong>...
                    </p>
                    <p>
                        &emsp;&emsp;&emsp;&emsp;<strong>If you came here with a group code, </strong>...
                    </p>
                    <p>
                        &emsp;&emsp;&emsp;&emsp;<strong>If you need to assign groups, </strong>...
                    </p>
                </section>
                <section id="how">
                    <h3>How does it work? ▼</h3>
                    <p>
                        This is a somewhat lengthy chunk of text that I am
                        writing to see how well it displays in the manner
                        that I so desire. The existence of these sentences is
                        temporary, so enjoy them while they're here! :-)
                    </p>
                </section>
                <section id="who">
                    <h3>Who are we? ▼</h3>
                    <p>
                        <strong>The PeaPods team is:</strong><br/>
                        Peter Gramendies '20 - <em>Backend Engineer</em><br/>
                        Nicholas Meyer '21 - <em>Editor and Analytics Architect</em><br/>
                        Jolee McCluskey '22 - <em>Project Manager and Quality Assurance</em><br/>
                        Samuel Schantz '22 - <em>UX Designer</em><br/>
                        Xinyan Sun '22 - <em>Full Stack Developer</em>
                    </p>
                    <p>
                        &emsp;&emsp;&emsp;&emsp;PeaPods is a project that was developed over a semester by
                        <a href="https://www.rpi.edu">Rensselaer Polytechnic Institute</a>
                        undergraduate students. Assigned by Dr. Callahan of Rensselaer's
                        <a href="https://science.rpi.edu/itws">Information Technology and Web Science</a>
                        department, the project tasked students with conceptualizing a website/web
                        application and realizing said concept to functional completion. Most importantly,
                        it was required that the platform offer a unique value proposition to all its relevant
                        stakeholders. We believe PeaPods does just that by allowing group creators and their
                        prospective members to create, browse, and fill out simple and customizable forms that
                        ensure you get groups that everyone is happy with!
                    </p>
                    <p>
                        &emsp;&emsp;&emsp;&emsp;On behalf of the PeaPods team, I would like to thank you for
                        stopping by our site. Just knowing that I have helped create a product that can save
                        you a little time and reduce the stress in your day is infinitely gratifying to me.
                        Additionally, I would immensely appreciate it if you took the time to tell your friends
                        and acquaintances about PeaPods. I have and will always believe that every user matters,
                        and I find that to ring especially true on a communal platform such as PeaPods. I hope
                        to see you <em>and your group</em> again soon!
                    </p>
                    <p>
                        Sincerely, your Front-End Friend Sam&emsp;&emsp;&emsp;&emsp;--Samuel Schantz '22 - <em>UX Designer</em><br/>
                    </p>
                </section>
            </article>
        </main>
    </body>
</html>