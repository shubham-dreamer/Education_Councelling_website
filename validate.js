const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

//add event
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    validate();
})
//define validate function
const validate=()=>{
    const usernameval= username.value.trim();
    const emailval= email.value.trim();
    const phoneval= phone.value.trim();
    const passwordval= password.value.trim();
    const cpasswordval= cpassword.value.trim();
}
const isEmail=(emailval) =>{
    var atSymbol =emailval.indexOf("@");
    if(atSymbol<1) return false;
    var dot = emailval.indexOf('.');
    if(dot)
}


//validate username

if(usernameval ===""){
    setErrormsg(username,'username cannot be blank');
}
else if(usernameval.length<=2){
    setErrormsg(username,'username min 3 char');
}
else if(!isNaN(usernameval)){
    setErrormsg(username,'username should be in alphabet');
}
else{
    setSuccesMsg(username);
}
//validate email
if(emailval ===""){
    setErrormsg(email,'email cannot be blank');
}
else if(!isEmail(emailval)){
    setErrormsg(username,'Not a valid email');
}

else{
    setSuccesMsg(email);
}
