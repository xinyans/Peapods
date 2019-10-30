var login = `
<aside class = "login">
    <form action="../Login/login.php" method="post">
        <button type="button">X</button>
        <input type="text" name="username" placeholder="Username">
        <input type="password" name="password" placeholder="Password">
        <button type="button">Register</button>
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
        <input type="submit" value="Register" name="Register"/>
    </form>
</aside>
`;

var loginState = false;

function loginClick(){
    if(!loginState){
        temp = $("body").html();
        $("body").html(login + temp);
        $("body>aside>form>button:nth-child(4)").click(function(){
            $("body").html(register + temp);
            $("body>aside>form>button:nth-child(1)").click(function(){
                $("body").html(temp);
                addLoginListeners(false);
            });
        });
        $("body>aside>form>button:nth-child(1)").click(function(){
            $("body").html(temp);
            addLoginListeners(false);
        });
        if(~$("body>nav>p:nth-child(4)").html().indexOf("1")){
            $(".login>form>input:nth-child(2)").css("border", "1px solid red");      
            $(".login>form>input:nth-child(3)").css("border", "1px solid red");      
        }
    }
}

/** Call this function from page js file */
function addLoginListeners(check){
    if(~$("body>nav>p:nth-child(3)").html().indexOf("true")){
        loginState = true;
        $("nav>section>a:nth-child(4)").attr("href", "../Login/logout.php");
        $("nav>section>a:nth-child(4) img").attr("src", "../Resources/door.png");
    }
    else {
        loginState = false;
        $("nav>section>a:nth-child(4) img").attr("src", "../Resources/loginguy.png");
        if(check && ~$("body>nav>p:nth-child(4)").html().indexOf("1")){
            check = false;
            loginClick();
        }
    }
    if(~$("body>nav>p:nth-child(4)").html().indexOf("a")){
        $("body>nav>section>form>input").css("border", "1px solid red");      
    }
    $("nav>section>a:nth-child(4)").click(loginClick);
}

window.onload = function(){
    addLoginListeners(true);
}