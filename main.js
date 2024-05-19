let nameErr = document.querySelector(".name-error");
let numErr = document.querySelector(".num-error");
let emailErr = document.querySelector(".email-error");
let subErr = document.querySelector(".sub-error");

let nameInp = document.querySelector(".name-inp");
let numInp = document.querySelector(".num-inp");
let emailInp = document.querySelector(".email-inp");
let submit = document.querySelector("button");

let nameReg = /(\w{4})(\s{1})(\w{4})/;
let numReg = /(\d{3})\s(\d{3})\s(\d{4})/;
let emailReg = /\w+@\w+.\w+/;

let icon1 = document.querySelector(".icon-1");
let icon2 = document.querySelector(".icon-2");
let icon3 = document.querySelector(".icon-3");

nameInp.onblur = function () {
    if(nameInp.value.length === 0){
        nameErr.innerHTML = "Fullname Is Required";
        return false;
    }
    else if (nameReg.test(nameInp.value) === false) {
        nameErr.innerHTML = "Write A Full Name";
        return false;
    }
    else if(nameReg.test(nameInp.value) === true) {
        icon1.style.display = "flex";
        nameErr.style.display = "none";
        return true;
    } 
}

numInp.onblur = function () {
    if(numInp.value.length === 0){
        numErr.innerHTML = "Phone no Is Required";
        return false;
    }
    if (numReg.test(numInp.value) === false) {
        numErr.innerHTML = "Write A Correct Phone Number";
        return false;
    }
    if(numReg.test(numInp.value) === true) {
        icon2.style.display = "flex";
        numErr.style.display = "none";
        return true;
    } 

}
emailInp.onblur = function () {
    if(emailInp.value.length === 0){
        emailErr.innerHTML = "Email Is Required";
        return false;
    }
    if (emailReg.test(emailInp.value) === false) {
        emailErr.innerHTML = "Write A Correct Email";
        return false;
    }
    if(emailReg.test(emailInp.value) === true) {
        icon3.style.display = "flex";
        emailErr.style.display = "none";
        return true;
    } 

}

submit.onclick = function (e) {
    if(nameInp.value.length === 0 || numInp.value.length === 0 || emailInp.value.length === 0) {
        e.preventDefault();
        nameErr.innerHTML = "Fullname Is Required";
        numErr.innerHTML = "Phone no Is Required";
        emailErr.innerHTML = "Email Is Required";
        subErr.innerHTML = "Please Fill The Required fields";
    } 
    return true;
}
