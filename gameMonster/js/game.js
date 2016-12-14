var _canvas;
var _context;
var _canvas2;
var _context2;
var _ball, _ball2, ball3, ball4, ball5, ball6;
var __reqAnimation;
var __cAnimation;
var img;
var img2;
var btnboom;
var btnpause;
var btnplay;
var btnrs;
var checklife = new Array;
checklife[0]="";
var player = {
	life: 5,
	score: 0,
	level: 1,
	pause: false
};
var balldie = {
	x: "",
	Y: ""
};
function Ball(mapWidth, mapHeight, lvl){
	this.mapWidth = mapWidth;
	this.mapHeight = mapHeight;
	this.iwidth = 100;
	this.iheight = 70;
	this.speedX = Math.floor(Math.random() * (lvl+1)) +lvl;
	this.speedY = Math.floor(Math.random() * (lvl+2)) +lvl;
	this.cx = Math.floor(Math.random() * 300) /*+ this.radius*/;
	this.cy = Math.floor(Math.random() * 2)/* + this.radius*/;
	miss = false;
	die = false;
}


Ball.prototype.draw = function(context){
	context.beginPath();
	context.fillStyle = "red";
	//context.arc(this.cx,this.cy,this.radius,0,Math.PI*2,true);
	//context.strokeRect(this.cx-this.radius,this.cy-this.radius,31,30)
	context.closePath();
	context.fill();
	context.drawImage(img,this.cx,this.cy, this.iwidth, this.iheight);
}
Ball.prototype.move = function(){
	this.cx += this.speedX;
	this.cy += this.speedY;
	this.left = this.cx /*- this.radius*/;
	this.top = this.cy /*- this.radius*/;
	this.right = this.cx + this.iwidth;
	this.bottom = this.cy + this.iheight;
}
Ball.prototype.checkCollision = function() {
	if(this.left <= 0 || this.right >= this.mapWidth) this.speedX = - this.speedX;
	if(this.top <= 0 || this.bottom >= this.mapHeight) this.speedY = - this.speedY;
}

function draw(){
	_context.clearRect(0,0,_canvas.width,_canvas.height);
	drawballdie(balldie.x, balldie.y);
	_ball.draw(_context);
	_ball2.draw(_context);
	_ball3.draw(_context);
	_ball4.draw(_context);
	_ball5.draw(_context);
	_ball6.draw(_context);
	
	//_reqAnimation(draw);
}
function killball(ball, mousepos){
	if(ball.cx < mousepos.x && mousepos.x < ball.cx+100 && ball.cy< mousepos.y && mousepos.y < ball.cy+70 ){
		//delete ball.prototype.draw;
		balldie.x=ball.cx;
		balldie.y=ball.cy;
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
	//Balldie();

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
	if(player.pause == false){
		_context2.drawImage(btnpause,80,44, 40, 40);	
	}else{
		_context2.drawImage(btnplay,80,44, 40, 40);
	}
    
    _context2.drawImage(btnboom,130,44, 40, 40);
    _context2.drawImage(btnrs,170,44, 40, 40);
}
function drawballdie(x, y){
	  _context.drawImage(img2, x, y, 100, 70);
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
	if(player.score<=50){
		player.level = 1;
	}
	if(player.score>50 && player.score<=100){
		player.level = 2;
	}
	if(player.score>100 && player.score<=200){
		player.level = 3;
	}
	if(player.score>200 && player.score<=300){
		player.level = 4;
	}
	if(player.score>300 && player.score<=400){
		player.level = 5;
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
function clickbtnboom(mousepos){
	if(130 < mousepos.x && mousepos.x <165  && -62< mousepos.y && mousepos.y < -31 ){
		//delete ball.prototype.draw;
		uplevel();
		player.score += 30;
		save(player.score, player.level, player.life);
		createBall();
	}
	//}
}
function clickbtnrs(mousepos){
	if(170 < mousepos.x && mousepos.x <195 && -62< mousepos.y && mousepos.y < -31 ){
		//delete ball.prototype.draw;
		player.life = 5;
		player.score = 0;
		player.level = 1;
		sessionStorage.clear();
		createBall();
	}
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
function save(score, lvl, life){
	sessionStorage.myScore=score;
	sessionStorage.myLevel=lvl;
	sessionStorage.myLife=life;
}
function loadsave(){
	if(sessionStorage.myScore == null && sessionStorage.myLevel == null && sessionStorage.myLife == null)
	{
		player.score = 0;
		player.level = 1;
		player.life = 5;
	}else{
		player.score = parseInt(sessionStorage.myScore);
		player.level = parseInt(sessionStorage.myLevel);
		player.life = parseInt(sessionStorage.myLife);
	}
	createBall();
	
}
window.onload = function() {
	_canvas = document.getElementById("canvas");
	_context = _canvas.getContext("2d");
	_canvas2 = document.getElementById("menuplayer");
	_context2 = _canvas2.getContext("2d");

	img = document.getElementById("img");
	img2 = document.getElementById("img2");
	btnplay = document.getElementById("btnplay");
	btnboom = document.getElementById("btnboom");
	btnpause = document.getElementById("btnpause");
	btnrs = document.getElementById("btnrs");
	loadsave();

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
       		save(player.score, player.level, player.life);
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
	_canvas2.addEventListener('click', function(evt) {
        var mousePos = getMousePos(_canvas, evt);
       	clickbtnboom(mousePos);
       	
    }, false);

    _canvas2.addEventListener('click', function(evt) {
        var mousePos = getMousePos(_canvas, evt);
       	clickbtnrs(mousePos);      	
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