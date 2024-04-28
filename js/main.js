var userNameInput=document.getElementById("usernameInp");
var userEmailInput=document.getElementById("useremailInp");
var userPassInput=document.getElementById("userpassInp");
var signBtn=document.getElementById("signBtn");
var userInfo;
if(localStorage.getItem("users")== null){
  userInfo=[];
}
else{
  userInfo=JSON.parse(localStorage.getItem("users"));
}
function signUp(){
  userInputValidation();
  isExist();
  if(userInputValidation() == true && isExist() == false){
    var user={
      name:userNameInput.value,
      email:userEmailInput.value,
      password:userPassInput.value
    };
    userInfo.push(user);
    localStorage.setItem("users",JSON.stringify(userInfo));
    var confirmMsg=document.getElementById("confirmMsg");
    confirmMsg.classList.replace("d-none","d-block");
    var signIn=document.getElementById("signin");
    signIn.classList.replace("d-none","d-block");

  }
  else{
    var tryAgainMsg=document.getElementById("tryAgainMsg");
    tryAgainMsg.classList.replace("d-none","d-block");
  }
 
}
function usernameValidation(){
  var usernamealret=document.getElementById("usernamealret");
  var regex= /^[A-Za-z]{3,10}(\s?[A-Za-z]{3,10})?$/;
  if(regex.test(userNameInput.value)==true &&userNameInput.value !=""){
    userNameInput.classList.add("is-valid");
    userNameInput.classList.remove("is-invalid");
    usernamealret.classList.replace("d-block","d-none");
   return true
  }
  else{
    userNameInput.classList.add("is-invalid");
    userNameInput.classList.remove("is-valid");
    usernamealret.classList.replace("d-none","d-block");
    return false
  }
}

function userpassValidation(){
  var regex=/^.{5,15}$/;
  var userpassalret=document.getElementById("userpassalret");
  if(regex.test(userPassInput.value)==true && userPassInput.value !=""){

    userPassInput.classList.add("is-valid");
    userPassInput.classList.remove("is-invalid");
    userpassalret.classList.replace("d-block","d-none");
   return true
  }
  else{
    userPassInput.classList.add("is-invalid");
    userPassInput.classList.remove("is-valid");
    userpassalret.classList.replace("d-none","d-block");
    return false
  }
}
function useremailValidation(){
  var regex=/@[a-z]{5,10}(\.com)$/
  var useremailalret=document.getElementById("useremailalret");
  if(regex.test(userEmailInput.value)==true && userEmailInput.value !=""){

    userEmailInput.classList.add("is-valid");
    userEmailInput.classList.remove("is-invalid");
    useremailalret.classList.replace("d-block","d-none");
   return true
  }
  else{
    userEmailInput.classList.add("is-invalid");
    userEmailInput.classList.remove("is-valid");
    useremailalret.classList.replace("d-none","d-block");
    return false
  }
}
function  userInputValidation(){
  usernameValidation();
   userpassValidation();
   useremailValidation();
  if(usernameValidation()==true &&  userpassValidation()==true && useremailValidation()==true){
    return true
  }
 
  else{
    return false
  }
}
function   isExist(){
var accountExistMsg=document.getElementById("accountExistMsg");
for(var i=0;i<userInfo.length;i++){
  if(userInfo[i].name.toLowerCase()==userNameInput.value.toLowerCase() || userInfo[i].email.toLowerCase()==userEmailInput.value.toLowerCase()){
    accountExistMsg.classList.replace("d-block","d-none");
    userNameInput.classList.remove("is-valid");
    userEmailInput.classList.remove("is-valid");
    userPassInput.classList.remove("is-valid");
   
    return true
  }

 
}

return false
}
var username=localStorage.getItem("username");
function login(){
  var loginEmail=document.getElementById("loginEmail");
  var loginPass=document.getElementById("loginPass");
  var loginBtn=document.getElementById("loginBtn");
  var wrongMsg=document.getElementById("wrongMsg");
  if(loginEmail.value=="" || loginPass.value==""){
   var fillMsg=document.getElementById("fillMsg");
   fillMsg.classList.replace("d-none","d-block");
   return false
  }
  for(var i=0;i<userInfo.length;i++){
    if(userInfo[i].email.toLowerCase()== loginEmail.value.toLowerCase() && userInfo[i].password.toLowerCase()==loginPass.value.toLowerCase()){
        localStorage.setItem("username",userInfo[i].name);
        loginBtn.setAttribute("href","wlcome.html")
    }
    else{
      
      wrongMsg.classList.replace("d-none","d-block");
    }
  }
}
function displayWelcomeUser(){
  document.getElementById("username").innerHTML="welcome "+username;
}
function logout(){
  localStorage.removeItem("username")
}