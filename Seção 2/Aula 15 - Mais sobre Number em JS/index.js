let num1 = 0.1
let num2 = 0.7

//console.log(num1.toString() + num2)

//Aqui convertemos o num1 para string utilizano o método .toString().

//console.log(typeof num1)

//num1 = num1.toLocaleString() - //aqui estou alterando a variavel que era NUMBER para uma string, diferente do exemplo a cima, onde num1 ainda é Number.

//console.log(num1.toFixed(3))

// IMPRECISÂO EM JS
console.log(num1 + num2) //Saída - 0.799999999999999
num1 += num2 //Saída - 0.799999999999999
num1 += num2 //Saída - 0.799999999999999
num1 += num2 //Saída - 0.799999999999999
num1 += num2 //Saída - 0.799999999999999
num1 += num2 //Saída - 0.799999999999999
num1 += num2 //Saída - 0.799999999999999
num1 += num2 //Saída - 0.799999999999999
//num1 = Number(num1.toFixed(2))
//console.log(Number.isInteger(num1))

//Solução
num1 = Number(num1.toFixed(2))
console.log(num1.toFixed(2))


