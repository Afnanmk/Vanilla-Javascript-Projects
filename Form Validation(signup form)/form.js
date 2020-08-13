const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const rePassword = document.getElementById('re_password');

const form = document.getElementById('signup-form');
const formInput = document.querySelector('.form-group');

const green = '#4CAF50';
const red = '#F44336';


function validateFirstName() {
    if (checkIfEmpty(firstName)) {
        return;
    }
    if (CheckIfOnlyLetters(firstName)) {
        return;
    }
    return true;

}

function validateLastName() {
    if (checkIfEmpty(lastName)) {
        return;
    }
    if (CheckIfOnlyLetters(lastName)) {
        return;
    }
    return true;

}


function validateEmail() {
    if (checkIfEmpty(email)) return;

    if (!containsCharacter(email, 1)) return;
    return true;
}

function validatePassword() {
    if (passEmpty(password)) return;
    if (!containsCharacter(password, 2)) return;
    if (!meetLength(password, 8)) return;
}

function validateConfirmPassword() {
    if (checkIfEmpty(re_password)) {
        return;
    }
    if (password.className !== 'valid') {
        setInvalid(re_password, 'Password must be valid first');
        return false;
    }
    if (password.value !== re_password.value) {
        setInvalid(re_password, 'Password did not match');
        return false;

    }
    return true;
}


function checkIfEmpty(field) {
    if (field.value.trim() === "") {
        setInvalid(field, `${field.name} cannot be empty`)
        return true;
    } else {
        setValid(field);
        return false;
    }
}

function CheckIfOnlyLetters(field) {
    if (/^[a-zA-Z]+$/.test(field.value)) {
        setValid(field);
        return true;
    } else {
        setInvalid(field, `${field.name} must contain only letters`)
        return false;
    }
}

function containsCharacter(field, code) {
    let regEx;
    switch (code) {
        case 1:
            regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return matchWithRegex(regEx, field, 'Email address must be valid');

        case 2:
            regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
            return passWithRegex(regEx, field, 'Password must contain at least one uppercase letter,one lowercase letter,one number and one special character');

        default:
            return false;
    }
}

function matchWithRegex(regEx, field, message) {
    if (field.value.match(regEx)) {
        setValid(field);
        return true;
    } else {
        setInvalid(field, message)
        return false;
    }
}

function passEmpty(field) {
    if (field.value.trim() === '') {
        passInvalid(field, `${field.name} cannot be empty`)
        return true;
    } else {
        passValid(field)
        return false;
    }
}

function passWithRegex(regEx, field, message) {
    if (field.value.match(regEx)) {
        passValid(field);
        return true;
    } else {
        passInvalid(field, message)
        return false;
    }
}

function meetLength(field, minLength) {
    if (field.value.length === minLength && field.value.length > minLength) {
        passValid(field);
        return true;
    } else if (field.value.length < minLength) {
        passInvalid(field, 'Password must be at least 8 characters long!');
        return false;
    }
}


function passInvalid(field, message) {
    field.className = "invalid";
    field.nextElementSibling.nextElementSibling.innerHTML = message;
    field.nextElementSibling.nextElementSibling.style.color = red;
}

function passValid(field) {
    field.className = "valid";
    field.nextElementSibling.nextElementSibling.innerHTML = '';
    field.nextElementSibling.nextElementSibling.style.color = green;
}


function setInvalid(field, message) {
    field.className = "invalid";
    field.nextElementSibling.innerHTML = message;
    field.nextElementSibling.style.color = red;
}

function setValid(field) {
    field.className = "valid";
    field.nextElementSibling.innerHTML = '';
    field.nextElementSibling.style.color = green;
}