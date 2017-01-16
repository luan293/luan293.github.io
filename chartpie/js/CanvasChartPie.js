var CanvasChartPie = function() {
    var context;
    var i;
    var flag;  
    var txtLine; 
    var space = 6;       
    var drawChart = function (canvasId, data) {
        var success = data.success * 0.01;
        if(success>1 || success<0){
            alert('nhap du lieu tu 0-100');
            return;
        }
        var canvas = document.getElementById('mycanvas');
        context = canvas.getContext('2d'); 
        context.font = "8pt Georgia";
        context.lineWidth = 2;
        context.lineCap = "round";
        var centerX = canvas.width/4;
        var centerY = canvas.height/2;
        var radius = (canvas.width+canvas.height)/23;
        txtLine = radius/2;       
        var color = {top: '#00a8ec',
                      bottom: '#436eb3'};
        var color2 = {top: '#df0024',
                      bottom: '#f44863'}   
        if(success > 0.5) {
            flag = true;
        }else{
            flag = false;
        }
        for(i = 30; i > 0; i--) {            
           drawUp(centerX, centerY, radius,success, color,flag);
           drawDown(centerX, centerY, radius,success, color2,flag);
        }

        context.fillText("BIEU DO TONG QUAN KHUNG NANG LUC", canvas.width/3.5, canvas.height-10);
        
    };
    var drawUp = function(centerX, centerY, radius, success, color){
        var widthLine;
        var xDown1 = (radius - space)*Math.cos(Math.PI * success);
        var yDown1 = -(radius - space)*Math.sin(Math.PI * success);

        if(0.7 > success && success> 0.3){
            widthLine = radius + 10;
        }else{
            widthLine = txtLine;
        }
        //console.log(txtLine)
        var xlineText = (radius + widthLine) * Math.cos(Math.PI * success); //  bien trung tam
        var ylineText = -(radius + widthLine) * Math.sin(Math.PI * success); //
        context.save();
        context.scale(2, 1);
        context.beginPath();
        context.arc(centerX, centerY + i, radius, 0, 2 * Math.PI * success);
        context.lineTo(centerX, centerY + i); 
        context.lineTo(centerX + radius, centerY + i);
        context.restore();
        if(i == 1) {
            context.fillStyle = color.top;
        }else {
            context.fillStyle = color.bottom;
        }
        // apply styling     
        context.fill();

        if(i == 1) {
            context.save();
            context.scale(2, 1); 
            context.beginPath();
            context.moveTo(xDown1 + centerX, centerY - yDown1);
            context.lineTo(xlineText + centerX, centerY - ylineText);
            //context.moveTo((centerX+(xDown1 + centerX))/2, (centerY+(centerY - yDown1))/2);
            // context.lineTo(xDown1, centerY);
            context.fillStyle="black";
            if(flag){
                context.lineTo(xlineText + centerX - txtLine, centerY - ylineText);
                context.fillText(((success)*100).toFixed(1) + "% da dat", xlineText + centerX - 50, centerY - ylineText + 10);
            }else{
                context.lineTo(xlineText + centerX + 40, centerY - ylineText);
                context.fillText(((success)*100).toFixed(1)  +"% da dat", xlineText + centerX, centerY - ylineText + 10);
            }
            context.restore();
            context.strokeStyle = color.top;
            context.stroke(); 
        }
             
    };
    var drawDown = function(centerX, centerY, radius, success, color,flag){
        var widthLine;
        var line1 = radius * Math.cos(2 * Math.PI * success);//     diem nam tren dg tron
        var line2 = -radius * Math.sin(2 * Math.PI * success);//
        if(success<0.3){
            widthLine = txtLine + 10;
        }else{
            widthLine = txtLine;
        }
      
        var xlineText = -(radius+widthLine) * Math.cos(Math.PI * success);  // 1nua pi
        var ylineText = (radius+widthLine) * Math.sin(Math.PI * success); // 1nua pi
        
        //toa do goc manh drawdown
        var xDown = -space * Math.cos(Math.PI * success);
        var yDown = space * Math.sin(Math.PI * success);
        var x = xDown + centerX;
        var y = centerY - yDown;

        var xDown1 = -radius*Math.cos(Math.PI * success);
        var yDown1 = radius*Math.sin(Math.PI * success);
 
        if(success == 1){
            success = 0;
        }
        context.save();
        context.scale(2,1);
        context.beginPath();        
        context.arc(x, y + i, radius, 2 * Math.PI * success,0);
        context.lineTo(x, y + i); 
        context.lineTo(line1 + x,(y - line2) + i); 
        context.restore();
        if(i == 1) {
            context.fillStyle = color.top;
        }else {
            context.fillStyle = color.bottom;
        }     
        context.fill();
        //context.stroke();


        if(i == 1) {
            context.save();
            context.scale(2, 1);
            context.beginPath();        
            context.moveTo(xDown1 + centerX, centerY - yDown1);
            context.lineTo(xlineText + x, y - ylineText);
            context.fillStyle="black";
            if(flag){
                context.lineTo(xlineText + x + txtLine, y - ylineText);
                context.fillText(((1-success)*100).toFixed(1) + "% chua dat", xlineText + x, y - ylineText - 10);
            }else{
                context.lineTo(xlineText + x - txtLine, y - ylineText);
                context.fillText(((1-success)*100).toFixed(1) + "% chua dat", xlineText + x - 40, y - ylineText - 10);
            }        
            context.restore();
            context.strokeStyle = color.bottom;
            context.stroke();    
        }       
    }; 
    return {
        drawChart: drawChart
    };
} ();