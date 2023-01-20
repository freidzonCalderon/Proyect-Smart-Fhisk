"use strict";
let botonRegistrarse = document.getElementById("btnSignUp");
let inputUserName = document.getElementById("txtUserName");
let inputCedula = document.getElementById("txtCedula");
let inputEmail = document.getElementById("txtEmail");
let inputTelefono = document.getElementById("txtTel");
let inputPass = document.getElementById("txtPassword");
let inputConfirmPass = document.getElementById("txtPassConfirmation");
let input_id = document.getElementById("txt_id");

botonRegistrarse.addEventListener("click", RegistrarUsuario);

let queryString, urlParams, _id;

async function RegistrarUsuario() {
  let sinputUserName = inputUserName.value;
  let ninputCedula = inputCedula.value;
  let sinputEmail = inputEmail.value;
  let ninputTelefono = inputTelefono.value;
  let sinputPass = inputPass.value;
  let sinputConfirmPass = inputConfirmPass.value;

  //   let s_id = input_id.value;

  if (
    Validator(
      sinputUserName,
      ninputCedula,
      sinputEmail,
      ninputTelefono,
      sinputPass,
      sinputConfirmPass
    ) == false
  ) {
    return;
  }

  let result = null;

  result = await RegisterUssers(
    // s_id,
    sinputUserName,
    ninputCedula,
    sinputEmail,
    ninputTelefono,
    sinputPass,
    sinputConfirmPass
  );

  if (result.err) {
    ImprimirMsjError(result.err);
  } else {
    Swal.fire({
      icon: "success",
      title: "¡Su registro se realizó con éxito!",
      text: "¡Ahora puedes acceder a nuestra plataforma Moka!",
      footer: '<a href="./logIn.html">Puedes ingresar aquí</a>',
    });
    cleanInputs();
  }

  //   Swal.fire({
  //     icon: "success",
  //     title: "¡Su registro se realizó con éxito!",
  //     text: "¡Ahora puedes acceder a nuestra plataforma Moka!",
  //     footer: '<a href="./logIn.html">Puedes ingresar aquí</a>',
  //   });
}

function Validator(
  pinputUserName,
  pinputCedula,
  pinputEmail,
  pinputTelefono,
  pinputPass,
  pinputConfirmPass
) {
  let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  let regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*?&]{5,12}/;
  let regexCedula = /^[0-9]{9,9}$/;
  let regexTelefono = /^[0-9]{8,8}$/;

  if (
    pinputUserName == "" ||
    pinputUserName == null ||
    pinputUserName == undefined
  ) {
    ImprimirMsjError("El nombre es requerido para el registro.");
    ResaltarInputInvalido("txtUserName");
    return false;
  }
  if (!pinputCedula) {
    ImprimirMsjError("La cédula es requerida para el registro.");
    ResaltarInputInvalido("txtCedula");
    return false;
  }
  if (regexCedula.test(pinputCedula) == false) {
    ImprimirMsjError("La cédula debe contener 9 dígitos.");
    ResaltarInputInvalido("txtCedula");
    return false;
  }

  if (!pinputEmail) {
    ImprimirMsjError("El email es requerido para el registro.");
    ResaltarInputInvalido("txtEmail");
    return false;
  }
  if (regexEmail.test(pinputEmail) == false) {
    ImprimirMsjError("El email no cumple con el formato permitido.");
    ResaltarInputInvalido("txtEmail");
    return false;
  }
  if (!pinputTelefono) {
    ImprimirMsjError("El teléfono es requerido para el registro.");
    ResaltarInputInvalido("txtTel");
    return false;
  }
  if (regexTelefono.test(pinputTelefono) == false) {
    ImprimirMsjError("El teléfono debe contener solamente 8 dígitos.");
    ResaltarInputInvalido("txtTel");
    return false;
  }
  if (!pinputPass) {
    ImprimirMsjError("La contraseña es requerida para el registro.");
    ResaltarInputInvalido("txtPassword");
    return false;
  }
  if (regexPass.test(pinputPass) == false) {
    ImprimirMsjError(
      "La contraseña debe contener mínimo 5 caracteres. Al menos 1 mayúscula, 1 minúscula y 1 número."
    );
    ResaltarInputInvalido("txtPassword");
    return false;
  }
  if (!pinputPass) {
    ImprimirMsjError(
      "Estimado usuario, la confirmación debe ser igual a la contraseña."
    );
    ResaltarInputInvalido("txtPassConfirmation");
    return false;
  }
}

function cleanInputs() {
  inputUserName.value = "";
  inputCedula.value = "";
  inputEmail.value = "";
  inputTelefono.value = "";
  inputPass.value = "";
  inputConfirmPass.value = "";
}

function ImprimirMsjRegistro(pmensaje) {
  Swal.fire({
    title: "Registrado!",
    text: pmensaje,
    icon: "success",
    confirmButtonText: "OK",
  });
}
function ImprimirMsjError(pmensaje) {
  Swal.fire({
    title: "Error!",
    text: pmensaje,
    icon: "error",
    confirmButtonText: "OK",
  });
}
function ResaltarInputInvalido(pInputId) {
  let elementoLabel = document.getElementById(pInputId);
  let styleOrigin = elementoLabel.style;

  elementoLabel.style = "border: 1px solid red;";
  setTimeout(function () {
    elementoLabel.style = styleOrigin;
  }, 5000);
}
