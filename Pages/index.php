<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <title>Peapods-Home (Beta)</title>
        <link rel="icon" type="image/png" href="../Resources/favicon.png"/>
        <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" type="text/css" href="../Stylesheets/stylesheets.css"/>
        <link rel="stylesheet" type="text/css" href="../Stylesheets/login.css"/>
        <link rel="stylesheet" type="text/css" href="../Stylesheets/index.css"/>
        <script src="../Code/jquery-3.4.1.min.js"></script>
        <script src="../Code/login.js"></script>
        <script src="../Code/index.js"></script>

    </head>
    <body>
        <nav>
            <a title="Home" href ="index.php"><img src="../Resources/Peapods.png" alt="Home"/></a>
            <section>
                <form id="groupSearch" action="#">
                    <input title="Group Search" type="text" name="code" placeholder="Group Code"/>
                </form>
                <a title="Create Form" href="createForm.php"><img src="../Resources/createform.png" alt="Create Form"/></a>
                <a title="Dashboard" href="dashboard.php"><img src="../Resources/dashboard.png" alt="Dashboard"/></a>
                <a title="Sign In" href="#"><img src="../Resources/loginguy.png" alt="Sign In"/></a>
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
            <form id="searchBar" action="#">
                <h1>Find Your Group</h1>
                <input placeholder="Group Code" type = "text" name="code"/>
                <img title="Search" src="../Resources/search.png" alt="Search"/>
            </form>
            <article>
                <section id="what">
                    <h3>What is PeaPods? ▼</h3>
                    <p>
                        &emsp;&emsp;&emsp;&emsp;If you want to create or join a group of people where
                        everyone gets along, then PeaPods is the tool for the job. Whether you're
                        looking for project partners, roommates, study buddies, or more, PeaPods will
                        find who's best for you. <em>To learn more about how we do this, see "How does it work?".</em>
                        Simply put, we'll help find people right for you based on how you and others answer relevant
                        questions. Below you will find common hypothetical use cases that can help elaborate on the
                        specific ways in which you can utilize the power of PeaPods.
                    </p>
                    <p>
                        &emsp;&emsp;&emsp;&emsp;<strong>If you want to start a single group,</strong>
                        whatever the purpose may be, you made the right decision by coming to PeaPods.
                        Likely, you were considering gauging interest only with people you already personally
                        know, and hashing out the details later, perhaps through a group chat.
                        <em>PeaPods will save you time and energy</em> needed to complete such an undertaking
                        by taking the workload off of you, the person with a group idea, and splitting it evenly
                        amongst all of your potential group members. No longer will you have to individually ask
                        who's interested, wait for their response, add them to a group chat if interested, ask the
                        group questions, wait for everyone's response, and resolve conflicts yourself. Now, you only
                        have to ask all your questions once, which is done while creating a form. Next, simply share
                        the group code that you will receive to any scope of people you desire. The due date feature
                        of the form will ensure that all interested parties answer your questions in a reasonable
                        amount of time. Finally, sit back, relax, and check the results once the form is closed to see
                        who PeaPods determined to be the best fits for your group. <em>Get started today by clicking
                        the button above to create your form.</em>
                    </p>
                    <p>
                        &emsp;&emsp;&emsp;&emsp;<strong>If you came here with a group code,</strong>
                        after reading this, simply paste it into the search bar above. Likely, whoever
                        supplied this code to you gave some context as to what group you will be joining.
                        If that is not the case, however, please be sure that you know what you're doing
                        before supplying any information requested by the form. By filling out all of the
                        criteria required in the form, <em>PeaPods will find you the best groupmates it can</em>,
                        using your responses as a basis for who you would work best with. We here at PeaPods wish
                        you and your future group the best in any and all endeavors.
                    </p>
                    <p>
                        &emsp;&emsp;&emsp;&emsp;<strong>If you need to assign multiple groups,</strong>
                        you might be thinking, "Why not just assign them randomly?" or "How about
                        letting everyone just pick their groups?" While randomly assigned groups
                        eliminate any potential biases, they are also blind to any compatibility
                        issues that may arise between members. This often leads to the creation of
                        dysfunctional groups, however, letting people pick their groups themselves
                        has its own set of issues. With this approach, potential members tend to
                        choose each other based on criteria that are irrelevant to the task at hand.
                        <em>PeaPods solves both of these problems.</em>
                        By creating a PeaPods form with pre-established criteria of your choosing,
                        your groups are guaranteed to be generated based on relevant information,
                        utilizing said information in an objective, unbiased manner.
                        <em>To get started, first create a form to your liking. Then, be sure to
                        communicate the group code to everyone you would like to be assigned to a
                        group.</em> As always, we hope PeaPods can work for you! 
                    </p>
                </section>
                <section id="how">
                    <h3>How does it work? ▼</h3>
                    <p>
                        &emsp;&emsp;&emsp;&emsp;PeaPods' determination of who will work best in your group(s) is
                        fueled by the information supplied by each potential group member. Upon submission of
                        the group form, the discreet data from the form, such as the multiple-choice letters
                        chosen or the slider values selected, will be read. These data are then plotted in our
                        K-Nearest-Neighbors (KNN) algorithm, which weighs and compares each value against the
                        values that everyone else within the group supplied. As more people continue to complete
                        the group form, the KNN graph will start to take shape, indicating which people's answers
                        align the most overall. Once the form's due date has passed, where the data points ultimately
                        lie determines how your group(s) will be formed.
                    </p>
                    <p>
                        &emsp;&emsp;&emsp;&emsp;Group formation occurs based on clustering within the KNN algorithm.
                        The closest data points, i.e. the people that will work best together based on how they
                        answered the group form questions, will be clustered together, thus forming the group. In cases
                        where more than one group is desired, rather than finding just the single best group, PeaPods'
                        clustering is built to create multiple, equally strong groups. <em>Remember, the number of people
                        that you want in each group will change how the clusters are generated.</em>
                    </P>
                </section>
                <section id="who">
                    <h3>Who are we? ▼</h3>
                    <p>
                        <strong>The PeaPods team is:</strong><br/>
                        Peter Gramenides '20 - <em>Backend Engineer</em><br/>
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