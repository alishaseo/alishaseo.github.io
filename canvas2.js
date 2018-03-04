var canvas;
var ctx;
window.onload = init;

function init() {
    canvas = document.getElementById("my-canvas");
    ctx = canvas.getContext("2d");
    drawBody();
    drawFace();
    drawEye();
    drawBall();
    drawBotten();
    drawBlueball();
    drawMouth();
    drawYellow();
    drawYellow2();
    drawRed();
    drawSemo()
}
function drawBody(){
    ctx.beginPath();
    ctx.fillStyle="#56c6c1"
    ctx.moveTo(114,68);
    ctx.lineTo(373,68);
    ctx.lineTo(378,429);
    ctx.lineTo(378,429);
    ctx.lineTo(111,429);
    ctx.fill();
}
function drawFace(){
    ctx.beginPath();
    ctx.fillStyle="#c1ecdb"
    ctx.moveTo(164,106);
    ctx.lineTo(333,106);
    ctx.lineTo(333,247);
    ctx.lineTo(159,247);
    ctx.lineTo(164,247)
    ctx.fill();
}

function drawEye(){
    ctx.beginPath();
    ctx.fillStyle="black"
    ctx.arc(203,148,7,203,148,2*Math.PI)
    ctx.fill();
    
}
function drawBall(){
    ctx.beginPath();
    ctx.fillStyle="black"
    ctx.arc(295,145,7,295,145,2*Math.PI)
    ctx.fill();
}
function drawBotten(){
    ctx.beginPath();
    ctx.fillStyle="DarkGreen"
    ctx.moveTo(158,279);
    ctx.lineTo(234,279);
    ctx.lineTo(234,300);
    ctx.lineTo(154,300);
    ctx.lineTo(158,300);
    ctx.fill();
}
function drawBlueball(){
    ctx.beginPath();
    ctx.fillStyle="Blue"
    ctx.arc(316,284,20,316,284,2*Math.PI)
    ctx.fill();
}
function drawMouth(){
    ctx.beginPath();
    ctx.strokeStyle="black"
    ctx.lineWidth="5"
    ctx.arc(250,152,10,0,Math.PI)
    ctx.stroke();

}
function drawYellow(){
    ctx.beginPath();
    ctx.fillStyle="yellow"
    ctx.moveTo(155,330);
    ctx.lineTo(200,330);
    ctx.lineTo(200,343);
    ctx.lineTo(155,343);
    ctx.lineTo(155,330)
    ctx.fill();

}
function drawYellow2(){
    ctx.beginPath();
    ctx.fillStyle="yellow"
    ctx.moveTo(170,318);
    ctx.lineTo(185,318);
    ctx.lineTo(185,360);
    ctx.lineTo(170,360);
    ctx.lineTo(170,318)
    ctx.fill();
}
function drawRed(){
    ctx.beginPath();
    ctx.fillStyle="red"
    ctx.arc(320,350,20,0,2*Math.PI)
    ctx.fill();
}
function drawSemo(){
    ctx.fillStyle="#1c467e"
    ctx.beginPath();
    ctx.moveTo(242,368);
    ctx.lineTo(252,385);
    ctx.lineTo(223,385);
    ctx.fill();
}
