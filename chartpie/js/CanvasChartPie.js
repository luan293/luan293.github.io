var CanvasChartPie = function() {
    var context;
    var i;
    var flag;  
    var txtLine; 
    var space = 6;// khoảng nhích ra của khối
    var xscale = 4; // bóp thành e-lip
    var yscale = 1;      
    var drawChart = function (canvasId, data) {
        var success = data.success * 0.01;
        var label = {
                        labelFont: data.label.labelFont != null ? data.label.labelFont : '2pt sans-serif',
                        labelStyle: data.label.labelStyle != null ? data.label.labelStyle : 'black',
                        labelSuccess: data.label.labelText1 != null ? data.label.labelText1 : 'ĐÃ ĐẠT', 
                        labelUnsuccess: data.label.labelText2 != null ? data.label.labelText2 : 'CHƯA ĐẠTT',                        
                    };
        if(success>1 || success<0){
            alert('nhap du lieu tu 0-100');
            return;
        }
        var canvas = document.getElementById('mycanvas');
        context = canvas.getContext('2d');        
        context.lineWidth = 2;
        context.lineCap = "round";
        var centerX = canvas.width/xscale/2;
        var centerY = canvas.height/2 - 20;
        var radius = 40;
        txtLine = radius/2;       
        var color = {
                        top: data.color[0].cTop != null ? data.color[0].cTop : '#00a8ec',
                        bottom: data.color[0].cBottom != null ? data.color[0].cBottom : '#436eb3',
                        line: data.color[0].cLine != null ? data.color[0].cLine : '#00a8ec',
                    };
        var color2 = {
                        top: data.color[1].cTop != null ? data.color[1].cTop : '#df0024',
                        bottom: data.color[1].cBottom != null ? data.color[1].cBottom : '#f44863',
                        line: data.color[1].cLine != null ? data.color[1].cLine : '#df0024',
                     }   
        if(success > 0.5) {
            flag = true;
        }else{
            flag = false;
        }
        for(i = 45; i > 0; i--) {            
           drawSuccess(centerX, centerY, radius,success, label, color);
           drawUnsuccess(centerX, centerY, radius,success, label, color2);
        }
        context.font = data.title.titleFont != null ? data.title.titleFont : '10pt sans-serif';
        var title = data.title.text != null ? data.title.text : ' ';
        var widthText = context.measureText(title).width;       
        context.fillStyle = data.title.titleStyle != null ? data.title.titleStyle : 'blue';
        context.fillText(title, (canvas.width - widthText)/2, canvas.height - 10);
        
    };
    var drawSuccess = function(centerX, centerY, radius, success, label, color){
        var widthLine;// độ dài đường kẻ

        var xDown1 = (radius - space)*Math.cos(Math.PI * success); //toạn độ cần bắt đầu kẻ
        var yDown1 = -(radius - space)*Math.sin(Math.PI * success);

        if(0.7 > success && success> 0.3){
            widthLine = radius + 10;
        }else{
            widthLine = txtLine;
        }

        var xlineText = (radius + widthLine) * Math.cos(Math.PI * success); //  tọa độ tâm trên biên tròn
        var ylineText = -(radius + widthLine) * Math.sin(Math.PI * success); //

        // vẽ khối tròn
        context.save();
        context.scale(xscale, yscale);
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
        context.fill();

        //vẽ đường kẻ + label
        if(i == 1) {
            context.save();
            // context.scale(2, 1);  do hình tròn dùng scale dể bóp thành hình e-lip => các phần khác x phải *xscale
            context.beginPath();
            context.moveTo((xDown1 + centerX)*xscale, centerY - yDown1);
            context.lineTo((xlineText + centerX)*xscale, centerY - ylineText);
            context.font = label.labelFont;
            context.fillStyle = label.labelStyle;
            if(flag){
                context.lineTo((xlineText + centerX - txtLine)*xscale, centerY - ylineText);
                context.fillText(((success)*100).toFixed(0) + "% " + label.labelSuccess, (xlineText + centerX - 30) * xscale, centerY - ylineText + 20);
            }else{
                context.lineTo((xlineText + centerX + 20)*xscale, centerY - ylineText);
                context.fillText(((success)*100).toFixed(0)  + "% " + label.labelSuccess, (xlineText + centerX) * xscale, centerY - ylineText + 20);
            }
            context.restore();
            context.strokeStyle = color.line;
            context.stroke(); 
        }
             
    };
    var drawUnsuccess = function(centerX, centerY, radius, success, label, color){
        var widthLine;
        var unsuccess = success;
        var line1 = radius * Math.cos(2 * Math.PI * success);//   tọa độ nằm trên biên
        var line2 = -radius * Math.sin(2 * Math.PI * success);//
        if(success<0.3){
            widthLine = txtLine + 10;
        }else{
            widthLine = txtLine;
        }
      
        var xlineText = -(radius+widthLine) * Math.cos(Math.PI * success);  
        var ylineText = (radius+widthLine) * Math.sin(Math.PI * success); 
        
        // tọa độ góc khối tròn (nhích ra 1 khoảng)
        var xDown = -space * Math.cos(Math.PI * success);
        var yDown = space * Math.sin(Math.PI * success);
        var x = xDown + centerX;
        var y = centerY - yDown;

        var xDown1 = -radius*Math.cos(Math.PI * success);
        var yDown1 = radius*Math.sin(Math.PI * success);
 
        if(success == 1){
            success = 0;
            unsuccess = 1;
        }else if(success == 0){
            success = 1; 
        }

        context.save();
        context.scale(xscale, yscale);
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
            context.beginPath();        
            context.moveTo((xDown1 + centerX)*xscale, centerY - yDown1);
            context.lineTo((xlineText + x)*xscale, y - ylineText);
            context.font = label.labelFont;
            context.fillStyle = label.labelStyle;
            if(flag){
                context.lineTo((xlineText + x + txtLine)*xscale, y - ylineText);
                context.fillText(((1-unsuccess)*100).toFixed(0) + "% " + label.labelUnsuccess, (xlineText + x) * xscale, y - ylineText - 10);
            }else{
                context.lineTo((xlineText + x - txtLine)*xscale, y - ylineText);
                context.fillText(((1-unsuccess)*100).toFixed(0) + "% " + label.labelUnsccess, (xlineText + x - 20) * xscale, y - ylineText - 10);
            }        
            context.restore();
            context.strokeStyle = color.line;
            context.stroke();    
        }       
    }; 
    return {
        drawChart: drawChart
    };
} ();