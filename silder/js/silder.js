var currentImg = 0;
function load(){
	document.getElementsByClassName('small')[0].className = "notsmall small img-1";
}
function show(numb) {
	var x = document.getElementsByClassName("img");
	var y = document.getElementsByClassName("img").length;
	var x2 = document.getElementsByClassName("small");
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