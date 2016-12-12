var _canvas;
var _context;
var _ball;
var _ball2;
var __reqAnimation;
var img;
var img2;
function Ball(mapWidth, mapHeight){
	this.mapWidth = mapWidth;
	this.mapHeight = mapHeight;
	this.radius = 15;
	this.speedX = Math.floor(Math.random() * 3) +1;
	this.speedY = Math.floor(Math.random() * 3) +1;
	this.cx = 1 + this.radius;
	this.cy = 1 + this.radius;
}
function Balldie(){
	
}
Balldie.prototype.draw = function(context){
	context.beginPath();
	context.fillStyle = "red";
	//context.arc(this.cx,this.cy,this.radius,0,Math.PI*2,true);
	context.strokeRect(this.cx-this.radius,this.cy-this.radius,30,30)
	context.closePath();
	context.fill();
	context.drawImage(img2,this.cx-this.radius,this.cy-this.radius);
}
Balldie.prototype.move = function(){
	
}
Balldie.prototype.checkCollision = function() {
	
}

Ball.prototype.draw = function(context, img){
	context.beginPath();
	context.fillStyle = "red";
	//context.arc(this.cx,this.cy,this.radius,0,Math.PI*2,true);
	context.strokeRect(this.cx-this.radius,this.cy-this.radius,30,30)
	context.closePath();
	context.fill();
	context.drawImage(img,this.cx-this.radius,this.cy-this.radius);
}
Ball.prototype.move = function(){
	this.cx += this.speedX;
	this.cy += this.speedY;
	this.left = this.cx - this.radius;
	this.top = this.cy - this.radius;
	this.right = this.cx + this.radius;
	this.bottom = this.cy + this.radius;
	x = this.cx;
	y = this.cy;
}
Ball.prototype.checkCollision = function() {
	if(this.left <= 0 || this.right >= this.mapWidth) this.speedX = - this.speedX;
	if(this.top <= 0 || this.bottom >= this.mapHeight) this.speedY = - this.speedY;
}


function draw(){
	_context.clearRect(0,0,_canvas.width,_canvas.height);
	_ball.draw(_context,img);
	_ball2.draw(_context,img);
	//_reqAnimation(draw);
}
function killball(ball, mousepos){
	if(ball.cx-15 < mousepos.x && mousepos.x < ball.cx+15 && ball.cy-15 < mousepos.y && mousepos.y < ball.cy+15 ){
		//delete ball.prototype.draw;
		return true;
	}
	//}
	console.log(ball);
}
function update(){
	
	_ball.move();
	_ball.checkCollision();	
	_ball2.move();
	_ball2.checkCollision();
	draw();
	_reqAnimation(update);

}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
	          x: evt.clientX - rect.left,
	          y: evt.clientY - rect.top
    };
}


window.onload = function() {
	_canvas = document.getElementById("canvas");
	_context = _canvas.getContext("2d");
	//_context.fillStyle = "red";
	img = document.getElementById("img");
	img2 = document.getElementById("img2")
	_ball = new Ball(_canvas.width,_canvas.height);
	_ball2 = new Ball(_canvas.width,_canvas.height);
	cx = _canvas.width/2;
	cy = _canvas.height/2;

	_canvas.addEventListener('click', function(evt) {
        var mousePos = getMousePos(_canvas, evt);
       	if(killball(_ball, mousePos)){
       		_ball = new Balldie();
       	}
    }, false);

	_canvas.addEventListener('click', function(evt) {
        var mousePos = getMousePos(_canvas, evt);
       	if(killball(_ball2, mousePos)){
       		_ball2 = new Balldie();
       	}
    }, false);

	_reqAnimation = window.requestAnimationFrame ||
					window.mozRequestAnimationFrame ||
					window.webkitRequestAnimationFrame ||
					window.msRequestAnimationFrame ||
					window.oRequestAnimationFrame ;
	if(_reqAnimation){
		update();
		//update2();
		
	}
	else
		alert("Your browser doesn't support requestAnimationFrame.");
};