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
    fibonaccioText += ' ' + fibonacciUltimo; // 0 1 1 2 3 5
    // 3
    auxi = fibonaccioAntes;  // 2
    // 5
    fibonaccioAntes = fibonacciUltimo;  // 1
    // 5               3         5
    fibonacciUltimo = auxi + fibonacciUltimo;  // 1
  }
}

// Clase 16