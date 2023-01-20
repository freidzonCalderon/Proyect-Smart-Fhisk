const btn = document.querySelector('.btnAccept');
const usserName = document.querySelector('#txtUserName');
const mail = document.querySelector('#txtMail');
const telInput = document.querySelector('#txtTel');
const petName = document.querySelector('#txtPetName');
const docName = document.querySelector('#txtDocName');

btn.addEventListener('click', function () {
    let inputName = usserName.value;
    let inputMail = mail.value;
    let inputNumber = telInput.value;
    let inputPetName = petName.value;
    let inputDocName = docName.value;

    if (validar(inputName, inputMail, inputNumber, inputPetName, inputDocName)) {
        ImprimirMsjExito('Datos guardados correctamente')
    }
});

function validar(usserName, mail, telInput, petName, docName) {

    if (usserName == '' || usserName === null) {
        ImprimirMsjError('El nombre es un campo requerido y solo puede contener letras.');
        return false;
    }

    if (mail === null) {
        ImprimirMsjError('El correo es un campo requerido.');
        return false;
    }

    if (telInput === null || telInput.length < 8 || telInput.length > 8) {
        ImprimirMsjError('El teléfono es un campo requerido y debe ser un número telefónico válido.');
        return false;
    }

    if (petName == '' || petName === null) {
        ImprimirMsjError('Ingrese el nombre de la mascota.');
        return false;
    }

    if (docName == '' || docName === null) {
        ImprimirMsjError('Ingrese el nombre del doctor.');
        return false;
    }
    return true;
}

function ImprimirMsjExito(pmensaje) {
    Swal.fire({
        title: 'Éxitoso!',
        text: pmensaje,
        icon: 'success',
        confirmButtonText: 'OK'
    });
}

function ImprimirMsjError(pmensaje) {
    Swal.fire({
        title: 'Error!',
        text: pmensaje,
        icon: 'error',
        confirmButtonText: 'OK'
    });
}
