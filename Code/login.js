var login = `
<aside class = "login">
    <form onsubmit="false">
        <button type="button">X</button>
        <input type="text" value = "Username">
        <input type="text" value = "Password">
        <button type="button">Submit</button>
    </form>
</aside>
`;

function loginClick(){
    temp = $("body").html();
    $("body").html(login + temp);
    $("body>aside>form>button:nth-child(1)").click(function(){
        $("body").html(temp);
        $("nav>header>img:nth-child(2)").click(loginClick);
        $("nav>header>img:nth-child(2)").attr("src", "Resources/loginguy.png");
    });
    $("body>aside>form>button:nth-child(4)").click(function(){
        loginData = {
            "user" : $("body>aside>form>input:nth-child(2)").val(),
            "pass" : $("body>aside>form>input:nth-child(3)").val()
        }
        if(!(loginData["user"] == "" || loginData["pass"] == "")){
            $("body").html(temp);
            $("nav>header>img:nth-child(2)").attr("src", "Resources/door.png");
            $("nav>header>img:nth-child(2)").click(logoutClick);
        }
    });
}

function logoutClick(){
    
}

function addLoginListeners(){
    $("nav>header>img:nth-child(2)").click(loginClick);
}

window.onload = function() {
    this.addLoginListeners();
}