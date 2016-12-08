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
		op += "<option value="+i+">"+i+"</option>";	
	} 
	document.getElementById("showcdl").style.display = "none";
	document.getElementById("pickyears").innerHTML = op;
	document.getElementById("pickyears").value = maxmam;
	document.getElementById("pickmonths").value = o.getMonth()+1;
	printtable(maxmam, o.getMonth()+1);
}

function getY() {
  var selectBox = document.getElementById("pickyears");
	var selectedValue = parseInt(selectBox.options[selectBox.selectedIndex].value);
	return selectedValue;
}

function getM(){
  var selectBox = document.getElementById("pickmonths");
	var selectedValue = selectBox.options[selectBox.selectedIndex].value;
	return selectedValue;
}

function checkY() {
  var year = getY();
	if((year % 4 == 0) || (year % 100 == 0)){
		//changeFuncM(true);
		//alert("nhuan" + selectedValue);
		return true
	}else{
			//changeFuncM(false);
			//alert("khong nhuan" + selectedValue);
			return false
		}		
}

function cleartable() {
  var x = document.getElementsByTagName("td");
  var y = document.getElementsByTagName("td").length;
  for(var i=0; i<y; i++) {
	  x[i].innerHTML = " ";
	  x[i].className = "";
	}
}

function printtable(year, month) {
  cleartable();
  var year = year;
  var month = month;
  var day = new Array();
  day[0]="";
  var d = new Date(year,month-1,1); 
  var fristdayofmonth = d.getDay(); 
  if(checkY() == true) {
   	for(var i=0; i<fristdayofmonth; i++){
   		//thang trc
   		day[i]="";
	   	day[i] += " ";
	   	//count++;
	  }
	  //var count5 = count
	  for(var i = 1; i <= thangngaynhuan[month-1]; i++) {
	   	day.push(i);
	   	//count++;
	  }
	  var x = document.getElementsByTagName("td");
	  //document.getElementsByTagName("td").innerHTML = "aaa";
	  //cleartable();
	  for(var i = 0; i < day.length; i++){
	   	x[i].innerHTML = day[i];	   				
	  }
	  //alert(chia7);
	  //	document.getElementById("tableindex").innerHTML = chia7[5];
  }else{
   			//nam thuong  			
   			for(var i = 0; i < fristdayofmonth; i++) {
     			//thang trc
     			day[i]="";
  	   		day[i] += " ";
  	   		//count++;
	   	  }
	   		//var count5 = count
	   		for(var i = 1; i <= thangngay[month-1]; i++) {
	   			day.push(i);
	   			//count++;
	   		}
	   		var x = document.getElementsByTagName("td");
	   		//document.getElementsByTagName("td").innerHTML = "aaa";
	   		//cleartable();
	   		for(var i = 0; i < day.length; i++) {
	   			x[i].innerHTML = day[i];		
	   		}
    }
  notdayofmonth();
  today();
}

function notdayofmonth() {
  var x = document.getElementsByTagName("td");
  for(var i = 0; i < x.length; i++){
   	//alert(x[i].innerHTML);
   	if(x[i].innerHTML == " ") {
   		//alert(i);
   		x[i].removeAttribute("onclick");
   		x[i].className = "notdayofmonth";
   	}		
	}
}

function today() {
  var a = new Date();
	var b = a.getDate();
	var c = a.getFullYear();
	var d = a.getMonth()+1;
  var x = document.getElementsByTagName("td");
  if(c == getY() && d == getM()) {
	  for(var i = 0; i < x.length; i++) {
	   	//alert(x[i].innerHTML);
	   	if(x[i].innerHTML == b){
	   		//alert(i);
	   				x[i].className = "today";
	   	}		
	  }
  }else{

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

function btnluithang(){
  var a = parseInt(getM())-1;
  //alert("lui thang"+a);
  if(a < 1) {
   	alert("lui it thoi");
  }else{
   			SelectM(a);
   			printtable(getY(),a);  			
   		}	  		
}

function btntienthang(){
  var a = parseInt(getM())+1;
  if(a > 12){
   	alert("tien it thoi");
  }else{
   			SelectM(a);
   			printtable(getY(),a);  			
   		}	
}

function SelectY(valueToSelect) {    
	var element = document.getElementById('pickyears');
	element.value = valueToSelect;
}

function SelectM(valueToSelect) {    
	var element = document.getElementById('pickmonths');
	element.value = valueToSelect;
}

function pickup(day) {
	var month = parseInt(getM());
	var year = getY();
	var pick = day+"/"+month+"/"+year;
	document.getElementById("textbox-date").value = pick;
}

function showcdl() {
	if(show == false) {
		show = true;
		document.getElementById("showcdl").style.display = "block";
	}else{
			show = false;
			document.getElementById("showcdl").style.display = "none";
		}
}