/*
Claudio Sperb tem 35 anos, pesa 91Kg, tem 1.80 de altura e seu IMC é de 28,08641975308642
*/

const nome='Cláudio'
const sobrenome = 'Sperb Paulo'
const idade = 35
const peso = 91
const altura = 1.80
const anoAtual = 2025


let IMC = peso/(altura*altura)
let anoNascimento = anoAtual - idade

console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos de idade, pesa ' + peso +' Kg, tem ' + altura +' de altura e seu IMC é de ' + IMC +'. ' + nome + ' ' + sobrenome + ' nasceu no ano de ' + anoNascimento +'.')

console.log('------------------------------------')
// Aqui nesse exercicio utilizei o + para concatenar os valores dentro da String.

console.log(`${nome} ${sobrenome} tem ${idade} anos de idade. Ele pesa ${peso} Kg, tem ${altura} metros de altura e seu IMC é de ${IMC}. ${nome} nasceu no ano de ${anoNascimento}.`)

// Nesse exemplo utilizamos o método de template string