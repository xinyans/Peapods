var login = `
<aside class = "login">
    <form action="LoginTest/login.php" method="post">
        <button type="button">X</button>
        <input type="text" name="username" id="username" placeholder="Username">
        <input type="password" name="password" id="password" placeholder="Password">
        <span><?php echo $error; ?></span>
        <input type="submit" value="Login" id="Login" name="Login"/>
    </form>
</aside>
`;

var loginState = false;

function loginClick(){
    console.log(loginState);
    if(!loginState){
        temp = $("body").html();
        $("body").html(login + temp);
        $("body>aside>form>button:nth-child(1)").click(function(){
            $("body").html(temp);
            $("nav>header>img:nth-child(2)").click(loginClick);
            $("nav>header>img:nth-child(2)").attr("src", "Resources/loginguy.png");
        });
    }
}

function logoutClick(){

}

/** Call this function from page js file */
function addLoginListeners(){
    if(~$("body>nav>header>p").html().indexOf("true")){
        console.log("logged in");
        loginState = true;
        $("nav>header a:nth-child(2)").attr("href", "LoginTest/logout.php");
        $("nav>header img:nth-child(2)").attr("src", "Resources/door.png");
    }
    else {
        console.log("logged out");
        loginState = false;
        $("nav>header img:nth-child(2)").attr("src", "Resources/loginguy.png");
    }
    $("nav>header>img:nth-child(2)").click(loginClick);
}