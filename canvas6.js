var canvas;
var ctx;
window.onload = init;

function init() {
    canvas = document.getElementById("my-canvas");
    ctx = canvas.getContext("2d");
    ctx.strokestyle="black"
    ctx.lineWidth=6;
    
    ctx.strokeRect(0,0,canvas.width,canvas.height);
    drawC(560,240,38);
    drawC(440,240,38);
    drawC(650,450,14);
    drawC(650,500,14);
    drawC(650,550,14);
    drawC(650,600,14);
    drawC(650,650,14);
    drawC(650,700,14);
    drawC(650,750,14);
    drawC(650,800,14);

    ctx.fillRect;
    ctx.fillStyle="black"
    drawE(560,244,27);
    drawE(440,244,27);

    ctx.strokeRect(0,0,canvas.width,canvas.height);
    drawM(500,300,50);



    ctx.strokeRect(0,0,canvas.width,canvas.height);
    drawRectangle(300,170,400,200);
    drawRectangle(450,370,100,50);
    drawRectangle(300,420,400,400);
    drawRectangle(350,820,100,200);
    drawRectangle(550,820,100,200);
    drawRectangle(340,540,200,250);
    drawRectangle(400,460,200,10);
    drawRectangle(400,480,200,10);
    drawRectangle(400,500,200,10);
    drawRectangle(370,560,35,35);
    drawRectangle(420,560,35,35);
    drawRectangle(470,560,35,35);
    drawRectangle(470,640,35,35);
    drawRectangle(420,640,35,35);
    drawRectangle(370,640,35,35);
    drawRectangle(470,720,35,35);
    drawRectangle(370,720,35,35);
    drawRectangle(420,720,35,35);


}
function drawC(x,y,r){
    ctx.beginPath();
    ctx.arc(x,y,r,0,2*Math.PI);
    ctx.stroke();
}

function drawE(x,y,r){
    ctx.beginPath();
    ctx.arc(x,y,r,0,2*Math.PI);
    ctx.fill();
}

function drawRectangle(x,y,w,h){
    ctx.strokeRect(x,y,w,h);
}
function drawM(x,y,r){
    ctx.beginPath();
    ctx.arc(x,y,r,0,Math.PI);
    ctx.stroke();
}