var flag = false;
function load(){
	menu();
	slider();
	scrolltop();
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
		
		
		var menumb = $("#main_menu").html();
		$("#menu_mb").html(menumb);
		for(var i = 0; i<count_pmenu; i++){	
		var a = $(".menu1").eq(i);
		if(a.children('ul').length > 0){
			$(a.children('ul')).after('<a class="mean-expand" id="mean-expand'+i+'">+</a>');
			}
		}
		$('#btn_showmenu').on('click', function(){
			if(!flag){
				$('#btn_showmenu img').attr('src','img/btn_hidemenu.jpg');
				$('#menu_mb').css('display','block');
				flag = true;
			}else{
				flag = false;
				$('#btn_showmenu img').attr('src','img/btn_showmenu.jpg');
				$('#menu_mb').css('display','none');
			}
		})
		menuOnmb();
	}	
	
}
var numb;
function menuOnmb() {

  		$(".mean-expand").on("click", function(){
		 numb = $(this).attr('id');		
		var status = $("#"+numb).parent('li').attr('id');
		$(".sub_menu").css("display", "none");
		if(!check_showhide()){
			//click vao dau - 
			$(".sub_menu").css("display", "none");
			$('#'+numb).html('+');
		}else{
			$(".sub_menu").css("display", "none");
			$('.mean-expand').html('+');
			$('#'+numb).html('-');
			$("#"+status+" .sub_menu").css({"display": "flex"});	
		}		
		});
}
function check_showhide(){
	if($('#'+numb).html() == '-')
	{
		return false;
	}else{
		return true;
	}
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
function scrolltop() 
{
    var id_button = '.btn-totop';
 
    // Kéo xuống khoảng cách 220px thì xuất hiện button
    var offset = 220;
 
    // THời gian di trượt là 0.5 giây
    var duration = 500;
 
    // Thêm vào sự kiện scroll của window, nghĩa là lúc trượt sẽ
    // kiểm tra sự ẩn hiện của button
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery(id_button).fadeIn(duration);
        } else {
            jQuery(id_button).fadeOut(duration);
        }
    });
 
    // Thêm sự kiện click vào button để khi click là trượt lên top
    jQuery(id_button).click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    });
}