var currentImg = 0;
var x, y, x2, h;
function load(){
	$(".small").eq(0).addClass("notsmall");
	$(".img").css("display","none");	
	//$(".img").eq(0).removeClass("hideimg");
	$(".img").eq(0).fadeIn(2000);
	//$(".img").eq(0).addClass("showimg");
	x = $(".img");
	y = $(".img").length;
 	x2 = $(".small");
}
function show(numb) {

	if(numb>y-1){
		currentImg = 0;
		numb = currentImg;
	}else if(numb < 0){
		currentImg = y-1;
		numb = currentImg;
	}

 	x.eq(h).fadeOut(2000).promise().done(function() {
    	x.eq(numb).fadeIn(2000);
	});

  	x2.removeClass("notsmall");	
	
	x2.eq(numb).addClass("notsmall");
}

function autochange(){

}
function next(){
	h=currentImg;
	currentImg+=1;
	show(currentImg);
	console.log(currentImg);
}
function prev(){
	h=currentImg;
	currentImg-=1;
	show(currentImg);
		console.log(currentImg);	
}
function clickimg(string){
	for(i = 1; i <= y; i++){
		if(string.indexOf(i) > -1){
			h=currentImg;
			currentImg = i-1;
			show(currentImg);
		}
	}
}
