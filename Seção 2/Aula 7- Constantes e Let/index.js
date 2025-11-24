const primeiroNumero = '10'
const segundoNumero = 5
const resultado = primeiroNumero * segundoNumero
//console.log(`O Resultado dessa operção é ${resultado}`)
const resultadoDuplicado = resultado * 2
const resultadoTriplicado = resultado * 3
let resultadoFinal = resultadoTriplicado + 1
//console.log(`O Resultado dessa operção é ${resultadoFinal}`)
resultadoFinal = resultadoFinal * 2
//console.log(`O Resultado dessa operção é ${resultadoFinal}`)
resultadoFinal = resultadoFinal + 10
//console.log(`O Resultado dessa operção é ${resultadoFinal}`)
//console.log(primeiroNumero)
//console.log(segundoNumero)

console.log(typeof primeiroNumero)// Para descobrir qual a tipagem da variavel

console.log(typeof segundoNumero)// Para descobrir qual a tipagem da variavel

console.log(typeof (primeiroNumero + segundoNumero))// Para descobrir qual a tipagem da variavel em especifico, ai coloca-se entre parenteses

console.log(primeiroNumero + segundoNumero)// Aqui ele concatena com numero 5 formando o 105 que seria a junção de 10 com 5.










/*
const
Usado para valores que não devem mudar, como configurações fixas ou valores matemáticos constantes.
Também possui escopo de bloco, semelhante ao let.
Deve ser inicializada no momento da declaração; não pode ser declarada sem um valor inicial.
Não permite a reatribuição de um novo valor após a inicialização. Tentar fazer isso resultará em um erro.

*/