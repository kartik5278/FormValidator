const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const password2=document.getElementById("password2");

//FUNCTIONS
//showing input ERROR 
function showError(input,message){
	formControl=input.parentElement;
	formControl.className="form-control error";
	small=formControl.querySelector('small');
	small.innerText=message;
}

// showing input success
function showSuccess(input){
	formControl=input.parentElement;
	formControl.className="form-control success";
}

//check EMAIL is valid or not
function checkEmail(input){
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(String(email).toLowerCase());
    if (re.test(input.value){
    	showSuccess(input);
    }else{
    	showError(input,"Email is NOT VALID")
    }

}

//checking password
function checkPasswords(input1,input2){
	if (input1.value!==input2.value){
		showError(input2,"Passwords do not match.");
	}else{
		showSuccess(input2);
	}
}



//getting capitalized field name
function getFieldName(input){
	return `${input.id.charAt(0).toUpperCase()+input.id.slice(1)}`
}

//checking every field
function fieldRequired(inputArray){
	inputArray.forEach(function (input){
		if(input.value.trim()===' '){
			showError(input,`${getFieldName(input)} is REQUIRED`);
		}else{
			showSuccess(input);
		}
	});
}

// checking length
function checkLength(input,min,max){
	if(input.value.length <min){
		showError(input,`${getFieldName(input)} must have atleast ${min} characters`);
	}else if(input.value.length > max){
		showError(input,`${getFieldName(input)} must not exceed ${max} characters.`);
	}else{
		showSuccess(input);
	}
}




// ====================================================
// event listeners
form.addEventListener('submit',function(e){
	e.preventDefault();

	fieldRequired([username,email,password,password2]);
	checkLength(username,3,15);
	checkLength(password,5,20);
	checkEmail(email);
	checkPasswords(password,password2);
});