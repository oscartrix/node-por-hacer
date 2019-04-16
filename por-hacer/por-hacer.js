const fs = require('fs');


let listadoPorHacer = [];

//Para guardar los datos como un Json

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar la info', err);
    })
}


//Leer archivo Json

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }


}


const crear = (descripcion) => {

    cargarDB();
    let porHacer = {
        descripcion, //Es igual que escribir descripcion:descripcion
        completado: false,
    };

    listadoPorHacer.push(porHacer);

    guardarDB();
    return porHacer;

};

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
};

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

};

const borrar = (descripcion) => {
    cargarDB();
    console.log(descripcion);

    //Todo este codigo puede ser reemplazado con la funcion "filter de JS" comparando el tamaño del arreglo
    let index = listadoPorHacer.findIndex(tarea => {

        return tarea.descripcion === descripcion;
    });
    console.log(index);

    if (index >= 0) {
        elemento = listadoPorHacer[index];
        borrado = listadoPorHacer.splice(index, 1);
        console.log(elemento);
        console.log(borrado);
        guardarDB();
        return true;
    } else {
        return false;
    }
};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}