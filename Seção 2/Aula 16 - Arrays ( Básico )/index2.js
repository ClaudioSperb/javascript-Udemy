const alunos = ['Cláudio', 'José', 'João']
console.log(alunos)

// Removendo o elemento na posição 1 (José)
delete alunos[1]
console.log(alunos) // [ 'Cláudio', <1 empty item>, 'João' ]

console.log(alunos[50]) // undefined - não existe o índice 50 no array

