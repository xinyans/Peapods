function getRandomColor(){
    r = Math.floor(Math.random() * 200);
    g = Math.floor(Math.random() * 200);
    b = Math.floor(Math.random() * 200);
    r_str = r.toString(16);
    g_str = g.toString(16);
    b_str = b.toString(16);
    rgb = "#" + (r_str.length==1 ? "0"+r_str : r_str) + (g_str.length==1 ? "0"+g_str : g_str) + (b_str.length==1 ? "0"+b_str : b_str);
    return rgb;
};

function setupCanvas(canvas) {
    var dpr = window.devicePixelRatio || 1;
    var rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    var ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    return ctx;
}

//Takes a dataset and columns that are not valid and returns the top three sdev column keys
function topThreeSdev(data){
    variances = [];
    for(index = 0; index < data["data"][0]["data"].length; index++){
        variances.push([index,sdev(data, index)]);
    }
    //Sorting variances largest to smallest
    variances.sort(function(a,b){return (a[1] < b[1]) ? 1 : -1;});
    //Returning the key for those variances
    return [variances[0][0], variances[1][0], variances[2][0]];
}

//Given a dataset and a column name this will calculate the sdev for the column
function sdev(data, index){
    //Calculating the mean
    total = 0;
    for(i = 0; i < data["data"].length; i++)
        total += data["data"][i]["data"][index];
    mean = total/data["data"].length;
    //Calculating the sum of variances
    total = 0;
    for(i = 0; i < data["data"].length; i++)
        total += Math.pow(data["data"][i]["data"][index] - mean, 2);
    //Calculating sdev from variance
    return Math.sqrt(total/data["data"].length);
}

//Returns the minimum and maximum values for a given column
function minmax(data, key){
    min = Number.MAX_VALUE;
    max = Number.MIN_VALUE;
    for(i = 0; i < data["data"].length; i++){
        if(data["data"][i]["data"][key] < min)
            min = data["data"][i]["data"][key];
        if(data["data"][i]["data"][key] > max)
            max = data["data"][i]["data"][key];
    }
    return[min, max];
}

