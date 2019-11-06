//importacion sencilla
//const multiplicar = require('./multiplicacion/multiplicar');
//importacion con destructuracion
//const {crearArchivo}=require('./multiplicacion/multiplicar');

// let casa=process.argv[2];
// let base = casa.split('=')[1];

//utilizando expresiones regulares se saca el numero q se ingreso por consola en el argumento argv
//let regex = /(\d+)/g;


// console.log(base);

// base = "rtft";

// crearArchivo(base)
//     .then(archivo => console.log(`Arachivo creado: ${archivo}`))
//     .catch(e=>console.log(e));



//cuando la funcion logre guardar el archivo de texto envia el mensaje caso  contrario se lanza un error
// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//   if (err) throw err;
//   console.log(`El archivo tablas/tabla-${base}.txt ha sido guardado`);
// });


//crea un comando crear , que recibe como parametro base y se necesita, el alias puede ser 'b'


const {crearArchivo}=require('./multiplicacion/multiplicar');
const {listar}=require('./multiplicacion/multiplicar')
const colors = require('colors')

let {argv}=require('./config/yargs')

let comando = argv._[0]

//let argv2 = process.argv

// console.log(argv)
// console.log(argv2)

switch(comando){
    case 'crear':
        console.log("crear...");
        crearArchivo(argv.base,argv.limite)
        .then(archivo => console.log(`Arachivo creado: ${archivo}`.green))
        .catch(e=>console.log(e.red));
        break;
    case 'listar':
        console.log(listar(argv.base,argv.limite))
        break;
    default:
        console.log("comando no valido!")
}
