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
    		document.getElementById("validemail").innerHTML = "Wrong number of @ signs";
    		checkvalidemail = false;
    		showhidebtn();
        return checkvalidemail;
    }

    // Must be at least one char before @ and 3 chars after
    if(emailName.length < 1 || emailDomain.length < 3) {
        document.getElementById("validemail").innerHTML = "Wrong number of characters before or after @ sign";
        checkvalidemail = false;
        showhidebtn();
        return checkvalidemail;
    }

    // Domain must include but not start with .
    if(emailDomain.indexOf('.') <= 0) {
        document.getElementById("validemail").innerHTML = "Domain must include but not start with";
        checkvalidemail = false;
        showhidebtn();
        return checkvalidemail;
    }

    // emailName must only include valid chars
    for (var i = emailName.length - 1; i >= 0; i--) {
        if(validChars.indexOf(emailName[i]) < 0) {
            document.getElementById("validemail").innerHTML = "Invalid character in name section";
            checkvalidemail = false;
            showhidebtn();
        	return checkvalidemail;
        }
    };

    // emailDomain must only include valid chars
    for (var i = emailDomain.length - 1; i >= 0; i--) {
        if(validChars.indexOf(emailDomain[i]) < 0) {
        	document.getElementById("validemail").innerHTML = "Invalid character in domain section";
            checkvalidemail = false;
            showhidebtn();
       		return checkvalidemail;
        }
    };

    // Domain's last . should be 2 chars or more from the end
    if(emailDomainParts[emailDomainParts.length - 1].length < 2) {
        document.getElementById("validemail").innerHTML = "Domain's last . should be 2 chars or more from the end";
        checkvalidemail = false;
        showhidebtn();
        return checkvalidemail; 
    }
    document.getElementById("validemail").innerHTML = "Email address seems valid";
    checkvalidemail = true;
    showhidebtn();
    return checkvalidemail;
}

function checkValidUsername(username) {
	var regex = /^[0-9a-zA-Z_.-]+$/
	if(regex.test(username)) {
		document.getElementById("validuser").innerHTML = "username seems valid";
		checkvaliduser = true;
		showhidebtn();
		return checkvaliduser
	}
	document.getElementById("validuser").innerHTML = "username Invalid";
	checkvaliduser = false;
	showhidebtn();
    return checkvaliduser;
}

function checkValidPw(pw) {
	if(typeof pw === 'undefined') return null;
	if(pw.length < 6) {
    	document.getElementById("validpw").innerHTML = "min 6 characters";
    	checkvalidpw = false;
        return checkvalidpw;
    }
    document.getElementById("validpw").innerHTML = "password seems valid";
    checkvalidpw = true;
    showhidebtn();
    return checkvalidpw;
}

function checkValidDate(dt) {
	if(typeof pw === 'undefined') return null;
}

function showhidebtn() {
	if(checkvaliduser && checkvalidpw && checkvalidemail) {		
		document.getElementById("reg").disabled = false;
	}else{
		document.getElementById("reg").disabled = true;
	}
}

function object() {
	//  // Khai bao mot bien
	try{	  
		// Voi cac trinh duyet hien dai: Opera 8.0+, Firefox, Safari
		ajaxRequest = new XMLHttpRequest();
	    }catch (e){
	      // Voi trinh duyet IE
			try{
                ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
            }catch (e) {
                        try{
							ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
						}catch (e){
							        // Thong bao khi xay ra loi
							        alert("Co loi xay ra voi trinh duyet cua ban!");
							        return false;
                                }
		      	}
   		}
   	return ajaxRequest;
}

var ajaxRequest = object();

function getdata() {
	var id = document.getElementById('username').value;
	ajaxRequest.open("post", "sever.php", false);
  	ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
  	ajaxRequest.onreadystatechange = process;
   	ajaxRequest.send("id=" + id); 
}

function process() {
		//document.getElementById("validuser").innerHTML = "dang load";
	if(ajaxRequest.readyState == 4 && ajaxRequest.status == 200){			
      	result = ajaxRequest.responseText;
      	if(result == "false"){
			alert("username da ton tai");
		}else{
			alert("dk thanh cong");
		}
    }else{
    
      	}
}