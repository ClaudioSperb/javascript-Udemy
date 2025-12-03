let minhaString = "JavaScript"
console.log(minhaString)
//Cada caractere em uma string possui um número de índice associado, que indica sua localização.
//É possível acessar um caractere específico usando seus colchetes e seu índice, como minhaString[0]

console.log('-------------------------------')

console.log(minhaString[0]) // saída : J
console.log(minhaString[1]) // saída : a
console.log(minhaString[2]) // saída : v
console.log(minhaString[3]) // saída : a
console.log(minhaString[4]) // saída : S
console.log(minhaString[5]) // saída : c
console.log(minhaString[6]) // saída : r
console.log(minhaString[7]) // saída : i
console.log(minhaString[8]) // saída : p
console.log(minhaString[9]) // saída : t

console.log('-------------------------------')

console.log(minhaString[-1]) // Aqui o valor é Undefined, pois nao existe dentro do índice

// OUTROS MÉTODOS

console.log(minhaString.charAt(0)) // Saída de : J
console.log(minhaString.concat(' é muito interessante !')) // Adiciona o texto dentro dos parenteses no método a nossa Variável.

console.log('-------------------------------')

let minhaString2 = 'Testando Strings e seus Métodos'
console.log(minhaString2.indexOf('String')) // Aqui ele me da o indice onde começa o texto que quero encontrar. Caso o texto não exista na string ele dara o valor de -1.

console.log(minhaString2.lastIndexOf('Métodos', 5 ))
console.log(minhaString2.replace('Testando', 'Utilizando'))// Aqui usamos o replace, para substituir a palavra por outra.
console.log(minhaString2.length)//mostra o tamanho da string

console.log(minhaString2.split(' ', 2))
console.log(minhaString2.toLowerCase())//Deixa tudo em letras minúsculas
console.log(minhaString2.toUpperCase())//deixa nossa String com todas as Letras MAIÙSCULAS


