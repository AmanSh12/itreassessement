/* JS for menu toggle */
function show(){
	var x = document.getElementById("navBar");
	if(x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

function validate(){
	var error_msg = document.getElementById("error_msg");
	var text;
	error_msg.style.padding = "10px";

	var name = f1.txtName.value;
	if(name == "" || name.length < 3){
		text = "Please enter valid name";
		f1.txtName.focus();
		error_msg.innerHTML = text;
		return false;
	}
	var email = f1.txtEmail.value;
	if(email == ""){
		text = "Email is required";
		f1.txtEmail.focus();
		error_msg.innerHTML = text;
		return false;
	}
	atpos = email.indexOf("@");
	dotpos = email.lastIndexOf(".");
	if(atpos < 1 || (dotpos - atpos < 3)){
		text = "Please enter valid email"
		f1.txtEmail.focus();
		error_msg.innerHTML = text;
		return false;
	}
	var phone = f1.txtPhone.value;
	if(phone == "" || isNaN(phone) || phone.length != 10){
		text = "Enter valid phone number"
		f1.txtPhone.focus();
		error_msg.innerHTML = text;
		return false;
	}
	var msg = f1.txtMsg.value;
	if(msg == "") {
		text = "Message box cannot be left empty"
		f1.txtMsg.focus();
		error_msg.innerHTML = text;
		return false;
	}
	return true;
}