'use strict';

let inputAddAppointment = document.getElementById('addAppointment');

let inputUserName = document.getElementById('userName');
let inputUserLastName = document.getElementById('userLastName');
let inputUserEmail = document.getElementById('userEmail');
let inputUserTel = document.getElementById('userTel');

let inputPetName = document.getElementById('petName');
let inputPetRace = document.getElementById('petRace');

let inputMotives = document.getElementById('motives');

let btnGenerateAppointment = document.getElementById('btnAccept');

btnGenerateAppointment.addEventListener('click', GenerarCita);

function GenerarCita(){
    let addAppointmentInput = inputAddAppointment.value;

    let userNameInput = inputUserName.value;
    let userLastName = inputUserLastName.value;
    let userEmail = inputUserEmail.value;
    let userTel = inputUserTel.value;

    let petName = inputPetName.value;
    let petRace = inputPetRace.value;

    let motives = inputMotives.value;

    if( ValidarDatos(
        addAppointmentInput,
        userNameInput,
        userLastName,
        userEmail,
        userTel,
        petName,
        petRace,
        motives,
    ) == false){

        return;
    }

    var result = { msj: 'Cita generada exitosamente' };

    Swal.fire({
        title:'Excelente!',
        text: result.msj,
        icon:'success',
        confirmButtonText: 'OK'
    }).then( res => {
        //limpiarDatos();
    });

}

function ValidarDatos(
    pAddAppointmentInput,
    pUserNameInput,
    pUserLastName,
    pUserEmail,
    pUserTel,
    pPetName,
    pPetRace,
    pMotives,
){
    const pattern = new RegExp('^[A-Za-z]+$', 'i');

    if (new Date(pAddAppointmentInput) < new Date() || pAddAppointmentInput === null) {
        ImprimirMsjError('Estimado usuario, la fecha es un campo requerido y debe ser mayor a la fecha actual.');
        ResaltarlabelInvalido('lblAddAppointment');
        ResaltarInputInvalido('addAppointment');
        return false;
    }
    
    if (!pattern.test(pUserNameInput) || pUserNameInput === null) {
        ImprimirMsjError('Estimado usuario, el nombre es un campo requerido y solo puede contener letras.');
        ResaltarlabelInvalido('lblUserName');
        ResaltarInputInvalido('userNameInput');
        return false;
    }
    
    if (!pattern.test(pUserLastName) || pUserLastName === null) {
        ImprimirMsjError('Estimado usuario, el apellido es un campo requerido y solo puede contener letras.');
        ResaltarlabelInvalido('lblUserLastName');
        ResaltarInputInvalido('userLastName');
        return false;
    }
    
    if (pUserEmail === null) {
        ImprimirMsjError('Estimado usuario, el correo es un campo requerido.');
        ResaltarlabelInvalido('lblUserEmail');
        ResaltarInputInvalido('userEmail');
        return false;
    }
    
    if (pUserTel === null || pUserTel.length < 8 || pUserTel.length > 8) {
        ImprimirMsjError('Estimado usuario, el teléfono es un campo requerido y debe ser un número telefónico válido.');
        ResaltarlabelInvalido('lblUserTel');
        ResaltarInputInvalido('userTel');
        return false;
    }
    
    if (!pattern.test(pPetName) || pPetName === null) {
        ImprimirMsjError('Estimado usuario, el nombre de la mascota es un campo requerido y solo puede contener letras.');
        ResaltarlabelInvalido('lblPetName');
        ResaltarInputInvalido('petName');
        return false;
    }
    
    if (!pattern.test(pPetRace) || pPetRace === null) {
        ImprimirMsjError('Estimado usuario, la raza de la mascota es un campo requerido y solo puede contener letras.');
        ResaltarlabelInvalido('lblPetRace');
        ResaltarInputInvalido('petRace');
        return false;
    }
    
    if (!pattern.test(pMotives) || pPetRace === null) {
        ImprimirMsjError('Estimado usuario, los motivos de la cita es un campo requerido y solo puede contener letras.');
        ResaltarlabelInvalido('');
        ResaltarInputInvalido('motives');
        return false;
    }
}

function ImprimirMsjExito(pmensaje){
    Swal.fire({
        title:'Éxitoso!',
        text: pmensaje,
        icon: 'success',
        confirmButtonText:'OK'
    });
}

function ImprimirMsjError(pmensaje){
    Swal.fire({
        title:'Error!',
        text: pmensaje,
        icon: 'error',
        confirmButtonText:'OK'
    });
}

function ResaltarlabelInvalido(pLabelId){
    let elementoLabel = document.getElementById(pLabelId);
    let styleOrigin = elementoLabel.style;
    
    elementoLabel.style='color:red';

    setTimeout(function(){
        elementoLabel.style=styleOrigin;
    },5000);
}

function ResaltarInputInvalido(pInputId){
    let elementoLabel = document.getElementById(pInputId);
    let styleOrigin = elementoLabel.style;
    
    elementoLabel.style='border: 1px solid red;';
    setTimeout(function(){
        elementoLabel.style=styleOrigin;
    },5000);
}