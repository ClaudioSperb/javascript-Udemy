function criaPessoa (nome, sobrenome, idade){
    return{
        nome: nome, sobrenome: sobrenome, idade: idade
    }
}

const pessoa1 = criaPessoa('Claudio', 'Sperb', 35)
const pessoa2 = criaPessoa('Josiane', 'Segatto', 32)
const pessoa3 = criaPessoa('Briana', 'Paulo', 3)
console.log(pessoa1.idade)
console.log(pessoa1, pessoa2,pessoa3)