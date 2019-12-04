var login = `
<aside class = "login">
    <form src = "#">
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
    <form src="#">
        <button type="button">X</button>
        <input type="text" name="firstname" placeholder="First Name">
        <input type="text" name="lastname" placeholder="Last Name">
        <input type="email" name="email" placeholder="Email">
        <input type="text" name="username" placeholder="Username">
        <input type="password" name="password" placeholder="Password">
        <input type="submit" value="Register" name="Register"/>
    </form>
</aside>
`;

var cookie = "";

function loginClick(){
    temp = $("body").html();
    //Initial login form is brought up
    $("body").html(login + temp);
    $(".login>form>button:nth-child(4)").click(function(){
        //If the register button has been clicked
        $("body").html(register + temp);
        $(".register>form>button:nth-child(1)").click(function(){
            //reset to body if x is clicked
            $("body").html(temp);
            //re-add listeners for clicking
            addLoginListeners();
        });
        $(".register>form").submit(function(event){
            event.preventDefault();
            //if register button is clicked
            //Implement perform ajax register

            /**
             * Get data here
             * 
             * username = 
             * password = 
             * email = 
             * firstname =  
             * lastname = 
             */

            password    = $("aside>form>input[name='password']").val();
            username    = $("aside>form>input[name='username']").val();
            email       = $("aside>form>input[name='email']").val();
            firstname   = $("aside>form>input[name='firstname']").val();
            lastname    = $("aside>form>input[name='lastname']").val();

            cont = true;
            if(username == ""){
                $("aside>form>input[name='username']").css("border", "1px solid red");
                cont = false;
            }
            else {
                $("aside>form>input[name='username']").css("border", "none");
            }
            if(password == ""){
                $("aside>form>input[name='password']").css("border", "1px solid red");
                cont = false;
            }
            else {
                $("aside>form>input[name='password']").css("border", "none");
            }
            if(email == ""){
                $("aside>form>input[name='email']").css("border", "1px solid red");
                cont = false;
            }
            else {
                $("aside>form>input[name='email']").css("border", "none");
            }
            if(lastname == ""){
                $("aside>form>input[name='lastname']").css("border", "1px solid red");
                cont = false;
            }
            else {
                $("aside>form>input[name='lastname']").css("border", "none");
            }
            if(firstname == ""){
                $("aside>form>input[name='firstname']").css("border", "1px solid red");
                cont = false;
            }
            else {
                $("aside>form>input[name='firstname']").css("border", "none");
            }
            if(cont){
                $.ajax({
                    type: "POST",
                    url: "../Ajax/ajaxRegister.php",
                    data: {password: password, username: username, firstname: firstname, lastname: lastname, email: email},
                    success: function(msg){
                        if(msg != ""){
                            /** If sucessful login the user */
                            $.ajax({
                                type: "POST",
                                url: "../Ajax/ajaxLogin.php",
                                data: {username: username, password: password},
                                success: function(msg2){
                                    cookie = msg2;
                                    sessionStorage.setItem("code", cookie);
                                    $("body").html(temp);
                                    addLoginListeners();
                                }
                            });
                        }
                        else {
                            //here is where you would indicate that username was invalid or email or something was reused
                            $("aside>form>input[name='username']").css("border", "1px solid red");                
                        }
                    }
                });
            }
        });
    });
    $("body>aside>form>button:nth-child(1)").click(function(){
        //Reset to body if x is clicked
        $("body").html(temp);
        //re-add listeners for clicking
        addLoginListeners();
    });
    $(".login>form").submit(function(event){
        event.preventDefault();

        //get form data
        username = $("aside>form>input[name='username']").val();
        password = $("aside>form>input[name='password']").val();

        /**
         * Implement form verification here
         *  if(loginverify(...){}) to run code below
         */
        cont = true;
        if(username == ""){
            $("body>aside>form>input:nth-child(2)").css("border", "1px solid red");
            cont = false;
        }
        else {
            $("body>aside>form>input:nth-child(2)").css("border", "none");

        }
        if(password == ""){
            $("body>aside>form>input:nth-child(3)").css("border", "1px solid red");
            cont = false;
        }
        else {
            $("body>aside>form>input:nth-child(3)").css("border", "none");
        }
        if(cont){
            $.ajax({
                type: "POST",
                url: "../Ajax/ajaxLogin.php",
                data: {username: username, password: password},
                success: function(msg){
                    cookie = msg;
                    if(msg != ""){
                        sessionStorage.setItem('code', msg);
                        $("body").html(temp);  
                        addLoginListeners();
                    }
                    else {
                        $("body>aside>form>input:nth-child(2)").css("border", "1px solid red");
                        $("body>aside>form>input:nth-child(3)").css("border", "1px solid red");
                    }
                }
            });
        }
    });

}

