window.onload = function(){
    this.addLoginListeners();
    this.groupSearch();
    this.rsg();
}

var actionWords = ["&nbspfind roommates.&nbsp&nbsp", "&nbsporganize groups.&nbsp&nbsp&nbsp", "&nbspfind opportunities."];
var intervalID = window.setInterval(slideText, 3000);
var index = 0;

function slideText()
{
	document.getElementById("slideText").innerHTML = actionWords[index++ % 3];
}

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
        // $("span:nth-child(3)").css("color", "green");
        // $("h2").fadeIn(750);
        $("h2").css("animationName", "colorShow");
        $("h2").css("animationDuration", "750ms");
        $("h2").css("color", "black");
        $("h2>span").fadeIn(300);
        $("h2>span").css("color", "green");
    }, 2250);
}