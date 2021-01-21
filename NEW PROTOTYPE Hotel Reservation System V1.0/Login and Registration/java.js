//Login and Register Click Button
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const conatiner = document.querySelector(".container");

sign_up_btn.addEventListener('click', () => {
    conatiner.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () => {
    conatiner.classList.remove("sign-up-mode");
});


var username = document.getElementById('usernameE');
var password = document.getElementById('passwordE');
var contactno = document.getElementById('contactE');

//reg
function store() {
    var regx = /^(09|\+639)\d{9}$/;
    var num = document.getElementById('contactE').value;
    if(regx.test(num)){
    localStorage.setItem('usernameE', username.value);
    localStorage.setItem('contactE', contactno.value);
    localStorage.setItem('passwordE', password.value);
    }else{
        alert("invalid Number!");
        return true;
    }
    

}

//local login
function getInfo(){
    var storeduser = localStorage.getItem('usernameE');
    var storedpass = localStorage.getItem('passwordE');

    var userName = document.getElementById('username');
    var userPass = document.getElementById('password');

    if(userName.value == storeduser && userPass.value == storedpass) {
        alert("Successfuly Login!");
        location.replace("index.html")
        return true;
    }
        alert("ERROR");
        return false;
}
