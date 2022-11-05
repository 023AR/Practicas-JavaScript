let nombre = "Rodrigo"
let apellido = "Colque Garcia"
let nombrePlatzy = "RodriRC"
let edad = 22
let correo = "colqueariel023@gmail.com"
let mayorEdad = true
let ahorro = 1000
let deduda = 500


console.log(`Nombre Completo: ${nombre} ${apellido}`)
console.log("Dinero real: " + (ahorro - deduda))


console.log("con For")
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

console.log("con While")


let i = 10
while (i >= 2){
  console.log(`El valor de i es: ${i}`)
  i--
}


let suma = prompt("¿Cuando es 2 + 2?")
if(suma == 4){
  alert("correcto")
} else {
  alert("no es correcto")
}


function datos(objeto, valor){
  return objeto[valor]
}

const persona = {
  nombre: "Rodrigo",
  edad: 30,
  apellido: 'Colque',
  leguajes 
}

for(let dato in persona){
  console.log(`dato[${dato}] = { ${datos(persona, dato)}}`)
}




// ------------------------------------------------------------------------------------------------
const suscripcion ={
  Free: 'Solo puedes tomar los cursos gratis',
  Basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
  Expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
  ExpertDuo: 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año'
}


function ver_mi_suscripcion(tipoSuscripcion){
  if(suscripcion[tipoSuscripcion]){
    console.log(suscripcion.tipoSuscripcion);
    return
  }
  console.warn('No existe el tipo de suscripcion')
}

ver_mi_suscripcion('Free');

// Nos quedamos en la Clase 7