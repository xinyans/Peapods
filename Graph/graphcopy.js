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

function minmax(data, key){
    min = Number.MAX_VALUE;
    max = Number.MIN_VALUE;
    for(i = 0; i < data.set.length; i++){
        if(data.set[i][key] < min){
            min = data.set[i][key];
        }
        if(data.set[i][key] > max){
            max = data.set[i][key];
        }
    }
    return[min, max];
}

function drawGraph(canvas, ctx, w, h, offsetx, offsety, dataSet, degx, degy, xaxis, yaxis, zaxis, group, color){
    
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
    xinc = Math.floor(w / (maxx - minx + 1));
    yinc = Math.floor(h / (maxy - miny + 1));
    zinc = Math.floor(Math.sqrt(Math.pow((w * Math.cos(degx)),2) + Math.pow(h * Math.sin(degy),2)) / (maxz - minz + 1));
    radius = Math.min(yinc, xinc);

    //Setting the background colors of sections ----------->

    //this is the bottom background color
    ctx.fillStyle = "#ded";
    ctx.beginPath();
    //bottom left
    ctx.moveTo(offsetx, offsety + h);
    //bottom back left
    ctx.lineTo(offsetx + w  - w * Math.cos(degx), offsety + h  - h * Math.sin(degy));
    //bottom back right
    ctx.lineTo(offsetx + 2 * w  - w * Math.cos(degx), offsety + h  - h * Math.sin(degy));
    //bottom front right
    ctx.lineTo(offsetx + w, offsety + h);
    ctx.fill();
    ctx.closePath();

    //this is the left background color
    ctx.fillStyle = "#ded";
    ctx.beginPath();
    //bottom left
    ctx.moveTo(offsetx, offsety + h);
    //bottom back left
    ctx.lineTo(offsetx + w  - w * Math.cos(degx), offsety + h  - h * Math.sin(degy));
    //top back left
    ctx.lineTo(offsetx + w  - w * Math.cos(degx), offsety  - h * Math.sin(degy));
    //top front left
    ctx.lineTo(offsetx, offsety);
    ctx.fill();
    ctx.closePath();

    //backface background-color
    ctx.fillStyle = "#eee";
    ctx.beginPath();
    //bottom back left
    ctx.moveTo(offsetx + w  - w * Math.cos(degx), offsety + h  - h * Math.sin(degy));
    //top back left
    ctx.lineTo(offsetx + w  - w * Math.cos(degx), offsety  - h * Math.sin(degy));
    //top back right
    ctx.lineTo(offsetx + 2 * w  - w * Math.cos(degx), offsety  - h * Math.sin(degy));
    //bottom back right
    ctx.lineTo(offsetx + 2 * w  - w * Math.cos(degx), offsety + h  - h * Math.sin(degy));    
    ctx.fill();
    ctx.closePath();

    //Generating the orthagonal lines for reading the graph --------------------------------->

    lineincr = w / 6;
    for(i = 0; i < 7; i++){
        if(i % 2 == 0){
            ctx.strokeStyle = "#000";
        }
        else{
            ctx.strokeStyle = "#ccc";
        }
        ctx.beginPath();
        ctx.moveTo(offsetx + i * lineincr - (i * lineincr * Math.cos(degx)), offsety + h -  i * lineincr * Math.sin(degy));
        ctx.lineTo((offsetx + i * lineincr - (i * lineincr * Math.cos(degx))), offsety -  i * lineincr * Math.sin(degy));
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.moveTo(offsetx + i * lineincr - (i * lineincr * Math.cos(degx)), offsety + h -  i * lineincr * Math.sin(degy));
        ctx.lineTo(offsetx + i * lineincr - (i * lineincr * Math.cos(degx)) + w, (offsety + h - i * lineincr * Math.sin(degy)) + (200 * Math.sin(degy - degy)));
        ctx.stroke();
        ctx.closePath();
    }

    //Connectors --------------------------------------------------------->

    //bottom left connector
    ctx.strokeStyle = "#000";
    ctx.beginPath();
    ctx.moveTo(offsetx, offsety + h);
    ctx.lineTo(offsetx + w  - w * Math.cos(degx), offsety + h  - h * Math.sin(degy));
    ctx.stroke();   
    ctx.closePath(); 

    //bottom right connector
    ctx.strokeStyle = "#000";
    ctx.beginPath();
    ctx.moveTo(offsetx + w, offsety + h);
    ctx.lineTo(offsetx + 2 * w  - w * Math.cos(degx), offsety + h  - h * Math.sin(degy));
    ctx.stroke();   
    ctx.closePath(); 

    //left top connector
    ctx.strokeStyle = "#000";
    ctx.beginPath();
    ctx.moveTo(offsetx, offsety);
    ctx.lineTo(offsetx + w  - w * Math.cos(degx), offsety  - h * Math.sin(degy));
    ctx.stroke();   
    ctx.closePath(); 

    //right top connector
    ctx.strokeStyle = "#333";
    ctx.beginPath();
    ctx.moveTo(offsetx + w, offsety);
    ctx.lineTo(offsetx + 2 * w  - w * Math.cos(degx), offsety  - h * Math.sin(degy));
    ctx.stroke();   
    ctx.closePath(); 

    //right back pillar
    ctx.strokeStyle = "#000";
    ctx.beginPath();
    ctx.moveTo(offsetx + 2 * w - w * Math.cos(degx), offsety - h * Math.sin(degy));
    ctx.lineTo(offsetx + 2 * w  - w * Math.cos(degx), offsety + h  - h * Math.sin(degy));
    ctx.stroke();   
    ctx.closePath(); 

    //right front pillar
    ctx.strokeStyle = "#333";
    ctx.beginPath();
    ctx.moveTo(offsetx + w, offsety + h);
    ctx.lineTo(offsetx + w, offsety);
    ctx.stroke();   
    ctx.closePath(); 

    //back top cross
    ctx.strokeStyle = "#000";
    ctx.beginPath();
    ctx.moveTo(offsetx + 2 * w - w * Math.cos(degx), offsety - h * Math.sin(degy));
    ctx.lineTo(offsetx + w - w * Math.cos(degx), offsety - h * Math.sin(degy));
    ctx.stroke();   
    ctx.closePath(); 

    //front top cross
    ctx.strokeStyle = "#333";
    ctx.beginPath();
    ctx.moveTo(offsetx, offsety);
    ctx.lineTo(offsetx + w, offsety);
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
        x = w - ((item[xaxis] - minx) * xinc) + (((item[zaxis] - minz) * Math.sin(degx/2)) * zinc);
        y = ((item[yaxis] - miny) * yinc) + ((item[zaxis] - minz) * Math.sin(degy) * zinc);
        c = item[group] - 1;
        if(item[color] == 0){
            item[color] = colors[c];
        }
        ctx.fillStyle = item[color];
        ctx.beginPath();
        if(item[zaxis] == 0){
            ctx.arc(offsetx + x, offsety + h - y, radius, 0, 2 * Math.PI);
        }
        else {
            ctx.arc(offsetx + x, offsety + h - y, Math.ceil(radius/Math.sqrt(item[zaxis])), 0, 2 * Math.PI);
        }
        ctx.fill();   
        ctx.closePath(); 
    }
}

