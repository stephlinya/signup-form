let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
let email = document.getElementById('email');
let password = document.getElementById('password');
let form = document.getElementById('form');
let firstNameError = document.getElementById('first-name__error');
let lastNameError = document.getElementById('last-name__error');
let emailError = document.getElementById('email__error');
let passwordError = document.getElementById('password__error');
let isValid = true;

function validateEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

}

form.addEventListener('submit', (e) => {
    let firstNameMessages = [];
    let lastNameMessages = [];
    let emailMessages = [];
    let passwordMessages = [];
    isValid;

    if (firstName.value === '' || firstName.value == null) {
        firstNameMessages.push('First Name cannot be empty');
        isValid = false;
    }

    if (lastName.value === '' || lastName.value == null) {
        lastNameMessages.push('Last Name cannot be empty');
        isValid = false;
    }

    if (email.value === '' || email.value == null) {
        emailMessages.push('Email cannot be empty'); 
        isValid = false;
    } else if(!validateEmail(email)){
            emailMessages.push('Email is not valid');
            isValid = false;
    } else {
        emailMessages.push('Email is valid');
    }

    if (password.value === '' || password.value == null) {
        passwordMessages.push('Password cannot be empty');
        isValid = false;
    }

    if (firstNameMessages.length > 0 || lastNameMessages.length > 0 || emailMessages.length > 0 || passwordMessages.length > 0) {
        e.preventDefault(); 
        firstNameError.innerText = firstNameMessages;
        lastNameError.innerText = lastNameMessages;
        emailError.innerText = emailMessages;
        passwordError.innerText = passwordMessages;
    }
    if (isValid === false) {
        document.getElementById("first-name").className = document.getElementById("first-name").className + "error";
    } else {
        document.getElementById("first-name").className = document.getElementById("first-name").className.replace("error", "focus");
    }

})

