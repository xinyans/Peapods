window.onload = function(){
    this.addLoginListeners(true);
}

var actionWords = ["find roommates.", "organize groups.", "find opportunities."];
var intervalID = window.setInterval(slideText, 3000);
var index = 0;

function slideText()
{
	document.getElementById("slideText").innerHTML = actionWords[index];
	index++;
	if (index == 3)
	{
		index = 0;
	}
}