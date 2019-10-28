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
            ctx.stroke();   
            // ctx.fill();   
        }
        else {
            // ctx.stroke(); 
            ctx.fill();  
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
    path = new Uint32Array(ctx.getImageData(0, 0, w, h).data.buffer);
    // loop through each pixel. We will only store the ones with alpha = 255
    radius = 300;
    
    for(i = 0; i < path.length; i++) {
      if (path[i] & 0xff000000) {             // check alpha mask
        results.push({                            // add new ball if a solid pixel
          x: (i % w),    // use position and radius to
          y: ((i / w)|0), //  pre-calc final position and size
          r: Math.floor(radius * Math.random() + 4),
          c: getRandomColor()
        });
      }
    }
    ctx.clearRect(0,0,w,h);
    var drawn = [];    
    for(i = 0; i < 100; i++){
        pos = results[Math.floor(Math.random() * results.length)];
        ctx.fillStyle = pos.c;
        ctx.strokeStyle = pos.c;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, pos.r, 0, 2 * Math.PI);
        ctx.stroke();   
        ctx.closePath(); 
        drawn.push(pos);
    }

    drawn.sort(sortBubbles);

    setInterval(function(){
        redraw(canvas, ctx, drawn);
    }, 100);

}

window.onload = function(){
    $(document).mousemove(function(event){
       mousex = event.pageX;
       mousey = event.pageY; 
    });

    this.addLoginListeners();
    this.drawCanvas("Make Groups");
}