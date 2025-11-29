const num1 = 10
const num2 = 5
const num3 = 3
let res = num1 + num2
console.log(res)
console.log('-------------------------------')

res = num1 + num2 * num2
console.log(res)
console.log('-------------------------------')

res = num1 * num2**2
console.log(res)
console.log('-------------------------------')

res = num1 % num3
console.log(res)
//Aqui nesse caso o res = 1, pois é o resto da divisao entre 10 e 3.
console.log('-------------------------------')

res = num1 * (num2 + num3)
console.log(res)
//aqui nesse caso, o res = 80, fazemos sempre o paranteses primeiro, a apos o resultado ele multiplica, nesse exemplo.

//A ordem de Precedencia é = ( ), ** , * , / , % , + , - .
console.log('-------------------------------')

let contador = 0
contador++ // 1
contador++ // 2
contador++ // 3
contador++ // 4
contador++ // 5
console.log(contador)

//Aqui seria um exemplo de incremento, onde ele pega e se auto atribui o valor, nesse exemplo, a cada linha de contador ele recebe 1, entao temos 1, 2 , 3 , 4 e 5.

console.log('-------------------------------')

let contador2 = 0
console.log(contador2++)
console.log(contador2)
console.log(++contador2)
console.log(contador2)

console.log('-------------------------------')

let contador3 = 0
const passo = 10
/*
contador3 = contador3 + passo
console.log(contador3)
contador3 = contador3 + passo
console.log(contador3)
contador3 = contador3 + passo
console.log(contador3)
contador3 = contador3 + passo
console.log(contador3)
contador3 = contador3 + passo
console.log(contador3)
*/

contador3 +=10
console.log(contador3)
contador3 +=10
console.log(contador3)
contador3 +=10
console.log(contador3)
contador3 +=10
console.log(contador3)
contador3 +=10
console.log(contador3)

// Aqui utilizamos os operadores de atribuição, nesse exemplo a cima, ele pega o valor de contador e soma 10, faznedo, nesse exemplo aqui a cima, pular de 10 em 10.

console.log('-------------------------------')

let contador4 = 1
contador4*=2
console.log(contador4)
contador4*=2
console.log(contador4)
contador4*=2
console.log(contador4)
contador4*=2
console.log(contador4)
contador4*=2
console.log(contador4)

// Aqui utilizamos como exemplo a multiplicação, onde a cada resultado ele multiplica 2.
