var email=document.getElementById("field1");
var err1=document.getElementById("err1");
var phno=document.getElementById("field2");
var err2=document.getElementById("err2")
var pwd=document.getElementById("field3");
var err3=document.getElementById("err3")
var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;
var regex=/^([A-Za-z0-9\-#_.]+)@([a-zA-Z0-9\-]+).([a-z]{2,3}).([a-z]{2,3})?$/
var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
function validateEmail(){
    //alert("clicked")
    if (email.value.trim()=='') {
        err1.innerText="Field cannot be empty";
        email.style.border="4px solid red";
        return false;
    }
    else if(!email.value.match(regex)){
        err1.innerText="Email is not in correct format";
        email.style.border="4px solid red";
        return false;
    } else {
      err1.innerText="";
      email.style.border='4px solid green';
      return true;
    }
}
function validatephone(){
  if((phno.value.match(phoneno)))
      {
      err2.innerText="";
      phno.style.border="4px solid green";
      return true;
        }
      else
        {
        err2.innerText="incorrect format";
        phno.style.border="4px solid red";
        return false;
        }
}
function validatepass() 
{ 

if(pwd.value.match(passw)) 
{ 
err3.innerText="";
pwd.style.border='4px solid green'
return true;
}
else
{ 
pwd.style.border='4px solid red'
err3.innerText="Password must contain minimum 8 characters,atleast one uppercase,one lower case and one number";
return false;
}
} 

function verify() {
    if (!validateEmail()||!validatephone()||!validatepass()) {
        return false;
    } else {
        return true;
    }
}
