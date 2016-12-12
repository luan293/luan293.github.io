var currentImg = 0;
var x, y, x2;
function load(){
	document.getElementsByClassName('small')[0].className = "notsmall small img-1";
	x = document.getElementsByClassName("img");
	y = document.getElementsByClassName("img").length;
 	x2 = document.getElementsByClassName("small");
}
function show(numb) {
	
	//var y2 = document.getElementsByClassName("small").length;
	if(numb > y-1){
		currentImg = 0;
		numb = 0;
	}else if(numb < 0){		
		currentImg = y-1;
		numb = y-1;
	}
	var h = numb+1;  	
	for(var i=0; i < y; i++) {
  		x[i].className = "hideimg img img"+(i+1);
  		x2[i].className = "small img-"+(i+1);	
	}
   	var z = document.getElementsByClassName("img"+h.toString());
	x[numb].className = "showimg img img"+h;
	x2[numb].className = "notsmall small img-"+h;
}
function next(){
	currentImg+=1;
	show(currentImg);
}
function prev(){
	currentImg-=1;
	show(currentImg);	
}
function clickimg(string){
	for(i = 1; i <= y; i++){
		if(string.indexOf(i) > -1){
			currentImg = i-1;
			show(currentImg);
		}
	}
}
