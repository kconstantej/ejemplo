//se crea una constante de fs para el manejo de files
const fs = require('fs');

//se crea una promesa
let crearArchivo = (base,limite)=>{
    return new Promise((resolve,reject)=>{
        if(!Number(base)){
            reject("el dato no es un numero")
            return;
        }
        let data = '';
        for (let i=1;i<=limite;i++){
            data += `${base} * ${i} = ${base * i}\n`;
        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err){
                reject(err);
            }else{
                resolve(`tablas/tabla-${base}.txt`);
            } 
            
          });
    });
}

let listar=(base,limite)=>{
    
    let data = '';
    for (let i=1;i<=limite;i++){
        console.log(`${base} * ${i} = ${base * i}\n`);
    }

}



//si el nombre de la propiedad es igual al valor crearArchivo : crearArchivo solo se puede poner el nommbre, se crea un objeto
module.exports = {
    crearArchivo,
    listar
};

// let data = '';

// for (let i=1;i<=10;i++){
//     data += `${base} * ${i} = ${base * i}\n`;

// }

// console.log(module)

// //cuando la funcion logre guardar el archivo de texto envia el mensaje caso  contrario se lanza un error
// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//   if (err) throw err;
//   console.log(`El archivo tablas/tabla-${base}.txt ha sido guardado`);
// });