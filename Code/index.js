window.onload = function(){
    addLoginListeners();
    groupSearch();
    groupSearch2();
    rsg();
    textListeners();
}

var display = false;

function rsg() {
    $("h2").css("color", "white");
    $("h2>span").hide();
    $("span:nth-child(1)").css("color", "red");
    setTimeout(function() {
        $("span:nth-child(1)").css("color", "black");
        $("span:nth-child(2)").css("color", "orange");
    }, 750);
    setTimeout(function() {
        $("span:nth-child(2)").css("color", "black");
        $("span:nth-child(3)").css("color", "green");
    }, 1500);
    setTimeout(function() {
        $("span:nth-child(3)").css("color", "black");
        $("h2").css("animationName", "colorShow");
        $("h2").css("animationDuration", "750ms");
        $("h2").css("color", "black");
        $("h2>span").fadeIn(300);
        $("h2>span").css("color", "green");
        $("h2>span").promise().done(function() {
            $("h2").css("animationDuration", "0ms");
        });
    }, 2250);
}

function textListeners() {
    $("section>p").hide();
    $("#what>h3").click(function() {
        if(!display) {
            $(this).html("What is PeaPods? ◄");
            $("#how").fadeOut(333);
            $("#who").fadeOut(333);
            $("#who").promise().done(function() {
                $("#what>p").fadeIn(1);
                display = true;
            });
        }
        else {
            $(this).html("What is PeaPods? ▼");
            $("#what>p").fadeOut(333);
            $("#what>p").promise().done(function() {
                $("#how").fadeIn(1);
                $("#who").fadeIn(1);
                display = false;
            });
        }
    });
    $("#how>h3").click(function() {
        if(!display) {
            $(this).html("How does it work? ◄");
            $("#what").fadeOut(333);
            $("#who").fadeOut(333);
            $("#who").promise().done(function() {
                $("#how>p").fadeIn(1);
                display = true;
            });
        }
        else {
            $(this).html("How does it work? ▼");
            $("#how>p").fadeOut(333);
            $("#how>p").promise().done(function() {
                $("#what").fadeIn(1);
                $("#who").fadeIn(1);
                display = false;
            });
        }
    });
    $("#who>h3").click(function() {
        if(!display) {
            $(this).html("Who are we? ◄");
            $("#what").fadeOut(333);
            $("#how").fadeOut(333);
            $("#how").promise().done(function() {
                $("#who>p").fadeIn(1);
                display = true;
            });
        }
        else {
            $(this).html("Who are we? ▼");
            $("#who>p").fadeOut(333);
            $("#who>p").promise().done(function() {
                $("#what").fadeIn(1);
                $("#how").fadeIn(1);
                display = false;
            });
        }
    });
}