var name = document.getElementById('name');
var email = document.getElementById('email');
var phone = document.getElementById('phone');
var button = document.querySelector('.btn');

function checkInput() {
    if (name.value !== "") {
        button.style.backgroundColor = '#000000';  
    } else {
        button.style.backgroundColor = '#2ecc71'
    }
}