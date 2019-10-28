/**
 * color getRandomColor()
 * 
 * Gets and returns a random hex color value
 * 
 * the returned hex value is of the following form:
 * var color{
 *  red : int,
 *  green : int,
 *  blue : int,
 *  hex : string
 * }
 * 
 * @requires none
 * @modifies none
 * @effects creates random color
 * @throws none
 * @returns random hex color
 */

 /**
function getRandomColor(){
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    r_str = r.toString(16);
    g_str = g.toString(16);
    b_str = b.toString(16);
    rgb = "#" + (r_str.length==1 ? "0"+r_str : r_str) + (g_str.length==1 ? "0"+g_str : g_str) + (b_str.length==1 ? "0"+b_str : b_str);
    return "#3581b8";
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

var mousey;
var mousex;

function redraw(canvas, ctx, drawn){
    ctx.clearRect(0,0,w,h);    
    for(l = 0; l < drawn.length; l++){
        //find if mouse is in circle
        pos = drawn[l];
        ctx.fillStyle = pos.c;
        ctx.strokeStyle = pos.c;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, pos.r, 0, 2 * Math.PI);
        if((Math.abs(mousex - $(canvas).position().left - drawn[l].x) < drawn[l].r) && (Math.abs(mousey - $(canvas).position().top)- drawn[l].y < drawn[l].r)){
            // ctx.stroke();   
            ctx.fill();   
        }
        else {
            ctx.stroke(); 
            // ctx.fill();  
        }
        ctx.closePath(); 

    }
}

function sortBubbles(a , b){
    if(a.r < b.r){
        return 1;
    }
    else {
        return -1;
    }
}

function drawCanvas(text){
    
    var canvas = document.getElementById("contentCanvas");
    var ctx = setupCanvas(canvas);
    w = ctx.canvas.width;
    h = ctx.canvas.height;
    ctx.textAlign = "center";
    ctx.font = "140px Arial";
    ctx.fillText(text.toUpperCase(), w/2, h / 2 + 50);
    results = [];
    notResults = [];
    path = new Uint32Array(ctx.getImageData(0, 0, w, h).data.buffer);
    // loop through each pixel. We will only store the ones with alpha = 255
    radius = 10;
    
    for(i = 0; i < path.length; i++) {
        if (path[i] & 0xff000000) {             // check alpha mask
            results.push({
                x: (i % w),    // use position and radius to
                y: ((i / w)|0), //  pre-calc final position and size
                r: Math.floor(0.5 * radius * Math.random() + 4),
                c: getRandomColor()
            });
        }
        else {
            notResults.push({
                x: (i % w),    // use position and radius to
                y: ((i / w)|0), //  pre-calc final position and size
                r: Math.floor(20 * radius * Math.random() + 4),
                c: getRandomColor()
            });
        }
    }
    ctx.clearRect(0,0,w,h);
    var drawn = [];    
    for(i = 0; i < 2000; i++){
        notdrawn = true;
        pos = results[Math.floor(Math.random() * results.length)];
        for(l = 0; l < drawn.length; l++){
            if((Math.abs(pos.x - drawn[l].x) < pos.r + drawn[l].r) && (Math.abs(pos.y - drawn[l].y) < pos.r + drawn[l].r)){
                notdrawn = false;
                break;
            }
        }
        if(notdrawn){
            ctx.fillStyle = pos.c;
            ctx.strokeStyle = pos.c;
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, pos.r, 0, 2 * Math.PI);
            ctx.fill();   
            ctx.closePath(); 
            drawn.push(pos);
        }
    }

    notDrawn = [];

    for(i = 0; i < 100; i++){
        notdrawn = true;
        pos = notResults[Math.floor(Math.random() * notResults.length)];
        for(l = 0; l < drawn.length; l++){
            if((Math.abs(pos.x - drawn[l].x) < pos.r + drawn[l].r + 3) && (Math.abs(pos.y - drawn[l].y) < pos.r + drawn[l].r + 3)){
                notdrawn = false;
                break;
            }
        }
        for(l = 0; l < notDrawn.length; l++){
            if((Math.abs(pos.x - notDrawn[l].x) < pos.r + notDrawn[l].r + 3) && (Math.abs(pos.y - notDrawn[l].y) < pos.r + notDrawn[l].r + 3)){
                notdrawn = false;
                break;
            }
        }
        if(notdrawn){
            ctx.fillStyle = "blue";
            ctx.strokeStyle = "blue";
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, pos.r, 0, 2 * Math.PI);
            ctx.stroke();   
            ctx.closePath(); 
            notDrawn.push(pos);
        }
    }

    drawn.sort(sortBubbles);

    // setInterval(function(){
    //     redraw(canvas, ctx, drawn);
    // }, 100);

}

window.onload = function(){
    $(document).mousemove(function(event){
       mousex = event.pageX;
       mousey = event.pageY; 
    });

    this.addLoginListeners();
    var count = 0;
    words = ["Make Groups", "Peapods", "Group Up", "Get Together", "Have Fun"];
    this.setInterval(function(){
        drawCanvas(words[count % words.length]);
        count += 1;
    },3000);
    
}

**/