let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
let email = document.getElementById('email');
let password = document.getElementById('password');
let form = document.getElementById('form');
let firstNameError = document.getElementById('first-name__error');
let lastNameError = document.getElementById('last-name__error');
let emailError = document.getElementById('email__error');
let passwordError = document.getElementById('password__error');

form.addEventListener('submit', (e) => {
    let firstNameMessages = [];
    let lastNameMessages = [];
    let emailMessages = [];
    let passwordMessages = [];

    if (firstName.value === '' || firstName.value == null) {
        firstNameMessages.push('First Name cannot be empty');
    }

    if (lastName.value === '' || lastName.value == null) {
        lastNameMessages.push('Last Name cannot be empty');
    }

    if (email.value === '' || email.value == null) {
        emailMessages.push('Email cannot be empty');
    }

    if (password.value === '' || password.value == null) {
        passwordMessages.push('Password cannot be empty');
    }

    if (firstNameMessages.length > 0 || lastNameMessages.length > 0 || emailMessages.length > 0 || passwordMessages.length > 0) {
        e.preventDefault(); 
        firstNameError.innerText = firstNameMessages;
        lastNameError.innerText = lastNameMessages;
        emailError.innerText = emailMessages;
        passwordError.innerText = passwordMessages;
    }
})