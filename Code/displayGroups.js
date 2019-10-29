function displayData(){
    exampleData = JSON.parse($("body>nav>header>p:nth-child(4)").text());
    console.log(exampleData);
    returnHTML = "";;
    $("body>main>article>header").html(this.exampleData["formTitle"]);
    data = this.exampleData["groups"]
    for(group = 0; group < data.length; group++){
        returnHTML += "<section class = \"group\"><header> Group ";
        returnHTML += (group + 1) + "</header><table>";
        subData = data[group]["members"];
        for(member = 0; member < subData.length; member++){
            returnHTML += "<tr style = \"background-color: " + ((member % 2 > 0) ? "#fff" : "rgba(1,1,1,0)") + "\"><td>" + subData[member]["name"] + "</td><td>" + subData[member]["contact"] + "</td></tr>";
        }
        returnHTML += "</table></section>"
    }
    $("body>main>article>section").html(returnHTML);
}

window.onload = function(){
    this.addLoginListeners();
    this.displayData();
}