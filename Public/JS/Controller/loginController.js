'use strict'

const inputEmail = document.querySelector('#txtEmail');
const inputPassword = document.querySelector('#txtPassword');
const btnSubmit = document.querySelector('#btnLogIn');

let listUsser = getProductList();


function GetCredencial() {
    let valueEmail = inputEmail.value;
    let valuePassword = inputPassword.value;
    if (validator(valueEmail, valuePassword)) {
        window.location.replace("../HTML/subIndex.html");

        let foundUsser = searchUsser(valueEmail, valuePassword);
        if (foundUsser == 'errorFound') {
            Swal.fire({
                icon: 'info',
                title: 'Aún no te has registrado',
                text: 'Te invitamos a registrarte!',
                footer: '<a href="./Signup.html">Regístrate aquí</a>'
            })
        } else {
            Redirect(foundUsser);
        }

    } else {
        Swal.fire({
            icon: 'error',
            title: 'Ingresó algún valor de forma incorrecta',
            text: '¡Revise su correo y contraseña!',
        })
    }
}

function validator(entryEmail, entryPassword) {
    if (!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(entryEmail)) || entryEmail == '') {
        return false
    }
    if (!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*?&]{5,12}/.test(entryPassword)) || entryPassword == '') {
        // Una mayuscula, una minuscula, un digito,minimo 5
        return false
    }
    return true
}

function searchUsser(email, password) {
    // let listUsser = getProductList();
    let valores = Object.values(listUsser);

    for (let i = 0; i < valores.length; i++) {
        let usserInfo = valores[i]
        if (usserInfo.email == email && usserInfo.password == password) {
            if (usserInfo.rol == 'admin') {
                const access = 'admin';
                return access
            };
            if (usserInfo.rol == 'vet') {
                const access = 'vet';
                return access;
            };
            if (usserInfo.rol == 'secretary') {
                const access = 'secretary';
                return access;
            };
            if (usserInfo.rol == 'usser') {
                const access = 'usser';
                return access;
            };
        }
    }
    const access = 'errorFound'
    return access
}
function Redirect(access) {
    if (access == 'admin') {
        window.location.href = "./admin.html";
    }
    if (access == 'vet') {
        window.location.href = "./veterinario.html";
    }
    if (access == 'secretary') {
        window.location.href = "./secretaria.html";
    }
    if (access == 'usser') {
        window.location.href = "./usuario.html";
    }
}
btnSubmit.addEventListener('click', GetCredencial)
SaveStorageUsser(listUsser);