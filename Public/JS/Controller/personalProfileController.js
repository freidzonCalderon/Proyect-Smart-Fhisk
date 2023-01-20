'use strict'

const btn = document.querySelector('#btnModify');
const txtName = document.querySelector('#txtName');
const txtAddress = document.querySelector('#txtAddress');
const txtStatus = document.querySelector('#txtStatus');
const password = document.querySelector('#txtpassword');
const number = document.querySelector('#numTel');
const numberID = document.querySelector('#numID');


btn.addEventListener('click', function () {
    let inputName = txtName.value;
    let inputAddres = txtAddress.value;
    let inputStatus = txtStatus.value;
    let inputPass = password.value;
    let inputNumber = number.value;
    let inputnumberID = numberID.value;

    if (validator(inputName, inputAddres, inputStatus, inputPass, inputNumber, inputnumberID)) {
        Swal.fire({
            title: 'Éxitoso!',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    } else {
        Swal.fire({
            title: 'Error!',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }

})
function validator(inputName, inputAddres, inputStatus, inputPass, inputNumber, inputnumberID) {

    if (!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(inputAddres)) || inputAddres == '') {
        return true
    }
    if (inputPass == '' || inputPass == null) {
        return true
    }
    if (inputName == '' || inputName == null) {
        return true
    }
    if (inputStatus == '' || inputStatus == null) {
        return true
    }
    if (inputNumber === null || inputNumber.length < 8 || inputNumber.length > 8 || inputNumber == '') {
        return true;
    }
    if (inputnumberID === null || inputnumberID.length < 9 || inputnumberID.length > 9) {
        return true;
    }
    return true
}