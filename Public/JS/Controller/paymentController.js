'use strict';

let botonRegistrarTarjeta = document.getElementById('btnRegistrarTarjeta');
let inputNombreTarjeta = document.getElementById('txtNombreTarjeta');
let inputNumeroTarjeta = document.getElementById('numTarjeta');
let inputNumeroVencimiento = document.getElementById('DateVencimiento');
let inputNumeroCVC = document.getElementById('numCVC');

botonRegistrarTarjeta.addEventListener('click', RegistarDatos);


function RegistarDatos() {

    let sinputNombreTarjeta = inputNombreTarjeta.value;
    let ninputNumeroTarjeta = inputNumeroTarjeta.value;
    let ninputDateVencimiento = inputNumeroVencimiento.value;
    let ninputNumeroCVC = inputNumeroCVC.value;
    let tipoTarjeta = null;

    if (ninputNumeroTarjeta[0] === "3") {
        tipoTarjeta = 1;
        // American Express
    } else if (ninputNumeroTarjeta[0] === "4") {
        tipoTarjeta = 2;
        //Visa
    } else if (ninputNumeroTarjeta[0] == "5") {
        tipoTarjeta = 3;
        //Master Card
    } else {
        tipoTarjeta = 4;
        //NO valida
    }
    if (ValidarDatos(sinputNombreTarjeta, ninputNumeroTarjeta, tipoTarjeta, ninputDateVencimiento, ninputNumeroCVC) == false) {
        return;
    }
    var result = { msj: 'Pago realizado con éxito' };

    Swal.fire({
        title: 'Excelente!',
        text: result.msj,
        icon: 'success',
        confirmButtonText: 'Ok'
    }).then(res => {
        //limpiarDatos();
    });
}


function ValidarDatos(pinputNombreTarjeta, pinputNumeroTarjeta, ptipoTarjeta, pninputDateVencimiento, pinputNumeroCVC) {

    if (pinputNombreTarjeta == '' || pinputNombreTarjeta == null || pinputNombreTarjeta == undefined) {
        ImprimirMsjError('Estimado usuario, el nombre del tarjetahabiente es requerido.');
        ResaltarlabelInvalido('lblNombreTarjeta');
        ResaltarInputInvalido('txtNombreTarjeta');
        return false;
    }
    if (pinputNumeroTarjeta == '' || pinputNumeroTarjeta == null || pinputNumeroTarjeta == undefined) {
        ImprimirMsjError('Estimado usuario, el número de tarjeta es requerido.');
        ResaltarlabelInvalido('lblNumeroTarjeta');
        ResaltarInputInvalido('numTarjeta');
        return false;
    }
    if (ptipoTarjeta == 1 && pinputNumeroTarjeta.length != 15) {
        ImprimirMsjError('Estimado usuario, las tarjetas American Express deben estar compuestas por 15 dígitos.');
        ResaltarlabelInvalido('lblNumeroTarjeta');
        ResaltarInputInvalido('numTarjeta');
        return false;
    }
    if (ptipoTarjeta == 2 && pinputNumeroTarjeta.length != 16) {
        ImprimirMsjError('Estimado usuario, las tarjetas Visa deben estar compuestas por 16 dígitos.');
        ResaltarlabelInvalido('lblNumeroTarjeta');
        ResaltarInputInvalido('numTarjeta');
        return false;
    }
    if (ptipoTarjeta == 3 && pinputNumeroTarjeta.length != 16) {
        ImprimirMsjError('Estimado usuario, las tarjetas MasterCard deben estar compuestas por 16 dígitos.');
        ResaltarlabelInvalido('lblNumeroTarjeta');
        ResaltarInputInvalido('numTarjeta');
        return false;
    }
    if (ptipoTarjeta == 4) {
        ImprimirMsjError('Estimado usuario, este tipo de tarjeta no es permitido.');
        ResaltarlabelInvalido('lblNumeroTarjeta');
        ResaltarInputInvalido('numTarjeta');
        return false;
    }

    if (pninputDateVencimiento == '' || pninputDateVencimiento == null || pninputDateVencimiento == undefined) {
        ImprimirMsjError('Estimado usuario, la fecha de vencimiento de la tarjeta es requerida.');
        ResaltarlabelInvalido('lblDateVencimiento');
        ResaltarInputInvalido('DateVencimiento');
        return false;
    }
    if (pninputDateVencimiento.length < 9) {
        ImprimirMsjError('Estimado usuario, indique una fecha válida.');
        ResaltarlabelInvalido('lblDateVencimiento');
        ResaltarInputInvalido('DateVencimiento');
        return false;
    }
    if (pinputNumeroCVC == '' || pinputNumeroCVC == null || pinputNumeroCVC == undefined) {
        ImprimirMsjError('Estimado usuario, el CVC es requerido.');
        ResaltarlabelInvalido('lblNumCVC');
        ResaltarInputInvalido('numCVC');
        return false;
    }
    if (ptipoTarjeta == 1 && pinputNumeroCVC.length != 4) {
        ImprimirMsjError('Estimado usuario, el CVC debe contener 4 dígitos.');
        ResaltarlabelInvalido('lblNumCVC');
        ResaltarInputInvalido('numCVC');
        return false;
    }
    if ((ptipoTarjeta == 2 || ptipoTarjeta == 3) && pinputNumeroCVC.length != 3) {
        ImprimirMsjError('Estimado usuario, el CVC debe contener 3 dígitos.');
        ResaltarlabelInvalido('lblNumCVC');
        ResaltarInputInvalido('numCVC');
        return false;
    }
    if (isNaN(pinputNumeroCVC) == true) {
        ImprimirMsjError('Estimado usuario, el CVC permite solamente formato numérico.');
        ResaltarlabelInvalido('lblNumCVC');
        ResaltarInputInvalido('numCVC');
        return false;
    }

}
inputNumeroVencimiento.addEventListener('input', function () {
    let number = inputNumeroVencimiento.value
    let currentTime = new Date();
    let thisYear = currentTime.getFullYear()

    if (number.length == 2) {
        inputNumeroVencimiento.value = `${number} / `;
    }
    else if (number.length == 4) {
        inputNumeroVencimiento.value = '';
    }
    else if (number.length == 9) {
        let saveDateExpiration = inputNumeroVencimiento.value;
        let dayExp = saveDateExpiration.slice(0, 2);
        let yearExp = saveDateExpiration.slice(5, 9);
        if (yearExp < thisYear) {
            ImprimirMsjError('Estimado usuario, el año de vencimiento de su tarjeta es incorrecto.');
        }
        if (dayExp > 12) {
            ImprimirMsjError('Estimado usuario, la fecha de expiración de su tarjeta es incorrecta.');
        }
    }
});

function ImprimirMsjError(pmensaje) {
    Swal.fire({
        title: 'Error!',
        text: pmensaje,
        icon: 'error',
        confirmButtonText: 'Ok'
    });
}
function ResaltarlabelInvalido(pLabelId) {
    let elementoLabel = document.getElementById(pLabelId);
    let styleOrigin = elementoLabel.style;

    elementoLabel.style = 'color:red';

    setTimeout(function () {
        elementoLabel.style = styleOrigin;
    }, 5000);

}
function ResaltarInputInvalido(pInputId) {
    let elementoLabel = document.getElementById(pInputId);
    let styleOrigin = elementoLabel.style;

    elementoLabel.style = 'border: 1px solid red;';
    setTimeout(function () {
        elementoLabel.style = styleOrigin;
    }, 5000);
}
