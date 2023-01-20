'use strict';

let botonSolicitarReserva = document.getElementById('btnSolicitarReserva');
let inputDateEntrada = document.getElementById('txtDateEntrada');
let inputDateSalida = document.getElementById('txtDateSalida');
let inputNombreMascota = document.getElementById('txtNameMascota');
let inputRaza = document.getElementById('txtRaza');
let inputAlimento = document.getElementById('txtAlimento');
let inputSexo = document.getElementById('txtSexo');
let inputNombrePropietario = document.getElementById('txtNamePropietario');
let inputEmail = document.getElementById('txemail');
let inputTelefono = document.getElementById('txtelefono');
let inputServicios = document.getElementsByClassName('ServiciosAdi');
let inputComentarios = document.getElementById('txtComentarios')

botonSolicitarReserva.addEventListener('click', RegistrarReserva)

function RegistrarReserva() {
    let dinputDateEntrada = inputDateEntrada.value;
    let dinputDateSalida = inputDateSalida.value;
    let sinputNombreMascota = inputNombreMascota.value;
    let sinputRaza = inputRaza.value;
    let sinputAlimento = inputAlimento.value;
    let ninputSexo = Number(inputSexo.value);
    let sinputNombrePropietario = inputNombrePropietario.value;
    let sinputEmail = inputEmail.value;
    let sinputTelefono = inputTelefono.value;
    let sinputServicios = "";

    for (let i = 0; i < inputServicios.length; i++) {
        if (inputServicios[i].checked == true) {
            sinputServicios += inputServicios[i].value + "\n";
        }

    }
    let sinputComentarios = inputComentarios.value;

    if (ValidarDatos(dinputDateEntrada, dinputDateSalida, sinputNombrePropietario, sinputEmail, sinputTelefono, sinputNombreMascota, sinputRaza, sinputAlimento, ninputSexo) == false) {

        return;
    }
    var result = { msj: 'Registro completado exitosamente' };

    Swal.fire({
        title: 'Excelente!',
        text: result.msj,
        icon: 'success',
        confirmButtonText: 'OK'
    }).then(res => {
        //limpiarDatos();
    });

}

function ValidarDatos(pinputDateEntrada, pinputDateSalida, pinputNombrePropietario, pinputEmail, pinputTelefono, pinputNombreMascota, pinputRaza, pinputAlimento, pinputSexo) {

    if (pinputDateEntrada == '' || pinputDateEntrada == null || pinputDateEntrada == undefined) {
        ImprimirMsjError('Estimado usuario, la fecha de entrada es requerida para la reserva.');
        ResaltarlabelInvalido('lblDateEntrada');
        ResaltarInputInvalido('txtDateEntrada');
        return false;
    }
    if (new Date(pinputDateEntrada) <= new Date()) {

        ImprimirMsjError('Estimado usuario, la fecha de entrada debe ser mayor a hoy.');
        ResaltarlabelInvalido('lblDateEntrada');
        ResaltarInputInvalido('txtDateEntrada');
        return false;
    }
    if (pinputDateSalida == '' || pinputDateSalida == null || pinputDateSalida == undefined) {
        ImprimirMsjError('Estimado usuario, la fecha de salida es requerida para la reserva.');
        ResaltarlabelInvalido('lblDateSalida');
        ResaltarInputInvalido('txtDateSalida');
        return false;
    }
    if (new Date(pinputDateSalida) <= new Date(pinputDateEntrada)) {
        ImprimirMsjError('Estimado usuario, la fecha de salida debe ser mayor a la fecha de entrada.');
        ResaltarlabelInvalido('lblDateSalida');
        ResaltarInputInvalido('txtDateSalida');
        return false;
    }
    if (pinputNombreMascota == '' || pinputNombreMascota == null || pinputNombreMascota == undefined) {
        ImprimirMsjError('Estimado usuario, el nombre de la mascota es requerido para la reserva.');
        ResaltarlabelInvalido('lblNameMascota');
        ResaltarInputInvalido('txtNameMascota');
        return false;
    }
    if (pinputRaza == '' || pinputRaza == null || pinputRaza == undefined) {
        ImprimirMsjError('Estimado usuario, la raza de la mascota es requerida para la reserva.');
        ResaltarlabelInvalido('lblRaza');
        ResaltarInputInvalido('txtRaza');
        return false;
    }
    if (pinputAlimento == '' || pinputAlimento == null || pinputAlimento == undefined) {
        ImprimirMsjError('Estimado usuario, el tipo de alimento que consume la mascota es requerida.');
        ResaltarlabelInvalido('lblAlimento');
        ResaltarInputInvalido('txtAlimento');
        return false;
    }
    if (pinputSexo == '' || pinputSexo == null || pinputSexo == undefined) {
        ImprimirMsjError('Estimado usuario, el sexo de la mascota es requerido.');
        ResaltarlabelInvalido('lblSexo');
        ResaltarInputInvalido('txtSexo');
        return false;
    }
    if (pinputNombrePropietario == '' || pinputNombrePropietario == null || pinputNombrePropietario == undefined) {
        ImprimirMsjError('Estimado usuario, el nombre del propietario es requerido para la reserva.');
        ResaltarlabelInvalido('lblNamePropietario');
        ResaltarInputInvalido('txtNamePropietario');
        return false;
    }
    if (pinputEmail == '' || pinputEmail == null || pinputEmail == undefined) {
        ImprimirMsjError('Estimado usuario, el email del propietario es requerido para la reserva.');
        ResaltarlabelInvalido('lblemail');
        ResaltarInputInvalido('txemail');
        return false;
    }
    if (!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(pinputEmail))) {
        ImprimirMsjError('Estimado usuario, el email debe ser con el formato.');
        ResaltarlabelInvalido('lblemail');
        ResaltarInputInvalido('txemail');
        return false
    }
    if (pinputTelefono == '' || pinputTelefono == null || pinputTelefono == undefined) {
        ImprimirMsjError('Estimado usuario, el numero de teléfono del propietario es requerido para la reserva.');
        ResaltarlabelInvalido('lbltelefono');
        ResaltarInputInvalido('txtelefono');
        return false;
    }
    if (isNaN(pinputTelefono) == true) {
        ImprimirMsjError('Estimado usuario, para el número de teléfono solamente se permiten datos numéricos.');
        ResaltarlabelInvalido('lbltelefono');
        ResaltarInputInvalido('txtelefono');
        return false;
    }
    if (pinputTelefono.length != 8) {

        ImprimirMsjError('Estimado usuario, el numero de teléfono debe contener 8 dígitos solamente.');
        ResaltarlabelInvalido('lbltelefono');
        ResaltarInputInvalido('txtelefono');
        return false;
    }



}
function ImprimirMsjRegistro(pmensaje) {
    Swal.fire({
        title: 'Registrado!',
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

