var canvas;
var ctx;
window.onload = init;

function init() {
    canvas = document.getElementById("my-canvas");
    ctx = canvas.getContext("2d");
    drawBlue();
    drawTuck();
    drawLeft();
    drawRight();
    drawLefteye();
    drawNose();
    drawRighteye();
    drawLeftfoot();
    drawRightfoot();
    drawLeftear();
    drawLeftpink();
}
function drawBlue(){
    ctx.beginPath();
    ctx.fillStyle="#6da3d2"
    ctx.arc(750,500,400,0,2*Math.PI)
    ctx.fill();
}

function drawTuck(){
    ctx.beginPath();
    ctx.fillStyle="#90d1e4"
    ctx.arc(750,520,400,0,Math.PI)
    ctx.fill();

}
function drawLeft(){
    ctx.beginPath();
    ctx.fillStyle="#90d1e4"
    ctx.arc(920,350,150,0,2*Math.PI)
    ctx.fill();

}
function drawRight(){
    ctx.beginPath();
    ctx.fillStyle="#90d1e4"
    ctx.arc(580,350,150,0,2*Math.PI)
    ctx.fill();
}
function drawLefteye(){
    ctx.beginPath();
    ctx.fillStyle="black"
    ctx.arc(870,370,48,0,2*Math.PI)
    ctx.fill();
}
function drawNose(){
    ctx.beginPath();
    ctx.fillStyle="#3572b5"
    ctx.arc(755,450,70,0,2*Math.PI)
    ctx.fill();
}
function drawRighteye(){
    ctx.beginPath();
    ctx.fillStyle="black"
    ctx.arc(620,370,48,0,2*Math.PI)
    ctx.fill();
}
function drawLeftfoot(){
    ctx.beginPath();
    ctx.fillStyle="#6da3d2"
    ctx.arc(940,850,80,0,2*Math.PI)
    ctx.fill();
}
function drawRightfoot(){
    ctx.beginPath();
    ctx.fillStyle="#6da3d2"
    ctx.arc(580,850,80,0,2*Math.PI)
    ctx.fill();
}
function drawLeftear(){
    ctx.fillStyle="#6da3d2"
    ctx.beginPath();
    ctx.moveTo(1100,521);
    ctx.lineTo(1200,22);
    ctx.lineTo(1350,400);
    ctx.fill();
}
function drawLeftpink(){
    ctx.fillStyle="#eaa6b9"
    ctx.beginPath();
    ctx.moveTo(1130,410);
    ctx.lineTo(1200,42);
    ctx.lineTo(1270,390);
    ctx.fill();

}




