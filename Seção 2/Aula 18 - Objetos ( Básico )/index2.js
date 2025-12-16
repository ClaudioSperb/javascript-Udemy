function criaPessoa (nome, sobrenome, idade){ //Factory Function
    return{
        nome, sobrenome, idade
    }
}

const pessoa1 = criaPessoa('Claudio', 'Sperb', 35)
const pessoa2 = criaPessoa('Josiane', 'Segatto', 32)
const pessoa3 = criaPessoa('Briana', 'Paulo', 3)
console.log(pessoa1.idade)
console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome)