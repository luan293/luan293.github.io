var _canvas;
var _context;
var _canvas2;
var _context2;
var _ball, _ball2, ball3, ball4, ball5, ball6;
var __reqAnimation;
var __cAnimation;
var img;
var img2;
var img3;
var checklife = new Array;
checklife[0]="";
var player = {
	life: 5,
	score: 0,
	level: 1,
	pause: false
};
function Ball(mapWidth, mapHeight, lvl){
	this.mapWidth = mapWidth;
	this.mapHeight = mapHeight;
	this.radius = 30;
	this.speedX = Math.floor(Math.random() * (lvl+1)) +lvl;
	this.speedY = Math.floor(Math.random() * (lvl+2)) +lvl;
	this.cx = Math.floor(Math.random() * 300) /*+ this.radius*/;
	this.cy = Math.floor(Math.random() * 2)/* + this.radius*/;
	miss = false;
	die = false;
}
function Balldie(x, y){
	var posx=x;
	var posy=y;
}
Balldie.prototype.draw = function(context){

	context.drawImage(img3,posx, posy);
}
Balldie.prototype.move = function(){}
Balldie.prototype.checkCollision = function() {}

Ball.prototype.draw = function(context){
	context.beginPath();
	context.fillStyle = "red";
	//context.arc(this.cx,this.cy,this.radius,0,Math.PI*2,true);
	//context.strokeRect(this.cx-this.radius,this.cy-this.radius,31,30)
	context.closePath();
	context.fill();
	context.drawImage(img,this.cx,this.cy);
}
Ball.prototype.move = function(){
	this.cx += this.speedX;
	this.cy += this.speedY;
	this.left = this.cx /*- this.radius*/;
	this.top = this.cy /*- this.radius*/;
	this.right = this.cx + this.radius;
	this.bottom = this.cy + this.radius;
}
Ball.prototype.checkCollision = function() {
	if(this.left <= 0 || this.right >= this.mapWidth) this.speedX = - this.speedX;
	if(this.top <= 0 || this.bottom >= this.mapHeight) this.speedY = - this.speedY;
}

function draw(){
	_context.clearRect(0,0,_canvas.width,_canvas.height);
	_ball.draw(_context);
	_ball2.draw(_context);
	_ball3.draw(_context);
	_ball4.draw(_context);
	_ball5.draw(_context);
	_ball6.draw(_context);
	//_reqAnimation(draw);
}
function killball(ball, mousepos){
	if(ball.cx < mousepos.x && mousepos.x < ball.cx+30 && ball.cy< mousepos.y && mousepos.y < ball.cy+30 ){
		//delete ball.prototype.draw;
		player.score += 5;
		ball.miss = false;
		ball.die = true;
		return true;
	}else{
		ball.miss = true;
		ball.die =false;
		return false;
	}
	//}
	
}
function killballmb(ball, mousepos){
	if(ball.cx < mousepos.x && mousepos.x < ball.cx+40 && ball.cy< mousepos.y && mousepos.y < ball.cy+40 ){
		//delete ball.prototype.draw;
		player.score += 5;
		ball.miss = false;
		ball.die = true;
		return true;
	}else{
		ball.miss = true;
		ball.die =false;
		return false;
	}
	//}
	
}
function update(){
	_ball.move();
	_ball.checkCollision();	
	_ball2.move();
	_ball2.checkCollision();
	_ball3.move();
	_ball3.checkCollision();
	_ball4.move();
	_ball4.checkCollision();
	_ball5.move();
	_ball5.checkCollision();
	_ball6.move();
	_ball6.checkCollision();
	draw();	
	drawplayer();
	Balldie();

	if(player.pause == false){
		_reqAnimation(update);
	}else{
		return;
	}

}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
	          x: evt.clientX - rect.left,
	          y: evt.clientY - rect.top
    };
}

//////////////////////////////////////////////////////////////////////////////////////////////////

function drawpscore(){
    _context2.font = '18pt Calibri';
    _context2.fillStyle = 'black';
    _context2.fillText("Score: "+player.score, 10, 25);
}
function drawpbtn(){
    _context2.drawImage(img,80,44);
}
function drawtext(){
	    _context.font = '30pt Calibri';
    _context.fillStyle = 'black';
    _context.fillText("Thua", 150, 100);
}
function drawlife(){
    _context2.font = '18pt Calibri';
    _context2.fillStyle = 'black';
    _context2.fillText("life: "+player.life,10,55)
}
function drawlvl(){
    _context2.font = '18pt Calibri';
    _context2.fillStyle = 'black';
    _context2.fillText("level: "+player.level,10,75)
}
function checkLife(){
	if(player.life > 0){		
		if(_ball.miss == true && _ball2.miss == true && _ball3.miss == true && _ball4.miss == true && _ball5.miss == true && _ball6.miss == true){		
		player.life -= 1;	
		}else{
			
		}	
	}else{
		player.life = 5;
		player.score = 0;
		player.level = 1;
		createBall();
	}	
}
function uplevel(){
	if(player.score % 50 == 0 && player.score != 0){
		player.level += 1;
	}
	return player.level;
}
function clickbtnpause(mousepos){
	if(79 < mousepos.x && mousepos.x <112  && -62< mousepos.y && mousepos.y < -31 ){
		//delete ball.prototype.draw;
		if(player.pause == false){
			player.pause = true;				
		}else{
			player.pause = false;
		}
		return true;		
	}else{
		player.pause = false;
		return false;
	}
	//}
	
}

