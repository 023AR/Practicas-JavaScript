const numCalcular = document.querySelector('#numeroFibonacci');
const btnFib = document.querySelector('#btnCalcular')

btnFib.addEventListener('click', () =>{
  document.querySelector('#resultado').innerText = calcFibo(numCalcular.value);
})

function calcFibo(numero){
  fibonaccioText = '';

  fibonaccioAntes = 0;
  auxi = 0;
  fibonacciUltimo = 1;

  for(let i = 0; i < numero; i++){
    fibonaccioText += '-' + fibonacciUltimo; 
    auxi = fibonaccioAntes; 
    fibonaccioAntes = fibonacciUltimo;  
    fibonacciUltimo += auxi; 
  }
  return fibonaccioText;
}

// Clase 16