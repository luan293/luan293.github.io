var count = 0;
var player = {
	life: 5,
	score: 0,
	round: 1,
	pause: false,
	miss :false
}
var monster1 = {
	iwidth : 100,
	iheight : 70,
	cx: 1,
	cy: 1,
	tox : 260,
	toy : 360,
	speed : 5000,
	die : false
};
var monster2 = {
	iwidth : 100,
	iheight : 70,
	cx: 260,
	cy: 1,
	tox : 270,
	toy : 380,
	speed : 5000,
	die : false
};
var monster3 = {
	iwidth : 100,
	iheight : 70,
	cx: 1,
	cy: 350,
	tox : 260,
	toy : 380,
	speed : 5000,
	die : false
};
var monster4 = {
	iwidth : 100,
	iheight : 70,
	cx: 260,
	cy: 350,
	tox : 260,
	toy : 380,
	speed : 5000,
	die : false
};
var monster5 = {
	iwidth : 100,
	iheight : 70,
	cx: 250,
	cy: 250,
	tox : 330,
	toy : 440,
	speed : 5000,
	die : false
};
function create() {
	$("#imgz1").css({left: monster1.cx, top: monster1.cy});
	$("#imgz2").css({left: monster2.cx, top: monster2.cy});
	$("#imgz3").css({left: monster3.cx, top: monster3.cy});
	$("#imgz4").css({left: monster4.cx, top: monster4.cy});
	$("#imgz5").css({left: monster5.cx, top: monster5.cy});
	$("#imgz1").attr("src","img/MS_Monster_King_Slime.png");
	$("#imgz2").attr("src","img/MS_Monster_King_Slime.png");
	$("#imgz3").attr("src","img/MS_Monster_King_Slime.png");	
	$("#imgz4").attr("src","img/MS_Monster_King_Slime.png");
	$("#imgz5").attr("src","img/MS_Monster_King_Slime.png");
 	update();
}
function movemob1() {
	if(monster1.die == true){ 
		$("#imgz1").attr("src","img/yTogogexc.png")
		$("#imgz1").stop(true, false);
		count++;
	}else{
		$("#imgz1").animate({left: Math.floor(Math.random() * monster1.tox), top: Math.floor(Math.random() * monster1.toy)}, monster1.speed/(player.round*0.5));
		$("#imgz1").promise().done(function() {
			$("#imgz1").animate({left: monster1.cx, top: monster1.cy}, monster1.speed/(player.round*0.5), movemob1);
		})		
	}	
}
function movemob2() {
	if(monster2.die == true){ 
		$("#imgz2").attr("src","img/yTogogexc.png")
		$("#imgz2").stop(true, false);
		count++;
	}else{
		$("#imgz2").animate({left: Math.floor(Math.random() * monster2.tox), top: Math.floor(Math.random() * monster2.toy)}, monster2.speed/(player.round*0.5));
		$("#imgz2").promise().done(function() {
			$("#imgz2").animate({left: monster2.cx, top: monster2.cy}, monster2.speed/(player.round*0.5), movemob2);
		})		
	}	
}
function movemob3() {
	if(monster3.die == true){ 
		$("#imgz3").attr("src","img/yTogogexc.png")
		$("#imgz3").stop(true, false);
		count++;
	}else{
		$("#imgz3").animate({left: Math.floor(Math.random() * monster3.tox), top: Math.floor(Math.random() * monster3.toy)}, monster3.speed/(player.round*0.5));
		$("#imgz3").promise().done(function() {
			$("#imgz3").animate({left: monster3.cx, top: monster3.cy}, monster3.speed/(player.round*0.5), movemob3);
		})		
	}	
}
function movemob4() {
	if(monster4.die == true){ 
		$("#imgz4").attr("src","img/yTogogexc.png")
		$("#imgz4").stop(true, false);
		count++;
	}else{
		$("#imgz4").animate({left: Math.floor(Math.random() * monster4.tox), top: Math.floor(Math.random() * monster4.toy)}, monster4.speed/(player.round*0.5));
		$("#imgz4").promise().done(function() {
			$("#imgz4").animate({left: monster4.cx, top: monster4.cy}, monster4.speed/(player.round*0.5), movemob4);
		})		
	}	
}
function movemob5() {
	if(monster5.die == true){ 
		$("#imgz5").attr("src","img/yTogogexc.png")
		$("#imgz5").stop(true, false);
		count++;
	}else{
		$("#imgz5").animate({left: Math.floor(Math.random() * monster5.tox), top: Math.floor(Math.random() * monster5.toy)}, monster5.speed/(player.round*0.5));
		$("#imgz5").promise().done(function() {
			$("#imgz5").animate({left: monster5.cx, top: monster5.cy}, monster5.speed/(player.round*0.5), movemob5);
		})		
	}	
}
function kill() {
	$("#imgz1").click(function() {
		monster1.die = true;
		movemob1();
		player.score += 5;
		player.miss = true;
		updateplayer();
	})
	$("#imgz2").click(function() {
		monster2.die = true;
		movemob2();
		player.miss = true;
		player.score += 5;		
		updateplayer();
	})
	$("#imgz3").click(function() {
		monster3.die = true;
		movemob3();
		player.miss = true;
		player.score += 5;		
		updateplayer();
	})
	$("#imgz4").click(function() {
		monster4.die = true;
		movemob4();
		player.miss = true;
		player.score += 5;		
		updateplayer();
	})
	$("#imgz5").click(function() {
		monster5.die = true;
		movemob5();
		player.miss = true;
		player.score += 5;		
		updateplayer();
	})
	$("#battlefield").click(function() {		
		if(player.miss == false) {
			if(player.life <= 0) {

			}else{
				player.life -= 1;
			}				
		}else{
			player.miss = false;
		}
		playerdie();
		updateplayer();
		save(player.score, player.round, player.life);
	})
}
function playerdie() {
	if(player.life <= 0){
		$("#text").css("display","block");
		$("#text").html("click restart de choi lai");
		$("#text").css("height", "400px");
	}	
}
function pauseresume() {
	$("#pause").click(function() { 
  		if(player.pause == false) {
  			$("#imgz1").stop(true, false);
			$("#imgz2").stop(true, false);
			$("#imgz3").stop(true, false);
			$("#imgz4").stop(true, false);
			$("#imgz5").stop(true, false);
			player.pause = true;
  		}else{
  			movemob1();
  			movemob2();
  			movemob3();
  			movemob4();
  			movemob5();
  			player.pause = false;
  		} 			
  	});
}
function boom() {
	$("#boom").click(function() {
		if(monster1.die != true) {
			monster1.die = true;
			movemob1();
			count++;
			player.score += 5;
		}
		if(monster2.die != true) {
			monster2.die = true;
			movemob2();
			count++;
			player.score += 5;
		}
		if(monster3.die != true) {
			monster3.die = true;
			movemob3();
			count++;
			player.score += 5;
		}
		if(monster4.die != true) {
			monster4.die = true;
			movemob4();
			count++;
			player.score += 5;
		}
		if(monster5.die != true) {
			monster5.die = true;
			movemob5();
			count++;
			player.score += 5;
		}
	save(player.score, player.round, player.life);
	setTimeout(function() {
  		updateplayer();
		}, 1000);
	});
	
}
function updateplayer() {
	upround();
	$("#score").html(player.score);
	$("#life").html(player.life);
	$("#round").html(player.round);
}
function restart() {
	sessionStorage.clear();
	player.life = 5;
	player.score = 0;
	player.miss = true;
	player.round = 1;
	count = 0;
	monster1.die = false;
	monster2.die = false;
	monster3.die = false;
	monster4.die = false;
	monster5.die = false;		
	$("#imgz1").stop(true, false);
	$("#imgz2").stop(true, false);
	$("#imgz3").stop(true, false);
	$("#imgz4").stop(true, false);
	$("#imgz5").stop(true, false);
	$("#imgz1").attr("src","img/MS_Monster_King_Slime.png");
	$("#imgz2").attr("src","img/MS_Monster_King_Slime.png");
	$("#imgz3").attr("src","img/MS_Monster_King_Slime.png");
	$("#imgz4").attr("src","img/MS_Monster_King_Slime.png");
	$("#imgz5").attr("src","img/MS_Monster_King_Slime.png");
	create();
}
function upround() {
	if(count >= 5) {
		count = 0;
		player.round += 1;
		monster1.die = false;
		monster2.die = false;
		monster3.die = false;
		monster4.die = false;
		monster5.die = false;
		$("#imgz4").stop(true, false);
		$("#imgz5").stop(true, false);
		$("#imgz1").stop(true, false);
		$("#imgz2").stop(true, false);
		$("#imgz3").stop(true, false);
		$("#imgz1").attr("src","img/MS_Monster_King_Slime.png");
		$("#imgz2").attr("src","img/MS_Monster_King_Slime.png");
		$("#imgz3").attr("src","img/MS_Monster_King_Slime.png");
		$("#imgz4").attr("src","img/MS_Monster_King_Slime.png");
		$("#imgz5").attr("src","img/MS_Monster_King_Slime.png");
		create();
	}
}
function update() {
	movemob1();
	movemob2();
	movemob3();	
	movemob4();
	movemob5();	
}
function save(score, round, life) {
	sessionStorage.myScore = score;
	sessionStorage.myRound = round;
	sessionStorage.myLife = life;
}
function loadsave() {
	if(sessionStorage.myScore == null && sessionStorage.myRound == null && sessionStorage.myLife == null)
	{
		player.score = 0;
		player.round = 1;
		player.life = 5;
	}else{
		player.score = parseInt(sessionStorage.myScore);
		player.round = parseInt(sessionStorage.myRound);
		player.life = parseInt(sessionStorage.myLife);
	}
}
window.onload = function() {
	loadsave();
	create();
  	kill();
  	updateplayer();
  	pauseresume();
  	$("#restart").click(function() {
		$("#text").css("display","none");
		restart();
		updateplayer();
	});
  	boom();
  			
}