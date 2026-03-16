const password = document.getElementById("password");

const bar = document.getElementById("strength-bar");
const text = document.getElementById("strength-text");

const lengthRule = document.getElementById("length");
const upperRule = document.getElementById("upper");
const numberRule = document.getElementById("number");
const specialRule = document.getElementById("special");

const toggle = document.getElementById("toggle");
const generateBtn = document.getElementById("generate");

toggle.onclick = function(){

if(password.type === "password"){
password.type = "text";
toggle.textContent = "Hide";
}else{
password.type = "password";
toggle.textContent = "Show";
}

};

password.addEventListener("input", () => {

let val = password.value;
let strength = 0;

if(val.length >= 8){
lengthRule.textContent="✔ At least 8 characters";
strength++;
}else{
lengthRule.textContent="❌ At least 8 characters";
}

if(/[A-Z]/.test(val)){
upperRule.textContent="✔ One uppercase letter";
strength++;
}else{
upperRule.textContent="❌ One uppercase letter";
}

if(/[0-9]/.test(val)){
numberRule.textContent="✔ One number";
strength++;
}else{
numberRule.textContent="❌ One number";
}

if(/[!@#$%^&*]/.test(val)){
specialRule.textContent="✔ One special character";
strength++;
}else{
specialRule.textContent="❌ One special character";
}

switch(strength){

case 1:
bar.style.width="25%";
bar.style.background="red";
text.innerText="Weak Password";
break;

case 2:
bar.style.width="50%";
bar.style.background="orange";
text.innerText="Medium Password";
break;

case 3:
bar.style.width="75%";
bar.style.background="yellowgreen";
text.innerText="Good Password";
break;

case 4:
bar.style.width="100%";
bar.style.background="green";
text.innerText="Strong Password";
break;

default:
bar.style.width="0%";
text.innerText="";
}

});

generateBtn.onclick = function(){

const chars =
"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

let passwordValue = "";

for(let i=0;i<12;i++){
passwordValue += chars[Math.floor(Math.random()*chars.length)];
}

password.value = passwordValue;

password.dispatchEvent(new Event("input"));

};