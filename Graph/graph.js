var data = {
    "minx": 0,
    "maxx": 10,
    "miny": 0,
    "maxy": 8,
    "minz": 0,
    "maxz": 8,
    "gcount": 4,
	"set": [
        {
            "x": 5,
            "y": 0,
            "z": 0,
            "g": 2,
            "c":0
        },
        {
		    "x": 5,
            "y": 2,
            "z": 8,
            "g": 3,
            "c":0
        },
        {
		    "x": 5,
            "y": 2,
            "z": 3,
            "g": 1,
            "c":0
        },
        {
		    "x": 5,
            "y": 5,
            "z": 3,
            "g": 4,
            "c":0
        },
        {
		    "x": 0,
            "y": 3,
            "z": 2,
            "g": 2,
            "c":0
        },
        {
		    "x": 10,
            "y": 0,
            "z": 1,
            "g": 1,
            "c":0
        },
        {
		    "x": 1,
		    "y": 2,
            "z": 9,
            "g": 2,
            "c":0
        },
        {
		    "x": 1,
            "y": 3,
            "z": 7,
            "g": 1,
            "c":0          
        },
        {
		    "x": 4,
		    "y": 8,
            "z": 5,
            "g": 1,
            "c":0
        }
    ]
}

function getRandomColor(){
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
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
function topThreeSdev(data, donotuse){
    variances = [];
    for(key in data.set[0]){
        c = true;
        for(k = 0; k < donotuse.length; k++)
            if(key == donotuse[k])
                c = false;
        if(c)
            variances.push([key,sdev(data, key)]);
    }
    //Sorting variances largest to smallest
    variances.sort(function(a,b){return (a[1] < b[1]) ? 1 : -1;});
    //Returning the key for those variances
    return [variances[0][0],variances[1][0],variances[2][0]];
}

//Given a dataset and a column name this will calculate the sdev for the column
function sdev(data, colName){
    //Calculating the mean
    total = 0;
    for(i = 0; i < data.set.length; i++)
        total += data.set[i][colName];
    mean = total/data.set.length;
    //Calculating the sum of variances
    total = 0;
    for(i = 0; i < data.set.length; i++)
        total += Math.pow(data.set[i][colName] - mean, 2);
    //Calculating sdev from variance
    return Math.sqrt(total/data.set.length);
}

//Returns the minimum and maximum values for a given column
function minmax(data, key){
    min = Number.MAX_VALUE;
    max = Number.MIN_VALUE;
    for(i = 0; i < data.set.length; i++){
        if(data.set[i][key] < min)
            min = data.set[i][key];
        if(data.set[i][key] > max)
            max = data.set[i][key];
    }
    return[min, max];
}

//Draws the graph aka does all the graphics
//Width and height should be the same
function drawGraph(canvas, ctx, d, offsetx, offsety, dataSet, degx, degy, xaxis, yaxis, zaxis, group, color){
    
    //Clear any previous content in canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);


    temp = minmax(data, xaxis);
    minx = temp[0] - 1;
    maxx = temp[1] + 1;
    temp = minmax(data, yaxis);
    miny = temp[0] - 1;
    maxy = temp[1] + 1;
    temp = minmax(data, zaxis);
    minz = temp[0] - 1;
    maxz = temp[1] + 1;
    //Retrieve bufferzones from the data


    //Getting increments which represent the size of one unit relative to the size of the canvas
    xinc = Math.floor(d / (maxx - minx + 1));
    yinc = Math.floor(d / (maxy - miny + 1));
    zinc = Math.floor(Math.sqrt(Math.pow((d * Math.cos(degx)),2) + Math.pow(d * Math.sin(degy),2)) / (maxz - minz + 1));
    radius = Math.min(yinc, xinc);

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

    //Placing data on the board -------------------------------------------------------------->
    groupCount = dataSet.gcount;
    colors = new Array(groupCount);

    for(i = 0; i < groupCount; i++){
        colors[i] = getRandomColor();
    }

    // console.log("degx: " + (degx/2)/Math.PI * 180 + " degy: " + degy/Math.PI * 180);
    for(i = 0; i < dataSet.set.length; i++){
        item = dataSet.set[i];
        x = d - ((item[xaxis] - minx) * xinc) + (((item[zaxis] - minz) * Math.sin(degx/2)) * zinc);
        y = ((item[yaxis] - miny) * yinc) + ((item[zaxis] - minz) * Math.sin(degy) * zinc);
        c = item[group] - 1;
        if(item[color] == 0){
            item[color] = colors[c];
        }
        ctx.fillStyle = item[color];
        ctx.beginPath();
        if(item[zaxis] == 0){
            ctx.arc(offsetx + x, offsety + d - y, radius, 0, 2 * Math.PI);
        }
        else {
            ctx.arc(offsetx + x, offsety + d - y, Math.ceil(radius/Math.sqrt(item[zaxis])), 0, 2 * Math.PI);
        }
        ctx.fill();   
        ctx.closePath(); 
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
$.fn.graph = function(dataSet, donotuse, color, group, degx, degy){

    //Retrieves the axes of the graph that have highest sdev
    axis = topThreeSdev(dataSet, donotuse);

    //Sorting data by z axis
    dataSet.set.sort(function(a, b){return (a[axis[0]] < b[axis[0]]) ? 1 : -1;});


    canvas = this[0];
    ctx = setupCanvas(canvas);

    //variable delcarations
    d = ctx.canvas.height;

    //Size of canvas
    offsetx = 0.25 * d;
    offsety = 0.5 * d;
    d *= 0.5;

    drawGraph(canvas, ctx, d, offsetx, offsety, dataSet, degx, degy, axis[2], axis[1], axis[0], "g", "c");


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
                    drawGraph(canvas, ctx, d, offsetx, offsety, dataSet, degx, degy, axis[2], axis[1], axis[0], "g", "c");
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

window.onload = function() {
    $("#graph").graph(data, ["c", "g"], "c", "g", Math.PI/4, Math.PI/8);
}

