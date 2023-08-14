const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validateForm() {
    //  Using Constraints API
    isValid = form.checkValidity;

    // Style main message for an error
    if (!isValid) {
        message.textContent = "Please fill out all fields";
        message.style.color = "red";
        messageContainer.style.borderColor = "red"
        return;
    }

    // Validate the passwords match
    const password1 = password1El.value;
    const password2 = password2El.value;
    if (password1 === password2){
        passwordsMatch = true;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor ='green';
    } else {
        passwordsMatch= false;
        message.textContent = 'Make sure passwors match';
        message.style.color= 'red';
        messageContainer.style.borderColor= 'red';
        password1El.style.borderColor= 'red';
        password2El.style.borderColor = 'red';
        return;
    }
    // If form is valid and passwords match
    if (isValid && passwordsMatch) {
        message.textContent = 'Successfully Registered'
        message.style.color = 'green';

        // form.submit();
    }

}

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value,
    };

    console.log({user})
}

function processFormData(e = SubmitEvent.prototype) {
    e.preventDefault();
    // Validate Form
    validateForm();
    if (isValid && passwordsMatch) {
        storeFormData;
    }
}

//  Event Listiner
form.addEventListener('submit', processFormData)