let opciones={
    base:{
        demand: true,
        alias: 'b',
        description: 'La base de la tabla de multiplicar'
    },limite:{
        alias: 'l',
        default: 10,
        description: 'El limite de la tabla de multiplicar'
    }
}
const argv = require('yargs').command('crear','Crea un archivo con la tabla de multiplicar',opciones)
.command('listar','listar la tabla de multiplicar',opciones)
.help()
.argv;


module.exports={
    argv
};