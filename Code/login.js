var login = `
<aside class = "login">
    <form action="../Login/login.php" method="post">
        <button type="button">X</button>
        <input type="text" name="username" placeholder="Username">
        <input type="password" name="password" placeholder="Password">
        <span><?php echo $_SESSION['errors']; ?></span>
        <input type="button" value="Register" name="register"/>
        <input type="submit" value="Login" name="Login"/>
    </form>
</aside>
`;

var register =`
<aside class = "register">
    <form action="../Login/register.php" method="post">
        <button type="button">X</button>
        <input type="text" name="firstname" placeholder="First Name">
        <input type="text" name="lastname" placeholder="Last Name">
        <input type="text" name="email" placeholder="Email">
        <input type="text" name="username" placeholder="Username">
        <input type="password" name="password" placeholder="Password">
        <span><?php echo $error; ?></span>
        <input type="submit" value="Register" name="Register"/>
    </form>
</aside>
`;

var loginState = false;

function loginClick(){
    if(!loginState){
        temp = $("body").html();
        $("body").html(login + temp);
        $("body>aside>form>input:nth-child(5)").click(function(){
            console.log("clicked");
            $("body").html(register + temp);
            $("body>aside>form>button:nth-child(1)").click(function(){
                $("body").html(temp);
                addLoginListeners();
            });
        });
        $("body>aside>form>button:nth-child(1)").click(function(){
            $("body").html(temp);
            addLoginListeners();
        });
    }
}

/** Call this function from page js file */
function addLoginListeners(){
    if(~$("body>nav>header>p:nth-child(3)").html().indexOf("true")){
        loginState = true;
        $("nav>header>a:nth-child(2)").attr("href", "../Login/logout.php");
        $("nav>header>a:nth-child(2) img").attr("src", "../Resources/door.png");
    }
    else {
        loginState = false;
        $("nav>header>a:nth-child(2) img").attr("src", "../Resources/loginguy.png");
    }
    $("nav>header>a:nth-child(2)").click(loginClick);
}

window.onload = function(){
    addLoginListeners();
}