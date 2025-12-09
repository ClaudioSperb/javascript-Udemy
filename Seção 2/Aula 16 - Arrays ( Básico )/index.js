//                  0         1       2
const alunos = ['Claudio', 'José', 'João']
console.log(alunos)

//Como descobrir o tamanho de um array
console.log(alunos.length) // 3 Elementos

//Adicionando um Elemento dentro do Array
alunos[3] = 'Maria'
console.log(alunos)// [ 'Claudio', 'José', 'João', 'Maria' ]

//Adiconando Elementos utilizando o .length
alunos[alunos.length] = 'Paulo'
alunos[alunos.length] = 'Jorge'
console.log(alunos) // [ 'Claudio', 'José', 'João', 'Maria', 'Paulo', 'Jorge' ]

//Adicionando Elementos usando o .push
alunos.push('Felipe')
console.log(alunos) // ['Claudio', 'José', 'João','Maria', 'Paulo','Jorge','Felipe']

//Adicionando um Elemento no inicio do array
alunos.unshift('Roberto')
console.log(alunos) // ['Roberto','Claudio', 'José', 'João','Maria', 'Paulo','Jorge','Felipe']


//Alterando um Elemento
alunos[1] = 'Renato'
console.log(alunos) // ['Claudio', 'Renato', 'João','Maria', 'Paulo','Jorge','Felipe']
