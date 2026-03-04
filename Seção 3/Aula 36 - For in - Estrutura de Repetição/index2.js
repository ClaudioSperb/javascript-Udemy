const pessoa = {
    nome: 'Claudio',
    sobrenome: 'Sperb',
    idade: 35
};

for (let chave in pessoa){
    console.log(chave, pessoa[chave])
}