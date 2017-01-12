
var CanvasChartPie = function () {
  var context;
            
  var drawChart = function (canvasId, data){
  	var success = data.success*0.01;
  	//var fail = data.success*0.01;
  
  	var canvas = document.getElementById('mycanvas');
    context = canvas.getContext('2d'); 
      ///
    var centerX = 90;
    var centerY = 90;
    var radius = 50;
      ///
		var centerX2 = centerX;
    var centerY2 = centerY;
    var radius2 = radius;
    var color = {top: '#00a8ec',
                  bottom: '#436eb3'};
    var color2 = {top: '#df0024',
                  bottom: '#f44863'}   
    if(success>0.5){
      drawUp(centerX, centerY, radius,success,color);
      drawDown(centerX2, centerY2, radius2,success,color2);
    }else{
      success = 1 - success; 
       drawUp(centerX, centerY, radius,success,color2);
      drawDown(centerX2, centerY2, radius2,success,color);  
    }
   
	};
	var drawUp = function(centerX, centerY, radius, success, color){
    var i;
    //boolean ? i = 30 : i = 6;
		for(i=30; i> 0;i--){
		// draw circle which will be stretched into an oval
		context.save();
    context.scale(2,1);
    context.beginPath();
    context.arc(centerX, centerY+i, radius,0, 2 *Math.PI *success);
		context.lineTo(centerX,centerY+i); 
		//context.lineTo(150,100);
    context.lineTo(centerX/2,centerY+i)
    // context.lineTo(127,143);    
    // restore to original state
    context.restore();
		  if(i==1){
  			context.fillStyle = color.top;
  	  }else{
  		 	context.fillStyle = color.bottom;
 		  }
        // apply styling     
        context.fill();
  			//context.stroke()
		}
	};
	var drawDown = function(centerX, centerY, radius, success, color){
    var i;
    //boolean ? i = 30 : i = 6;
		for(i=6; i> 0;i--){
  		// draw circle which will be stretched into an oval
  		context.save();
      context.scale(2,1);
      context.beginPath();
      context.arc(centerX, centerY+i, radius,2 *Math.PI *success, 0);
  		context.lineTo(centerX,centerY+i); 
  		//context.lineTo(150,100);
      // context.lineTo(centerX,centerY)
      // context.lineTo(127,143);
      // restore to original state
      context.restore();
       if(i==1){
        context.fillStyle = color.top;
      }else{
        context.fillStyle = color.bottom;
      }
      // apply styling
      
      context.fill();
  		// context.stroke()
    }
	};
	return {
      drawChart: drawChart
    };
} ();