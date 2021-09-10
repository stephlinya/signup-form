let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
let email = document.getElementById('email');
let password = document.getElementById('password');
let form = document.getElementById('form');
let errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let messages = [];
    if (firstName.value === '' || firstName.value == null) {
        messages.push('First Name is required');
    }

    if (lastName.value === '' || lastName.value == null) {
        messages.push('Last Name is required');
    }

    if (messages.length > 0) {
        e.preventDefault(); 
        errorElement.innerText = messages.join (", ");
    }
})