function drawplayer(){
	if(player.life == 0){
		drawtext();
		//console.log(player.life);
	}
		_context2.clearRect(0, 0, canvas.width, canvas.height);
	drawpbtn();
	drawpscore();
	drawlife();
	drawlvl();
	
	
	
	//_reqAnimation(drawplayer);
}
function createBall(){
	_ball = new Ball(_canvas.width,_canvas.height, player.level);
	_ball2 = new Ball(_canvas.width,_canvas.height,player.level);
	_ball3 = new Ball(_canvas.width,_canvas.height,player.level);
	_ball4 = new Ball(_canvas.width,_canvas.height,player.level);
	_ball5 = new Ball(_canvas.width,_canvas.height,player.level);
	_ball6 = new Ball(_canvas.width,_canvas.height,player.level);
}

window.onload = function() {
	_canvas = document.getElementById("canvas");
	_context = _canvas.getContext("2d");
	_canvas2 = document.getElementById("menuplayer");
	_context2 = _canvas2.getContext("2d");

	img = document.getElementById("img");
	img2 = document.getElementById("img2");
	img3 = document.getElementById("img3");
	
	createBall();

	cx = _canvas.width/2;
	cy = _canvas.height/2;
	_canvas.addEventListener('click', function(evt) {
        var mousePos = getMousePos(_canvas, evt);
        console.log(mousePos.x+" "+mousePos.y);
        if(player.pause == false){

        	if(killball(_ball, mousePos)){
        		
       			_ball = new Ball(_canvas.width,_canvas.height,player.level); 
	       	}
	       	if(killball(_ball2, mousePos)){
	       		
	       		_ball2 = new Ball(_canvas.width,_canvas.height,player.level);       	
	       	}
	       	if(killball(_ball3, mousePos)){
	       		
	       		_ball3 = new Ball(_canvas.width,_canvas.height,player.level);       	
	       	}
	       	if(killball(_ball4, mousePos)){
	       		
	       		_ball4 = new Ball(_canvas.width,_canvas.height,player.level);       	
	       	}
	       	if(killball(_ball5, mousePos)){
	       		
	       		_ball5 = new Ball(_canvas.width,_canvas.height,player.level);       	
	       	}
	       	if(killball(_ball6, mousePos)){
	       		
	       		_ball6 = new Ball(_canvas.width,_canvas.height,player.level);       	
	       	}
       		checkLife();
       		uplevel();
        }
   	}, false);
	
	_canvas2.addEventListener('click', function(evt) {
        var mousePos = getMousePos(_canvas, evt);
       	if(clickbtnpause(mousePos)){
       		_cAnimation(update());
       	}else{
       		//_reqAnimation(id);
       	}
    }, false);

	
        _canvas.addEventListener("touch", function(evt)
        {
           var mousePos = getMousePos(_canvas, evt);
           console.log(mousePos.x+" "+mousePos.y);
        if(player.pause == false){

        	if(killballmb(_ball, mousePos)){
        		
       			_ball = new Ball(_canvas.width,_canvas.height,player.level); 
	       	}
	       	if(killballmb(_ball2, mousePos)){
	       		
	       		_ball2 = new Ball(_canvas.width,_canvas.height,player.level);       	
	       	}
	       	if(killballmb(_ball3, mousePos)){
	       		
	       		_ball3 = new Ball(_canvas.width,_canvas.height,player.level);       	
	       	}
	       	if(killballmb(_ball4, mousePos)){
	       		
	       		_ball4 = new Ball(_canvas.width,_canvas.height,player.level);       	
	       	}
	       	if(killballmb(_ball5, mousePos)){
	       		
	       		_ball5 = new Ball(_canvas.width,_canvas.height,player.level);       	
	       	}
	       	if(killballmb(_ball6, mousePos)){
	       		
	       		_ball6 = new Ball(_canvas.width,_canvas.height,player.level);       	
	       	}
       		checkLife();
       		uplevel();
        } evt.preventDefault();
        }, false);

	_reqAnimation = window.requestAnimationFrame ||
					window.mozRequestAnimationFrame ||
					window.webkitRequestAnimationFrame ||
					window.msRequestAnimationFrame ||
					window.oRequestAnimationFrame ;
	_cAnimation = 	window.cancelAnimationFrame ||
					window.mozCancelAnimationFrame ||
					window.webkitCancelAnimationFrame ||
					window.msCancelAnimationFrame ||
					window.oCancelAnimationFrame ;					
	if(_reqAnimation){
		update();		
	}

	else
		alert("Your browser doesn't support requestAnimationFrame.");
};