//Draws the graph aka does all the graphics
//Width and height should be the same
function drawGraph(canvas, ctx, d, offsetx, offsety, data, degx, degy, xaxis, yaxis, zaxis, groupCount, colors, nonzero){
    
    //Clear any previous content in canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // minx = 0;
    // maxx = 1;
    // miny = 0;
    // maxy = 1;
    // minz = 0;
    // maxz = 1;
    if(nonzero){

        temp = minmax(data, xaxis);
        minx = temp[0] - .01;
        maxx = temp[1] + .01;
        temp = minmax(data, yaxis);
        miny = temp[0] - .01;
        maxy = temp[1] + 0.01;
        temp = minmax(data, zaxis);
        minz = temp[0] - 0.01;
        maxz = temp[1] + 0.01;

        //Getting increments which represent the size of one unit relative to the size of the canvas
        xinc = Math.floor(d / (maxx - minx));
        yinc = Math.floor(d / (maxy - miny));
        zinc = Math.floor(Math.sqrt(Math.pow((d * Math.cos(degx)),2) + Math.pow(d * Math.sin(degy),2)) / (maxz - minz + 1));
        radius = 4;
    }

    //Setting the background colors of sections ----------->

    //this is the bottom background color
    ctx.fillStyle = "#ded";
    ctx.beginPath();
    //bottom left
    ctx.moveTo(offsetx, offsety + d);
    //bottom back left
    ctx.lineTo(offsetx + d  - d * Math.cos(degx), offsety + d  - d * Math.sin(degy));
    //bottom back right
    ctx.lineTo(offsetx + 2 * d  - d * Math.cos(degx), offsety + d  - d * Math.sin(degy));
    //bottom front right
    ctx.lineTo(offsetx + d, offsety + d);
    ctx.fill();
    ctx.closePath();

    //this is the left background color
    ctx.fillStyle = "#ded";
    ctx.beginPath();
    //bottom left
    ctx.moveTo(offsetx, offsety + d);
    //bottom back left
    ctx.lineTo(offsetx + d  - d * Math.cos(degx), offsety + d  - d * Math.sin(degy));
    //top back left
    ctx.lineTo(offsetx + d  - d * Math.cos(degx), offsety  - d * Math.sin(degy));
    //top front left
    ctx.lineTo(offsetx, offsety);
    ctx.fill();
    ctx.closePath();

    //backface background-color
    ctx.fillStyle = "#eee";
    ctx.beginPath();
    //bottom back left
    ctx.moveTo(offsetx + d  - d * Math.cos(degx), offsety + d  - d * Math.sin(degy));
    //top back left
    ctx.lineTo(offsetx + d  - d * Math.cos(degx), offsety  - d * Math.sin(degy));
    //top back right
    ctx.lineTo(offsetx + 2 * d  - d * Math.cos(degx), offsety  - d * Math.sin(degy));
    //bottom back right
    ctx.lineTo(offsetx + 2 * d  - d * Math.cos(degx), offsety + d  - d * Math.sin(degy));    
    ctx.fill();
    ctx.closePath();

    //Generating the orthagonal lines for reading the graph --------------------------------->

    lineincr = d / 6;
    for(i = 0; i < 7; i++){
        if(i % 2 == 0){
            ctx.strokeStyle = "#000";
        }
        else{
            ctx.strokeStyle = "#ccc";
        }
        ctx.beginPath();
        ctx.moveTo(offsetx + i * lineincr - (i * lineincr * Math.cos(degx)), offsety + d -  i * lineincr * Math.sin(degy));
        ctx.lineTo((offsetx + i * lineincr - (i * lineincr * Math.cos(degx))), offsety -  i * lineincr * Math.sin(degy));
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.moveTo(offsetx + i * lineincr - (i * lineincr * Math.cos(degx)), offsety + d -  i * lineincr * Math.sin(degy));
        ctx.lineTo(offsetx + i * lineincr - (i * lineincr * Math.cos(degx)) + d, (offsety + d - i * lineincr * Math.sin(degy)) + (200 * Math.sin(degy - degy)));
        ctx.stroke();
        ctx.closePath();
    }

    //Back Connectors --------------------------------------------------------->

    //bottom left connector
    ctx.strokeStyle = "#000";
    ctx.beginPath();
    ctx.moveTo(offsetx, offsety + d);
    ctx.lineTo(offsetx + d  - d * Math.cos(degx), offsety + d  - d * Math.sin(degy));
    ctx.stroke();   
    ctx.closePath(); 

    //bottom right connector
    ctx.strokeStyle = "#000";
    ctx.beginPath();
    ctx.moveTo(offsetx + d, offsety + d);
    ctx.lineTo(offsetx + 2 * d  - d * Math.cos(degx), offsety + d  - d * Math.sin(degy));
    ctx.stroke();   
    ctx.closePath(); 

    //left top connector
    ctx.strokeStyle = "#000";
    ctx.beginPath();
    ctx.moveTo(offsetx, offsety);
    ctx.lineTo(offsetx + d  - d * Math.cos(degx), offsety  - d * Math.sin(degy));
    ctx.stroke();   
    ctx.closePath(); 

    //right back pillar
    ctx.strokeStyle = "#000";
    ctx.beginPath();
    ctx.moveTo(offsetx + 2 * d - d * Math.cos(degx), offsety - d * Math.sin(degy));
    ctx.lineTo(offsetx + 2 * d  - d * Math.cos(degx), offsety + d  - d * Math.sin(degy));
    ctx.stroke();   
    ctx.closePath(); 

    //back top cross
    ctx.strokeStyle = "#000";
    ctx.beginPath();
    ctx.moveTo(offsetx + 2 * d - d * Math.cos(degx), offsety - d * Math.sin(degy));
    ctx.lineTo(offsetx + d - d * Math.cos(degx), offsety - d * Math.sin(degy));
    ctx.stroke();   
    ctx.closePath(); 

    //Placing data on the board -------------------------------------------------------------
    if(nonzero){

        // console.log("degx: " + (degx/2)/Math.PI * 180 + " degy: " + degy/Math.PI * 180);
        for(i = 0; i < data["data"].length; i++){
            item = data["data"][i];
            x = d - ((item["data"][xaxis] - minx) * xinc) + (((item["data"][zaxis] - minz) * Math.sin(degx/2)) * zinc);
            y = ((item["data"][yaxis] - miny) * yinc) + ((item["data"][zaxis] - minz) * Math.sin(degy/2) * zinc);
            c = item["g"];
            if(item["g"] == -1){
                item["c"] = "#000000";
            }
            else {
                item["c"] = colors[item["g"]];
            }
            ctx.fillStyle = item["c"];
            ctx.beginPath();
            if(item["data"][zaxis] == 0){
                ctx.arc(offsetx + x, offsety + d - y, radius, 0, 2 * Math.PI);
            }
            else {
                ctx.arc(offsetx + x, offsety + d - y, Math.ceil(radius * (1 - item["data"][zaxis])), 0, 2 * Math.PI);
            }
            ctx.fill();   
            ctx.closePath(); 
        }
    }

    //front top cross
    ctx.strokeStyle = "#333";
    ctx.beginPath();
    ctx.moveTo(offsetx, offsety);
    ctx.lineTo(offsetx + d, offsety);
    ctx.stroke();   
    ctx.closePath(); 

    //right front pillar
    ctx.strokeStyle = "#333";
    ctx.beginPath();
    ctx.moveTo(offsetx + d, offsety + d);
    ctx.lineTo(offsetx + d, offsety);
    ctx.stroke();   
    ctx.closePath(); 

    //right top connector
    ctx.strokeStyle = "#333";
    ctx.beginPath();
    ctx.moveTo(offsetx + d, offsety);
    ctx.lineTo(offsetx + 2 * d  - d * Math.cos(degx), offsety  - d * Math.sin(degy));
    ctx.stroke();   
    ctx.closePath(); 
}

