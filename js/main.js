var form = document.getElementById('form');
var username = document.getElementById('name');
var email = document.getElementById('email');
var password = document.getElementById('password');
var password2 = document.getElementById('password2');

form.addEventListener('submit',(e) => {
    e.preventDefault();
    validateInputs();
});


const setError = (element,msg) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = msg;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');

    var iconError = document.createElement('i');
    iconError.className = 'icon fas fa-exclamation-circle';
    inputControl.appendChild(iconError);
}

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');

    var iconCheck = document.createElement('i');
    iconCheck.className = 'icon fas fa-check-circle';
    inputControl.appendChild(iconCheck);
    document.querySelector('.fa-exclamation-circle').remove();
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue == '') {
        setError(username, 'Username is rquired');

    } else if(usernameValue.length < 4) {
        setError(username,'Username is so short')
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is rquired');

    } else if(!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is rquired');

    } else if(passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 chars');
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password, 'Plase confirm Your Password');

    } else if(password2Value !== passwordValue) {
        setError(password2, 'Password doesnt match');
    } else {
        setSuccess(password2);
    } 
};
var firstCard = document.querySelector('.first-card');
var btnFirstCard = document.querySelector('.first-card button');
var formContainer = document.querySelector('.form');

btnFirstCard.addEventListener('click', () => {
    formContainer.classList.add('show');
    firstCard.remove();
})



