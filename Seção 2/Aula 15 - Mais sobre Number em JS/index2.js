let num1 = 0.1
let num2 = 0.7

num1 += num2
num1 += num2
num1 += num2
num1 += num2
console.log(num1)


num1 = Number(num1.toFixed(2))
num2 = Number(num2.toFixed(2))
//Aqui usei Number com toFixed para termos um numero mais real.
console.log(num1)
console.log(typeof num1)
num1 = num1.toString(2)
console.log(num1)

// Nesse caso concatenamos o valor convertido pra String com o Number.