function displayData(){
    code = $.trim($("body>nav>p").text());
    $.ajax({
        type: "POST",
        url: "../Ajax/getGroups.php",
        data: {code: code},
        success: function(msg){
            exampleData = JSON.parse(msg);
            returnHTML = "";
            //this.drawCanvas(this.exampleData["formTitle"]);
            $("article>header").html(exampleData["formTitle"]);
            data = exampleData["groups"]
            for(group = 0; group < data.length; group++){
                returnHTML += "<section class = \"group\"><header> Group ";
                returnHTML += (group + 1) + "</header><table>";
                subData = data[group]["members"];
                for(member = 0; member < subData.length; member++){
                    returnHTML += "<tr style = \"border-bottom: 1px solid" + ((member % 2 > 0) ? "#fff" : "#eee") + "\"><td>" + subData[member]["name"] + "</td><td>" + subData[member]["contact"] + "</td></tr>";
                }
                returnHTML += "</table></section>"
            }
            $("body>main>article>section").html(returnHTML);
        }
    });

}

window.onload = function(){
    this.addLoginListeners();
    this.groupSearch();
    this.displayData();
}