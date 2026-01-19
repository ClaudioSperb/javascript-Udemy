const verdadeiro = true;

// let tem escopo de bloco {... bloco }
// var só tem escopo de função

let nome = 'Claudio'; //criando uma variavel
//let nome2 = 'Sperb'; //criando outra variavel
var nome2 = '15-05-1990';

if(verdadeiro){
    let nome = 'Claudio Sperb Paulo'
    var nome2 = 'Qualquer coisa';
    console.log(nome,nome2);
}

if(verdadeiro){
    //let nome = 'Josiane Lacerda';
    console.log(nome);
} 

console.log(nome, nome2);