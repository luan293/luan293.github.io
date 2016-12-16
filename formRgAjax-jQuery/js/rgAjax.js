var checkvaliduser = false;
var checkvalidpw = false;
var checkvalidemail = false;

function checkValidEmail(email) {
    // If no email or wrong value gets passed in (or nothing is passed in), immediately return false.
    if(typeof email === 'undefined') return null;
    if(typeof email !== 'string' || email.indexOf('@') === -1) return false;

    // Get email parts
    var emailParts = email.split('@'),
        emailName = emailParts[0],
        emailDomain = emailParts[1],
        emailDomainParts = emailDomain.split('.'),
        validChars = 'abcdefghijklmnopqrstuvwxyz.0123456789_-';

    // There must be exactly 2 parts
    if(emailParts.length !== 2) {
    		$("#validemail").text("Wrong number of @ signs");
    		checkvalidemail = false;
    		showhidebtn();
        return checkvalidemail;
    }

    // Must be at least one char before @ and 3 chars after
    if(emailName.length < 1 || emailDomain.length < 3) {
        $("#validemail").text("Wrong number of characters before or after @ sign");
        checkvalidemail = false;
        showhidebtn();
        return checkvalidemail;
    }

    // Domain must include but not start with .
    if(emailDomain.indexOf('.') <= 0) {
        $("#validemail").text("Domain must include but not start with");
        checkvalidemail = false;
        showhidebtn();
        return checkvalidemail;
    }

    // emailName must only include valid chars
    for (var i = emailName.length - 1; i >= 0; i--) {
        if(validChars.indexOf(emailName[i]) < 0) {
            $("#validemail").text("Invalid character in name section");
            checkvalidemail = false;
            showhidebtn();
        	return checkvalidemail;
        }
    };

    // emailDomain must only include valid chars
    for (var i = emailDomain.length - 1; i >= 0; i--) {
        if(validChars.indexOf(emailDomain[i]) < 0) {
        	$("#validemail").text("Invalid character in domain section");
            checkvalidemail = false;
            showhidebtn();
       		return checkvalidemail;
        }
    };

    // Domain's last . should be 2 chars or more from the end
    if(emailDomainParts[emailDomainParts.length - 1].length < 2) {
        $("#validemail").text("Domain's last . should be 2 chars or more from the end");
        checkvalidemail = false;
        showhidebtn();
        return checkvalidemail; 
    }
    $("#validemail").text("Email address seems valid");
    checkvalidemail = true;
    showhidebtn();
    return checkvalidemail;
}

function checkValidUsername(username) {
	var regex = /^[0-9a-zA-Z_.-]+$/
    var temp = false;
	if(regex.test(username)) {		
		temp = true;
	}else{
        $("#validuser").text("username seems Invalid");
        checkvaliduser = false;
        showhidebtn();
        return checkvaliduser
    }
    if(username.length >= 6 && temp == true){
        $("#validuser").text("username seems valid");
        checkvaliduser = true;
        showhidebtn();
        return checkvaliduser
    }else{
        $("#validuser").text("min 6 characters");
        checkvaliduser = false;
        showhidebtn();
        return checkvaliduser
    }
	
}

function checkValidPw(pw) {
	if(typeof pw === 'undefined') return null;
	if(pw.length < 6) {
    	$("#validpw").text("min 6 characters");
    	checkvalidpw = false;
        return checkvalidpw;
    }
    $("#validpw").text("password seems valid");
    checkvalidpw = true;
    showhidebtn();
    return checkvalidpw;
}

function checkValidDate(dt) {
	if(typeof pw === 'undefined') return null;
}

function showhidebtn() {
	if(checkvaliduser && checkvalidpw && checkvalidemail) {        
        $("#reg").attr('disabled',false);
    }else{
        $("#reg").attr('disabled',true);
    }
}
function ajax_jquery(){
    var agrs = {
        url : "sever.php",
        type : "post",
        dataType:"text",
        data : {  
            id : $("#username").val()
        },
        success : function (result){
            if(result == "false"){
                alert("username da ton tai");  
            }
            else{
                 alert('dk thanh cong');
            }
        },
        error: function(result){
          
        }
    };
    $.ajax(agrs);
}


