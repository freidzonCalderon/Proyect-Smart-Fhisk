'use strict'
const admin = {
    Nombre: 'Hector',
    Cedula: 305300624,
    Direccion: 'Turrialba',
    Telefono: 62506765,
    Provincia: 'Cartago',
    email: 'hcamachod@ucenfotec.ac.cr',
    password: 'Hecd2402',
    rol: 'admin'
}
const vet = {
    Nombre: 'Ana',
    Cedula: 104510254,
    Direccion: 'San Pedro',
    Telefono: 85467892,
    Provincia: 'San Jose',
    email: 'Anamaria@gmail.com',
    password: 'Anavet2020',
    rol: 'vet'
}
const secretary = {
    Nombre: 'Andrea',
    Cedula: 203550255,
    Direccion: 'Guadalupe',
    Telefono: 85467892,
    Provincia: 'Alajuela',
    email: 'Andreac@gmail.com',
    password: 'Andre2022',
    rol: 'secretary'
}


// var dbUssers = [admin, vet, secretary];

async function RegisterUssers(inputName, inputCed, inputEmail, inputTel, inputPass) {

    let result = {};

    await axios({
        method: 'post',
        url: apiUrl + '/RegisterUssers',
        responseType: 'json',
        data: {
            Nombre: inputName,
            Cedula: inputCed,
            Email: inputEmail,
            Telefono: inputTel,
            Password: inputPass,
            Rol: 'usser'
        }
    }).then(async(res) => {
        if(res.data.resultado == false){
            switch (res.data.err.code) {
                case 11000:
                        result.err = 'No se pudo registrar la persona, ya existe una persona registrada con esa identificacion o correo';
                        // console.log('No se pudo registrar 11000');
                        // console.log(res.data.err);
                    break;            
                default:
                        result.err = "Ocurrio un error, intente de nuevo"
                    break;
            }
        }
    }).catch((err) => {
        result.err = err.message || "Ocurrio un error, intente de nuevo"
        console.log(err);
    });


    // dbUssers.push(result);
    // SaveStorageUsser(result);

    return result;

};

// function SaveStorageUsser(listUsser) {
//     localStorage.setItem('usserDB', JSON.stringify(listUsser));
// }

// function getProductList() {
//     let saveList = localStorage.getItem('usserDB');

//     if (saveList == null) {
//         dbUssers = [];
//     } else {
//         dbUssers = JSON.parse(saveList);
//     }
//     return dbUssers;
// };