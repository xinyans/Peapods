function setupCanvas(canvas) {
    var dpr = window.devicePixelRatio || 1;
    var rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    var ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    return ctx;
}

function getRandomColor(){
    return "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
}

function drawCanvas(text){
    var canvas = document.getElementById("groupcanvas");
    var ctx = setupCanvas(canvas);
    w = ctx.canvas.width;
    h = ctx.canvas.height;
    ctx.textAlign = "center";
    ctx.font = "100px 'Montserrat'";
    ctx.fillStyle = "#000";
    ctx.fillText("11111111111111111111111111111111", w/2, h / 2 + 35);
    results = [];
    notResults = [];
    path = new Uint32Array(ctx.getImageData(0, 0, w, h).data.buffer);
    radius = 50;
    
    for(i = 0; i < path.length; i++) {
        if (path[i] & 0xff000000) {             // check alpha mask
            results.push({
                x: (i % w),    // use position and radius to
                y: ((i / w)|0), //  pre-calc final position and size
                r: Math.floor(radius * Math.random()),
                c: getRandomColor()
            });
        }
    }
    ctx.clearRect(0,0,w,h);

    var drawn = [];    
    for(i = 0; i < 15; i++){
        pos = results[Math.floor(Math.random() * results.length)];
        ctx.fillStyle = pos.c;
        ctx.strokeStyle = pos.c;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, pos.r, 0, 2 * Math.PI);
        ctx.stroke();   
        ctx.closePath(); 
        drawn.push(pos);
    }

    ctx.textAlign = "center";
    ctx.font = "100px 'Montserrat'";
    ctx.fillStyle = "#000";
    ctx.fillText(text, w/2, h / 2 + 35);
}


function displayData(){
    exampleData = JSON.parse($("body>nav>p:nth-child(4)").text());
    returnHTML = "";
    //this.drawCanvas(this.exampleData["formTitle"]);
    $("article>header").html(this.exampleData["formTitle"]);
    data = this.exampleData["groups"]
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

window.onload = function(){
    this.addLoginListeners();
    this.displayData();
}