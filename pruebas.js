// const fetch = require( 'node-fetch')

// async function getCountry(){
//     let response = await fetch('https://pkgstore.datahub.io/core/country-codes/country-codes_json/data/471a2e653140ecdd7243cdcacfd66608/country-codes_json.json')
//     let json = await response.json()
//     return json.map(country => country['CLDR display name'])
// }

// (async function(){
//     let hello = await getCountry()
//     console.log("log => ", hello)
// })()
const fetch = require( 'node-fetch')

async function getCountry(){
    let response = await fetch('https://pkgstore.datahub.io/core/country-codes/country-codes_json/data/471a2e653140ecdd7243cdcacfd66608/country-codes_json.json');
    let country = await response.json();
    console.log(country[0].name);
}

let country = getCountry("Mexico");

const x = 10
const y = 20

// función asíncrona con "async"
async function mayorACero () {
  try {
    let resultado_de_suma = await suma(x, y)                      // Resultado: 30
    let resultado_de_resta = await restar(resultado_de_suma, 15)  // Resultado: 15
    let respuesta = await esMayorACero(resultado_de_resta)        // Resultado: 'Mayor a cero'
    console.log(respuesta)
  }
  catch (err) {
    // manejo de errores
  }
}

mayorACero() // Resultado: 'Mayor a cero'

