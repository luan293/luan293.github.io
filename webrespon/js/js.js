var flag = false;
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
	var count_cmenu;
	var count_pmenu = ($('#single-nav>ul>li').length);
	console.log(count_pmenu);
	
	if($( window ).width() > 644){
		menuOnpc();
	}else{

		$(".mean-expand").on("tap",function(){

			console.log("aaaaaa");
		});
		var menumb = $("#main_menu").html();
		$("#menu_mb").html(menumb);
		for(var i = 0; i<count_pmenu; i++){	
		var a = $(".menu1").eq(i);
		if(a.children('ul').length > 0){
			$(a.children('ul')).after('<a class="mean-expand" id="mean-expand1">+</a>');
			}
		}
		//menuOnmb();
	}	
	
}
function menuOnmb() {

	$(".mean-expand").on("tap",function(){
		
		var numb = $(this).attr('id');
		var status = $("li[.+"+numb+"]").attr('id');
		if(!flag){					
			$("#"+status+" .sub_menu").css({"display": "flex"});
			flag = true;
		}else{
			$(".sub_menu").css("display", "none");
			//$("#"+status).find("img").attr("src", "img/"+status+".jpg");
			flag = false;
		}
		console.log('aa');
	})
}
function menuOnpc() {
	$(".menu1").mouseenter(function(){
		var status = $(this).attr('id');		
		$("#"+status).find("img").attr("src", "img/"+status+"_hover.jpg");
		$("#"+status+" .sub_menu").css({"display": "flex"});
		//$("#"+status+" ul").css("z-index", "10");
		})
		$(".menu1").mouseleave(function(){
			var status = $(this).attr('id');
			$(".sub_menu").css("display", "none");
			$("#"+status).find("img").attr("src", "img/"+status+".jpg");
		})
}