/** Call this function from page js file */
function addLoginListeners(){
    $.ajax({
        type: "POST",
        url: "../Ajax/ajaxCheckLogin.php",
        success: function(msg){
            if(msg == ""){
                console.log("not logged in");
                //not logged in
                $("nav>section>a:nth-child(4) img").attr("src", "../Resources/loginguy.png");
                $("nav>section>a:nth-child(4)").click(loginClick);    
                $("nav>section>a:nth-child(3)").click(function(event){
                    event.preventDefault();
                    loginClick();
                });
                $("nav>section>a:nth-child(2)").click(function(event){
                    event.preventDefault();
                    loginClick();
                });
            }
            else {
                console.log("logged in");
                //logged in
                $("nav>section>a:nth-child(4)").attr("title", "Sign Out");
                $("nav>section>a:nth-child(4)").click(function(){
                    str = window.location.href
                    if(!(str.includes("dashboard.php") || str.includes("createForm.php"))){
                        cookie = sessionStorage.getItem("code");
                        console.log(cookie);
                        $.ajax({
                            type: "POST",
                            url: "../Ajax/ajaxLogout.php",
                            data: {cookie: cookie}, 
                            success: function(msg){
                                addLoginListeners();
                            }
                        });
                    }
                });
                $("nav>section>a:nth-child(4) img").attr("src", "../Resources/door.png");
                
            }
        }
    });
    /**
    if(~$("body>nav>p:nth-child(3)").html().indexOf("true")){
        loginState = true;
        $("nav>section>a:nth-child(4)").attr("title", "Sign Out");
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
    */
}

function groupSearch(){
    $("#groupSearch").submit(function(event){
        event.preventDefault();
        code = $("#groupSearch>input").val();
        $.ajax({
            type: "POST",
            url: "../Ajax/checkCode.php",
            data: {code: code},
            success: function(msg){
                if(msg != ""){
                    if(msg == "0"){
                        $("#groupSearch>input").css("border", "none");
                        $(location).attr('href',"../Pages/displayGroups.php?code=" + code);
                    }
                    else if(msg == "1"){
                        //Add code for going to fillform here
                    }
                }
                else {
                    $("#groupSearch>input").css("border", "1px solid red");
                }
            }
        });
    });
}

function groupSearch2(){
    $("#searchBar").submit(function(event){
        console.log("asdasdsa"); 
        event.preventDefault();
        code = $("#searchBar>input").val();
        $.ajax({
            type: "POST",
            url: "../Ajax/checkCode.php",
            data: {code: code},
            success: function(msg){
                if(msg != ""){
                    if(msg == "0"){
                        $("#searchBar>input").css("border", "none");
                        $(location).attr('href',"../Pages/displayGroups.php?code=" + code);
                    }
                    else if(msg == "1"){
                        //Add code for going to fillform here
                    }
                }
                else {
                    $("#searchBar>input").css("color", "red");
                }
            }
        });
    });
}

window.onload = function(){
    addLoginListeners();
    groupSearch();
}