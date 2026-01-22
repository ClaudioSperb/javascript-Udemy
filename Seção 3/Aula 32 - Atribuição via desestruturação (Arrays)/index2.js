const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//0console.log(numeros[0]);// saída 1

const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros;
console.log(primeiroNumero, segundoNumero, terceiroNumero, resto);
