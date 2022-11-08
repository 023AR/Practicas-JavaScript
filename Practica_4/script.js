const numCalcular = parseInt(document.querySelector('#numeroFibonacci'));
const btnFib = document.querySelector('#btnCalcular')

btnFib.addEventListener('click', () =>{
  document.querySelector('#resultado').innerText = valor;

})

function calcFibo(numero){
  fibonaccioText = '0';

  fibonaccioAntes = 0;
  auxi = 0;
  fibonacciUltimo = 1;
  for(let i = 0; i < numero; i++){
    fibonaccioText += ' ' + fibonacciUltimo; 
    auxi = fibonaccioAntes; 
    fibonaccioAntes = fibonacciUltimo;  
    fibonacciUltimo = auxi + fibonacciUltimo; 
  }
}

// Clase 16