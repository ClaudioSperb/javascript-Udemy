const pessoa1 = {
    nome: 'Claudio',
    sobrenome: 'Sperb',
    idade: 35,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`)
        console.log(`a Minha idade atual é ${this.idade}`)
    },

    incrementaIdade(){
        ++this.idade
    }
}
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()