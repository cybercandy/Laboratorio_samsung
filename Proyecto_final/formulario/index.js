const formulario = document.getElementById("registro");
const usernameEl = document.getElementById("nombre");
const firstSurEl = document.getElementById("primer_apellido");
const secondSurEl = document.getElementById("segundo_apellido");
const emailEl = document.getElementById("email");
const loginEl = document.getElementById("login");
const passwordEl = document.querySelector('#clave');
const confirmPasswordEl = document.querySelector('#confirmacion');
const consultarButton = document.getElementById("consultar");


const checkUsername = () => {

    let valid = false;

    const username = usernameEl.value.trim();

    if (!isRequired(username)) {
        showError(usernameEl, 'Rellene este campo');
    } else {
        showSuccess(usernameEl);
        valid = true;
    }
    return valid;
};

const checkFirstSurname = () => {

    let valid = false;

    const fSurname = firstSurEl.value.trim();

    if (!isRequired(fSurname)) {
        showError(firstSurEl, 'Rellene este campo');
    } else {
        showSuccess(firstSurEl);
        valid = true;
    }
    return valid;
};

const checkSecondSurname = () => {

    let valid = false;

    const sSurname = secondSurEl.value.trim();

    if (!isRequired(sSurname)) {
        showError(secondSurEl, 'Rellene este campo');
    } else {
        showSuccess(secondSurEl);
        valid = true;
    }
    return valid;
};

const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Rellene este campo');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email inválido');
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

const checkLogin = () => {

    let valid = false;

    const login = loginEl.value.trim();

    if (!isRequired(login)) {
        showError(loginEl, 'Rellene este campo');
    } else {
        showSuccess(loginEl);
        valid = true;
    }
    return valid;
};

const checkPassword = () => {
    let valid = false;

    const min=4,
        max = 8;

    const password = passwordEl.value.trim();

    if (!isRequired(password)) {
        showError(passwordEl, 'Rellene este campo');
    }else if(!isBetween(password.length, min, max)){
        showError(passwordEl, "Debe tener una extensión de entre 4 y 8 caracteres");
    } else {
        showSuccess(passwordEl);
        valid = true;
    }

    return valid;
};

const checkConfirmPassword = () => {
    let valid = false;

    const min=4,
        max = 8;
    
    const confirmPassword = confirmPasswordEl.value.trim();
    const password = passwordEl.value.trim();

    if (!isRequired(confirmPassword)) {
        showError(confirmPasswordEl, 'Rellene este campo');
    } else if (password !== confirmPassword) {
        showError(confirmPasswordEl, 'Las contraseñas no coinciden');
    } else if(!isBetween(confirmPassword.length, min, max)){
        showError(confirmPasswordEl, 'Debe tener una extensión de entre 4 y 8 caracteres');
    } else {
        showSuccess(confirmPasswordEl);
        valid = true;
    }

    return valid;
};

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isRequired = value => value === '' ? false : true;

const isBetween = (length, min, max) => length < min || length > max ? false : true;

const showError = (input, message) => {
        
    const formField = input.parentElement;
    
    formField.classList.remove('success');
    formField.classList.add('error');

    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}

formulario.addEventListener("submit", function (e) {
    
    e.preventDefault();

    let isUsernameValid = checkUsername(),
        isFirstSurnameValid = checkFirstSurname(),
        isSecondSurnameValid = checkSecondSurname(),
        isEmailValid = checkEmail(),
        isLoginValid = checkLogin(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword();

    let isFormValid = isUsernameValid &&
        isFirstSurnameValid &&
        isSecondSurnameValid &&
        isEmailValid &&
        isLoginValid &&
        isPasswordValid &&
        isConfirmPasswordValid;
    
        
    if (isFormValid) {

        let formData = new FormData(formulario);
        formData.append('clave', passwordEl.value);

        fetch('form.php', {
            method: 'POST',
            body: formData
        })
        .then(function(response) {
            if (response.ok) {
                return response.text();
            } else {
                throw new Error('Error en la respuesta del servidor');
            }
        })
        .then(function(data) {

            // Mostrar la respuesta del servudor
            alert(data);

            if (data.includes("Registro completado con éxito")){

                //Mostrar el botón de consultar, si todo va bien
                document.getElementById("consultar").style.display = "inline";


            }else{
                document.getElementById("consultar").style.display = "none";
                formulario.reset();
            }

    

        })
        .catch(function(error) {
            // Control de los errores de la solicitud
            console.error(error);
        });
    }
});


// Redireccionar al hacer clic en el botón de consultar
consultarButton.addEventListener("click", function () {
    window.location.href = "consulta_usr.php";
});

    
const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

formulario.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'username':
            checkUsername();
            break;
        case 'firstSurname':
            checkFirstSurname();
            break;
        case 'secondSurname':
            checkSecondSurname();
            break;
        case 'email':
            checkEmail();
            break;
        case 'login':
            checkLogin();
            break;
        case 'password':
            checkPassword();
            break;
        case 'confirm-password':
            checkConfirmPassword();
            break;
    }
}));
    

    