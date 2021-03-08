const fName = document.getElementById("fullName");
const email = document.getElementById("email");
const address = document.getElementById("address");
const city = document.getElementById("city");
const state = document.getElementById("state");
const zip = document.getElementById("zip");
const dobLabel = document.getElementById("dobLabel");
const dob = document.getElementById("dob");

const continueButton = document.getElementById("submitBtn");
const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
const regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const regStreetAddress = /^[a-z0-9\s,'-]*$/i;
const regCity = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
const regZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

let usrName = "";
let usrEmail = "";
let isFirstForm = true;


function validateAge(){
    var bDate = dob.value;
    var bDay = +new Date(bDate);
    age = ~~ ((Date.now() - bDay) / (31557600000));
    if (age>=18){
        return true;
    } else {
        alert('Sorry! You must be 18 to enter!');
        return false;
    }
}


function validateZip(){
    if (!regZip.test(zip.value)){
        alert('Please enter valid zip.');
        return false
    } else {
        return true;
    }
}

function validateState(){
    if (state == " "){
        alert('Please enter valid state.');
        return false
    } else {
        return true;
    }
}

function validateCity(){
    if (!regCity.test(city.value)){
        alert('Please enter valid city');
        return false
    } else {
        return true;
    }
}

function validateAddress(){
    if (!regStreetAddress.test(address.value)){
        alert('Please enter valid address');
        return false
    } else {
        return true;
    }
}

const validateName =() =>{
    if (!regName.test(fName.value)){
        alert('Please enter first and last name.')
        return false;
    }
    else{
        usrName = fName;
        return true;
    }
}

function validateEmail(){
    let email = document.getElementById("email").value;
    if (!regEmail.test(email)){
        alert('Please enter valid email.')
        return false;
    } else {
        usrEmail = email;
        return true;
    }
}

function validateFirst(){
    let name = validateName();
    let email = validateEmail();
    if (name && email){
        isFirstForm = false;
        showHide();
    }
}

function validateSecond(){
    let isOfAge = validateAge();
    if(validateAddress() && validateCity() && validateState() && validateZip() && isOfAge){
        location.href = 'thankyou.html';
    }
}

function showHide(){
    fName.style.display = 'none';
    email.style.display = 'none';
    address.style.display = 'block';
    city.style.display = 'block';
    state.style.display = 'block';
    zip.style.display = 'block';
    dobLabel.style.display = 'inline';
    dob.style.display = 'inline';
    document.getElementById("submitBtn").innerText = 'Play Now';
}

continueButton.onclick = (e) => {
    e.preventDefault();
    if(isFirstForm){
        validateFirst();
    } else {
        validateSecond();
    }
    
}




