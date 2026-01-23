const pessoa = {
    nome: 'Claudio',
    sobrenome: 'Sperb',
    endereço: {
        rua: 'Rua Farrapos',
        numero: 53,
        bairro: 'Vila Vargas'
    }

}

//Atribuição via desetruturação
const {nome, sobrenome, ... resto} = pessoa;
// const {endereço: {rua, bairro}, endereço} = pessoa;
// console.log(nome, sobrenome);
// console.log(rua, bairro, endereço);
console.log(nome, sobrenome, resto)