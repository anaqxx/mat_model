
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = 0;
var y = 0;
var vx = -30;
var vy = 20;
var r = 180;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x+600/2, y+600/2, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}

function drawCircle(){
	ctx.beginPath();
    ctx.arc(300, 300, r, 0, Math.PI*2);
    ctx.stroke();
}

function new_coor(){
	var dt=0.05;
    var g=9.8;
   

    x += vx * dt;
    y += vy * dt;


    vy += g * dt;

    r1 = Math.sqrt(Math.pow(x,2) + Math.pow(y,2));
    if (r1 >= r - ballRadius){
        sin = x / r;
        cos = Math.sqrt(1 - Math.pow(sin,2));
        var vx1 = vx * Math.pow(cos,2) - vx * Math.pow(sin,2) + vy * 2 * sin * cos;
        var vy1 = vx * 2 * sin * cos + vy * Math.pow(sin,2) - vy * Math.pow(cos,2);
        vx = -vx1;
        vy = vy1;}
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle();
    drawBall();
    console.log(x,y);
    new_coor();
    console.log(x,y);
}

setInterval(draw, 10);
