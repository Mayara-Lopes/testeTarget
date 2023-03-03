var num1 = 0
var num2 = 1
var soma = 0

var valor = prompt('Digite um número')

while (valor > soma){
  soma = num1 + num2
  num1 = num2
  num2 = soma
}

if(valor == 0 || valor == 1){
  console.log(`O número ${valor} pertence à sequência de Fibonacci.`)
} else if (valor == soma){
  console.log(`O número ${valor} pertence à sequência de Fibonacci.`)
} else {
  console.log(`O número ${valor} não pertence à sequência de Fibonacci.` )
}