//width must be greater than or equal to height of elemnt
//takes the dataset. Which contains a .set selector for array of data.
//Donotuse defines the columns not to be graphed, there needs to be a color and group column
$.fn.graph = function(dataSet, degx, degy){
    nonzero = true;
    if(dataSet["data"].length <= 0){
        nonzero = false;
    }
    //Retrieves the axes of the graph that have highest sdev
    if(nonzero){
        axis = topThreeSdev(dataSet);
    }
    else {
        axis = [0,1,2];
    }

    //Sorting data by z axis
    // dataSet.set.sort(function(a, b){return (a[axis[0]] < b[axis[0]]) ? 1 : -1;});


    canvas = this[0];
    ctx = setupCanvas(canvas);

    //variable delcarations
    d = ctx.canvas.height;

    //Size of canvas
    offsetx = 0.1 * d;
    offsety = 0.3 * d;
    d *= 0.5;
    groupCount = 0;
    if(nonzero){
        for(i = 0; i < dataSet["data"].length; i++){
            if(dataSet["data"][i]["g"] > groupCount)
                groupCount = dataSet["data"][i]["g"];
        }
        //Retrieve bufferzones from the data
        colors = new Array(groupCount + 1);
        for(i = 0; i < colors.length; i++){
            colors[i] = getRandomColor();
        }
    }
    else {
        colors = [];
    }
    drawGraph(canvas, ctx, d, offsetx, offsety, dataSet, degx, degy, axis[2], axis[1], axis[0], groupCount, colors, nonzero);


    /** All of the following is for the demo not final use */
    /**
    document.onmousemove = function(event){
        mousex = event.clientX;
        mousey = event.clientY;
    }
    var inter;
    var mdown = false;
    $("body").on("mousedown", function(event){
        if(event.target.id == "graph" ){
            mdown = true;
        }
        if(mdown){
            inter = setInterval(function(){
                x = d - mousex;
                y = d - mousey + offsety;
                if(y > d){
                    y = d;
                }
                if(x < -d){
                    x = -d ;
                }
                if(x > d){
                    x = d;
                }
                if(d < 0){
                    d = 0;
                }
                if(x <= d && x >= -d && y >= 0 &&  y <= d){
                    hyp = Math.sqrt(Math.pow(x,2) + Math.pow(y,2));
                    degy = Math.asin(y/d);
                    degx = Math.acos(x/d);
                    drawGraph(canvas, ctx, d, offsetx, offsety, dataSet, degx, degy, axis[2], axis[1], axis[0], groupCount, colors);
                }
            }, 100);
        }
    });
    $("body").on("mouseup", function(){
        clearInterval(inter);
    });
    **/
    /** This is the end of the demo code */
}

//Element identifier is the string that would go into the jquery selector
function createGraph(elementIdentifier, code){
    $.ajax({
        type: "POST",
        url: "../Ajax/checkCode.php",
        data: {code: code},
        success: function(msg2){
            if(msg2 == '1'){
                runAlgo(code, 1);
                $.ajax({
                    type: "POST",
                    url: "../Ajax/ajaxGraphGetData.php",
                    data: {code: code},
                    success: function(msg){
                        $(elementIdentifier).graph(JSON.parse(msg), Math.PI/4, Math.PI/8);
                    }
                });
            }
            else{
                $.ajax({
                    type: "POST",
                    url: "../Ajax/ajaxGraphGetData.php",
                    data: {code: code},
                    success: function(msg){
                       $(elementIdentifier).graph(JSON.parse(msg), Math.PI/4, Math.PI/8);
                    }
                });
            }
     
        }
    });
}

window.onload = function() {
  createGraph("#graph", "abcdef");
}

