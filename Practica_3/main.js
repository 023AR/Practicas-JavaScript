const titulo = document.getElementsByClassName('title')

const input1 = document.querySelector('#numero-1')
const input2 = document.querySelector('#numero-2')

const boton = document.querySelector('#btn-calcular')
const resultado = document.querySelector('.resultado')

formulario = document.querySelector('#form')

// escucha eventos
boton.addEventListener('click', sumar);
// otra Forma de escribir
// boton.addEventListener('click', () => {
//     //logica JavaScript
//   }
// )

function sumar(){
  resultado.innerText = 'La suma es: ' + (parseInt(input1.value) + parseInt(input2.value))
}

// cuando hay un formulario, se utiliza event, para que no recargue la pagina
form.addEventListener('submit', restar)

function restar(event){
  console.log(event)
  event.preventDefault()
  resultado.innerText = 'La resta es: ' + (parseInt(input1.value) - parseInt(input2.value))
}


// CLASE 14 en pausa
// 8d79a3f3-2bde-416c-a147-59ba02b4564d