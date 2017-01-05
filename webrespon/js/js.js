function load(){
	menu();
	slider();
}
function slider(){
	$(".banner_img").css("display", "none");
	var x = $("#banner_1");
	var y = $("#banner_2");
	x.css("display", "block");
	setInterval(function(){
		var a;
		a=x;
		x=y;
		y=a;
		x.fadeOut(1500).promise().done(function() {
    		y.fadeIn(1500);
		});
	}, 3000)
	
}
function menu(){
	
	$(".menu").mouseenter(function(){
		var status = $(this).attr('id');		
		$("#"+status).find("img").attr("src", "img/"+status+"_hover.jpg");
		$("#"+status+" .sub_menu").css({"display": "block", "width": "100%"});
		//$("#"+status+" ul").css("z-index", "10");
	})
	$(".menu").mouseleave(function(){
		var status = $(this).attr('id');
		$(".sub_menu").css("display", "none");
		$("#"+status).find("img").attr("src", "img/"+status+".jpg");
	})
}