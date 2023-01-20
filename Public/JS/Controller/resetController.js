const buttonLogIn = document.querySelector('.btnInicio');
buttonLogIn.addEventListener('click', ChangePassword);

let email = document.querySelector('#txtEmail');
let password1 = document.querySelector('#txtpass1');
let password2 = document.querySelector('#txtpass2');

function ChangePassword() {
    let inputPass = password1.value;
    let inputPass2 = password2.value;
    let inputEmail = email.value;

    if (Validate(inputPass, inputEmail, inputPass2)) {
        SuccessMsg('Contraseña cambiada');
    }

}
function Validate(inputPass, inputEmail, inputPass2) {


    //Validating Email

    if (inputEmail == '') {
        ErrorMsg('Por favor ingrese su correo');
        InvalidInputMarked('txtEmail');
        return false;
    }

    if (!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(inputEmail))) {
        ErrorMsg('Por favor ingrese una dirección de correo válida');
        InvalidInputMarked('txtEmail');
        return false;
    }

    // Validating passwords

    if (inputPass == '') {
        ErrorMsg('Por favor ingrese su contraseña');
        InvalidInputMarked('txtpass1');
        return false;
    }

    if (inputPass != inputPass2) {
        ErrorMsg('Las contraseñas ingresadas no coinciden');
        InvalidInputMarked('txtpass1');
        InvalidInputMarked('txtpass2');
        return false;
    }
    return true
}

function InvalidInputMarked(inputID) {
    let obj = document.getElementById(inputID);
    let orig = obj.style;
    obj.style = 'border: 2px solid red;'

    setTimeout(function () {
        obj.style = orig;
    }, 5000);
}

function ErrorMsg(msg) {
    Swal.fire({
        title: 'Error!',
        text: msg,
        icon: 'error',
        confirmButtonText: 'Ok'
    })
}

function SuccessMsg(msg) {
    Swal.fire({
        title: 'Excelente!',
        text: msg,
        icon: 'success',
        confirmButtonText: 'Ok'
    })
}

