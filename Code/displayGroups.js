var exampleData = {
    "formTitle" : "Websys Groups",
    "groups" : [
        {
            "members" : [
                {
                    "name" : "Nisdfsdfsdfsdck Meyer",
                    "contact" : "meyern4@rpi.edu"
                }
            ]
        },
        {
            "members" : [
                {
                    "name" : "Nsdfsdfsdfsdfick",
                    "contact" : "meyern4@rpi.edu"
                },
                {
                    "name" : "Nick",
                    "contact" : "meyern4@rpi.edu"
                }
            ]
        },
        {
            "members" : [
                {
                    "name" : "Nick",
                    "contact" : "meyern4@rpi.edu"
                }
            ]
        },
        {
            "members" : [
                {
                    "name" : "Nsdfsdfsdfsdfsdfsdfick",
                    "contact" : "meyern4@rpi.edu"
                },
                {
                    "name" : "Nick",
                    "contact" : "meyern4@rpi.edu"
                },
                {
                    "name" : "Nick",
                    "contact" : "meyern4@rpi.edu"
                },
                {
                    "name" : "Nick",
                    "contact" : "meyern4@rpi.edu"
                },
                {
                    "name" : "Nick",
                    "contact" : "meyern4@rpi.edu"
                }
            ]
        },
        {
            "members" : [
                {
                    "name" : "Nick",
                    "contact" : "meyern4@rpi.edu"
                },
                {
                    "name" : "Nick",
                    "contact" : "meyern4@rpi.edu"
                },
                {
                    "name" : "Nick",
                    "contact" : "meyern4@rpi.edu"
                },
                {
                    "name" : "Nick",
                    "contact" : "meyern4@rpi.edu"
                },
                {
                    "name" : "Nick",
                    "contact" : "meyern4@rpi.edu"
                },
                {
                    "name" : "Nicksdf sfddsf",
                    "contact" : "meyern4@rpi.edu"
                },
                {
                    "name" : "Nick",
                    "contact" : "meyern4@rpi.edu"
                },
                {
                    "name" : "Nsdfsdfsdfick",
                    "contact" : "meyern4@rpi.edu"
                },
                {
                    "name" : "Nick",
                    "contact" : "meyern4@rpi.edu"
                },
                {
                    "name" : "Nicksdfsdfsd",
                    "contact" : "meyern4@rpi.edu"
                }
            ]
        },
        {
            "members" : [
                {
                    "name" : "Nick",
                    "contact" : "meyern4@rpi.edu"
                },
                {
                    "name" : "Nick",
                    "contact" : "meyern4@rpi.edu"
                },
                {
                    "name" : "Nick",
                    "contact" : "meyern4@rpi.edu"
                },
                {
                    "name" : "Nick dsfsdfsdfsdf",
                    "contact" : "meyern4@rpi.edu"
                },
                {
                    "name" : "Nick",
                    "contact" : "meyern4@rpi.edu"
                }
            ]
        },
        {
            "members" : [
                {
                    "name" : "Nick",
                    "contact" : "meyern4@rpi.edu"
                },
                {
                    "name" : "Nick",
                    "contact" : "meyern4@rpi.edu"
                },
                {
                    "name" : "Nick",
                    "contact" : "meyern4@rpi.edu"
                },
                {
                    "name" : "Nick",
                    "contact" : "meyern4@rpi.edu"
                },
                {
                    "name" : "Nick",
                    "contact" : "meyern4@rpi.edu"
                }
            ]
        }
    ]
}

function displayData(){
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
    this.displayData();
}