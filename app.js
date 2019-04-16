const argv = require('./config/yargs.js').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

//argv = argv1.argv;



let comando = argv._[0];

//let comando = argv._[0]; // el guion bajo _ hace referencia a los comandos en el arreglo de yargs.

// Creo un switch para lanzar una accion del comando requerido.
switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('==============Por Hacer============'.green);
            console.log(tarea.descripcion);
            console.log('estado: ', tarea.completado);
            console.log('===================================='.green);
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no reconocido');
        break;

}