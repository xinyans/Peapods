window.onload = function(){
    this.addLoginListeners(true);
}

var actionWords = ["&nbspfind roommates.&nbsp&nbsp", "&nbsporganize groups.&nbsp&nbsp&nbsp", "&nbspfind opportunities."];
var intervalID = window.setInterval(slideText, 3010);
var index = 0;

function slideText()
{
	document.getElementById("slideText").innerHTML = actionWords[index++ % 3];
}