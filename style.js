let form=document.getElementById("form")
let validationname= document.getElementById("validationname")
let validationphone= document.getElementById("validationphone")
let validationemail= document.getElementById("validationemail")
form.addEventListener('submit',submitData)
function submitData(event){

  event.preventDefault();
  let name = form['name'].value
  let phone = form['phone'].value
  let email = form['email'].value
  if(name.trim() == ""){ 
    error = "Your name is required"
}
 else if (name.length < 12){
  error = "Invalid name"  
}else {
  validationname.value = name
  error = ""
}
document.getElementById("nameError").innerHTML = error

//for phone
if (phone == ""){
  error= "Your phone number is required"
}
else if (phone.length !=11){
  error= "Invalid phone number"
}
else if( !( phone.startsWith('080') || phone.startsWith('090') || phone.startsWith('081') || phone.startsWith('01') || phone.startsWith('091'))){
  error="Invalid phone numer";
  validationphone = "" 
}
else{
  validationphone.value = phone
  error = ""
}
document.getElementById("phoneError").innerHTML = error

//for email
if(email == ""){
error = "Email is required"
validationemail = ""
}
else if (email.includes('@') == false || email.includes('.') ==false){
error ="Invalid email";  
validationemail = "" 
}else{
validationemail.value = email
}
document.getElementById("validationemail").innerHTML = error

}
