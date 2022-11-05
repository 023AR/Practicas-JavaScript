const titulo = document.querySelector('h1');
const parrafo = document.querySelector('.parrafo');
const miParrafo = document.querySelector('#mi-parrafo');
const miInput = document.querySelector('input');


console.log(miInput.value);


console.log({
  titulo,
  parrafo,
  miParrafo,
  miInput
});

//  modificar contenido de las etiquetas 
titulo.innerHTML = "Rodrigo <br> Colque";
titulo.innerText = "Rodrigo Colque ..";

// obtenemos el atributo de una etiquta en este caso la clase
console.log(parrafo.getAttribute('class'));
// establecemos un nuevo atributo en la etiqueta
titulo.setAttribute('class', 'titulo');
// añadimos mas de una clase
titulo.classList.add('primero')
// eliminamos una clase
titulo.classList.remove('primero')

// añadimos un valor en la etiqueta
miInput.value = 'Mi valor inicial'

// crearmos elementos de HTML
const imagen = document.createElement('img');
imagen.setAttribute('src', 'https://concepto.de/wp-content/uploads/2014/08/universo-e1551279332781.jpg');

console.log(imagen);

miParrafo.append(imagen);