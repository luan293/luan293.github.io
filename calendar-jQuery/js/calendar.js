	//var thang = new Array("mot", "hai", "ba", "tu", "nam", "sau", "bay", "tam", "chin", "muoi", "muoi mot", "muoi hai");
var thangngay = new Array(12);
var thangngaynhuan = new Array(12);	
	thangngay[0] = 31;
	thangngay[1] = 28;
	thangngay[2] = 31;
	thangngay[3] = 30;
	thangngay[4] = 31;
	thangngay[5] = 30;
	thangngay[6] = 31;
	thangngay[7] = 31;
	thangngay[8] = 30;
	thangngay[9] = 31;
	thangngay[10] = 30;
	thangngay[11] = 31;
	
	thangngaynhuan[0] = 31;
	thangngaynhuan[1] = 29;
	thangngaynhuan[2] = 31;
	thangngaynhuan[3] = 30;
	thangngaynhuan[4] = 31;
	thangngaynhuan[5] = 30;
	thangngaynhuan[6] = 31;
	thangngaynhuan[7] = 31;
	thangngaynhuan[8] = 30;
	thangngaynhuan[9] = 31;
	thangngaynhuan[10] = 30;
	thangngaynhuan[11] = 31;
var minnam = 1950;
var o = new Date();
var maxmam = o.getFullYear();
var op = "";
var show = true;

function aaa() {
	show = false;
	var i = minnam;
	for(i; i <= maxmam; i++){
		op += "<option value=" + i + ">" + i + "</option>";	
	} 
	$("#showcdl").css("display","none");
	$("#pickyears").html(op);
	$("#pickyears").val(maxmam);
	$("#pickmonths").val(o.getMonth()+1);
	printtable(maxmam, o.getMonth()+1);
}

function getY() {
  	//var selectBox = $("#pickyears");
	var selectedValue = parseInt($("#pickyears option:selected").text());
	//console.log(selectedValue);
	// var selectBox = document.getElementById("pickyears");
	//var selectedValue = parseInt(selectBox.options[selectBox.selectedIndex].value);
	return selectedValue;
}

function getM() {
	var selectedValue = parseInt($("#pickmonths option:selected").val());
	return selectedValue;
}

function checkY() {
  var year = getY();
	if((year % 4 == 0) || (year % 100 == 0)) {
		return true
	}else{
			return false
		}		
}

function cleartable() {
  	var x = $("td");
	x.text(" ");
	x.attr("class", "");
}

function printtable(year, month) {
  	cleartable();
  	var year = year;
  	var month = month;
  	var day = new Array();
  	day[0] = " ";
  	var d = new Date(year, month-1, 1); 
  	var fristdayofmonth = d.getDay(); 
  	
  	if(checkY() == true) {
  		if(fristdayofmonth == 0) {
  			day[0] = "1";
  			for(var i = 1; i < thangngaynhuan[month-1]; i++) {
			   	day.push(i+1);
			   	//count++;
			}
  		}else{
  			for(var i = 0; i < fristdayofmonth; i++) {
			   	//thang trc
			   	day[i] = "";
				day[i] += " ";
  			}
	  		for(var i = 1; i <= thangngaynhuan[month-1]; i++) {
			   	day.push(i);
			}
  		}
		var x = $("td");
		for(var i = 0; i < day.length; i++) {
		   	x.eq(i).text(day[i]);	   				
		}
  	}else{
   			//nam thuong 			
   			if(fristdayofmonth == 0) {
	  			day[0] = "1";
	  			for(var i = 1; i < thangngay[month-1]; i++) {
				   	day.push(i+1);
				}
  			}else{
	  			for(var i = 0; i < fristdayofmonth; i++) {
				   	day[i] = "";
					day[i] += " ";
	  			}
	  			for(var i = 1; i <= thangngay[month-1]; i++) {
				   	day.push(i);
				}
  			}
	   		var x = $("td");
	   		for(var i = 0; i < day.length; i++) {
	   			x.eq(i).text(day[i]);		
	   		}
    	}
  notdayofmonth();
  today();
}


function notdayofmonth() {
  	var x = $('td');
  	x.each(function (i) {
  		if( x.eq(i).text() == " ") {
	   		x.eq(i).removeAttr("onclick");
	   		x.eq(i).attr("class", "notdayofmonth");
   		}else{
   			x.eq(i).attr("class", "dayofmonth");
   		}	
  	})
}


function today() {
  	var a = new Date();
	var b = a.getDate();
	var c = a.getFullYear();
	var d = a.getMonth()+1;
	var x = $('td');
  	if(c == getY() && d == getM()) {
  		x.each(function (i) {
  			if( x.eq(i).text() == b) {
		  		x.eq(i).attr("class", "today");
  			}else{ 			
   				 }
  		})
	}
}


function btncluinam() {
  	var a = getY()-1; 
  	if(a < minnam) {
   		alert("lui it thoi");
  	}else{
   			SelectY(a);
   			printtable(a,getM()); 			
   		}
}

function btnctiennam() {
  	var a = getY()+1;
  	if(a > maxmam){
    	alert("tien it thoi");
  	}else{
   			SelectY(a);
   			printtable(a,getM());  			
   		}	
}

function btnluithang() {
  	var a = parseInt(getM())-1;
  	//alert("lui thang"+a);
  	if(a < 1) {
   		alert("lui it thoi");
  	}else{
   			SelectM(a);
   			printtable(getY(),a);  			
   		}	  		
}

function btntienthang() {
  	var a = parseInt(getM())+1;
  	if(a > 12){
   		alert("tien it thoi");
  	}else{
   			SelectM(a);
   			printtable(getY(),a);  			
   		}	
}

function SelectY(valueToSelect) {    
	var element = $('#pickyears');
	element.val(valueToSelect);
}

function SelectM(valueToSelect) {    
	var element = $('#pickmonths');
	element.val(valueToSelect);
}

function pickup(day) {
	var month = parseInt(getM());
	var year = getY();
	var pick = day + "/" + month + "/" + year;
	$("#textbox-date").val(pick);
	$("#showcdl").css("display", "none");
	showcdl();
}

function showcdl() {
	if(show == false) {
		show = true;
		$("#showcdl").css("display", "block");
	}else{
			show = false;
			$("#showcdl").css("display", "none");
		}
}