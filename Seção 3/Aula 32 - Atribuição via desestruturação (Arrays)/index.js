const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const [primeiroNumero, segundoNumero, terceiroNumero, quartoNumero, ...resto] = numeros;
console.log(primeiroNumero, segundoNumero, terceiroNumero, quartoNumero);
console.log(resto);