let aleatorio = Math.random()// Esse método disponibiliza, numeros aleatórios entre 0 e 1, nunca pegando o numero 1.
console.log(aleatorio)

aleatorio = Math.round(aleatorio * (10 - 5) + 5)//Utilizando o .round, arredondamos utilizando essa expressao, (10 - 5) - numero entre 10 e 5, e somamos com 5, fazendo com que nosso numero aleatório, fique um numero inteiro.
console.log(aleatorio)

let num = 3
console.log(Math.pow(3, 2)) //Potenciação utilizando Math

console.log(num ** 2) // Pontenciação com operadores

//RAIZ QUADRADA
let raizQuadrada = 16
console.log(raizQuadrada ** 0.5)