function graph(){
    dataSet = data;
    dataSet.set.sort(function(a, b){
        if(a.z < b.z){
            return 1;
        }
        else {
            return -1;
        }
    });

    axis = topThreeSdev(dataSet, ["c", "g"]);

    degx = Math.PI/1.5 * 1;
    degy = Math.PI/50 * 1;
    canvas = document.getElementById("graph");
    ctx = setupCanvas(canvas);

    offsetx = 0;
    offsety = 0;

    //variable delcarations
    w = ctx.canvas.width;
    h = ctx.canvas.height;

    //Size of canvas
    if(w < h){
        offsety = (h - w) / 2;
        h = w;
    }
    else {
        offsetx = 0;
        w = h;
    }
    offsetx += 0.25 * w;
    offsety += 0.5 * h;
    w *= 0.5;
    h *= 0.5;
    this.drawGraph(canvas, ctx, w, h, offsetx, offsety, dataSet, degx, degy, axis[2], axis[1], axis[0], "g", "c");
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
                x = w - mousex;
                y = h - mousey + offsety;
                if(y > h){
                    y = h;
                }
                if(x < -w){
                    x = -w ;
                }
                if(x > w){
                    x = w;
                }
                if(y < 0){
                    y = 0;
                }
                if(x <= w && x >= -w && y >= 0 &&  y <= h){
                    hyp = Math.sqrt(Math.pow(x,2) + Math.pow(y,2));
                    degy = Math.asin(y/h);
                    degx = Math.acos(x/h);
                    drawGraph(canvas, ctx, w, h, offsetx, offsety, dataSet, degx, degy, axis[2], axis[1], axis[0], "g", "c");
                }
            }, 100);
        }
        return false;
    });
    $("body").on("mouseup", function(){
        
        clearInterval(inter);
        return false;
    });
}

window.onload = function() {
    this.graph();
    //this.console.log(this.determinant(tmatrix));
}

function topThreeSdev(data, donotuse){
    variances = [];
    for(key in data.set[0]){
        c = true;
        for(k = 0; k < donotuse.length; k++){
            if(key == donotuse[k]){
                c = false;
            }
        }
        if(c){
            variances.push([key,sdev(data, key)]);
        }
    }
    variances.sort(function(a,b){
        if(a[1] < b[1]){
            return 1;
        }
        else {
            return -1;
        }
    });
    return [variances[0][0],variances[1][0],variances[2][0]];
}

function sdev(data, colName){
    total = 0;
    for(i = 0; i < data.set.length; i++){
        total += data.set[i][colName];
    }
    mean = total/data.set.length;

    total = 0;
    for(i = 0; i < data.set.length; i++){
        total += Math.pow(data.set[i][colName] - mean,2);
    }
    return Math.sqrt(total/data.set.length);
}


/**
//Work on conducting pca

function covariance(data, indA, indB){
    //returns covariance of the varables repreented by these indeces
}

function covarianceMatrix(data){
    //returns the covariance matrix
}

function makeMatrix(i, matrix){
    mat = Array.from(matrix);
    console.log("makematrix: " + mat);
    res = [];
    for(l = 0; l < mat.length - 1; l++){
        res.push([]);
    }
    for(row = 1; row < mat.length; row++){
        for(col = 0; col < mat.length; col++){
            if(col != i){
                res[row - 1].push(mat[row][col]);
            }
        }
    }
    console.log("makematrix: " + res);
    return res;
}

var tmatrix =    [[1,2,3,0],
                [5,8,7,2],
                [3,2,1,8],
                [1,2,3,4]]

function determinant(matrixA){
    matrix = Array.from(matrixA);
    console.log("d");
    console.log(matrix);
    //returns the determinant
    if(matrix.length == 2){
        result = matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
        console.log("d: " + result);
        return result;
    }
    else {
        result = 0;
        flip = 1;
        for(i = 0; i < matrix.length; i++){
            result += flip * determinant(makeMatrix(i, matrix));
            flip *= -1;
        }
        console.log("d: " + result);
        return result;   
    }
}

function eigenDecomposition(data){
    //conducts eigenDecomposition on data
    //Finds eigenvalues and eigenvectors
    //Returns them as array
}

function dataScale(data, eigenvect, eigenval){
    //scales the data on the new basis
}
*/