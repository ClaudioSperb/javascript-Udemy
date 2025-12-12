function soma(x = 0, y = 0) { // Define a função soma com parâmetros padrão 0
    const resultado = x + y;
    return x + y; // Retorna o valor da soma
}

const valorSoma = soma()// Chamada da função sem argumentos, usa os valores padrão;
console.log(valorSoma); // 0 - A função retorna 0 + 0

// const valorSoma = soma(5, 3);
// console.log(valorSoma); // 8 - A função retorna o valor da soma