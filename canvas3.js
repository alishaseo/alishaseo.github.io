var canvas;
var ctx;
window.onload = init;

function init() {
    canvas = document.getElementById("my-canvas");
    ctx = canvas.getContext("2d");
    blackBox();
    redbox(50,50)
    redBox(200,0);
}

function blackBox() {
    ctx.save();
    ctx.translate(50, 50);
    ctx.fillRect(0, 0, 100, 100);
    ctx.restore();
    ctx.fillRect(0, 0, 100, 100);
}
function redBox(x, y){
ctx.save();
ctx.translate(x, y);
ctx,fillStyle="red"
ctx.fillRect(0, 0, 100, 100);
ctx.restore();
}