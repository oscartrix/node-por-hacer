//Podemos optimizar el codigo haciendo objetos la descripcion y completado y reemplazarlo como objetos en 

// descripcion = {
//     demand: true,
//     alias: 'd',
//     desc: 'Descripcion de la tarea por hacer'
// };




//Para manejar la forma de comunicarnos con consola, usamos Yargs.
//Mandamos llamar el paquete

const opts = {
    base: {
        demand: true, // obligo a pasar el parametro --base 5 <-
        alias: 'b' //agregamos la abreviatura '-b = --base'
    },
    limite: { //defino otro parametro
        alias: 'l',
        default: 10
    }
}

// El metodo command sirve para definir los parametros que enviaremos desde consola. Ex. node app listar <-
const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        }
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Actualiza tarea'

        },
        completado: {
            alias: 'c',
            default: true,
            desc: 'Marca como completado o pendiente la tarea'
        }
    })
    .command('borrar', 'Borrar elemento del Json', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Borrar Tarea'

        }
    })
    .help()
    .argv;

//console.log(argv);
module.exports = {
    argv
}