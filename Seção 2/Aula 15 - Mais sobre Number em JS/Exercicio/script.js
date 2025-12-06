let nome = prompt('Coloque seu nome para começar.');
let numero = Number(prompt('Digite um Número'));
//numero = Number(numero)

const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');
const textoSec = document.querySelector("#texto-sec")

numeroTitulo.innerHTML = numero

texto.innerHTML = `<p>Seja Bem vindo <strong>${nome}</strong>.</p>`

texto.innerHTML += `<p>A raíz quadrada do seu número é <strong>${numero ** 0.5}</strong></p>`

texto.innerHTML += `<p>${numero} é um número inteiro? <strong>${Number.isInteger(numero)}</strong></p>`

texto.innerHTML += `<p>O Número digitado é <strong>NaN</strong>? <strong>${Number.isNaN(numero)}</strong></p>`

texto.innerHTML += `<p>Arredondando <strong>${numero}</strong> para baixo temos <strong>${Math.floor(numero)}</strong></p>`

texto.innerHTML += `<p>Arredondando <strong>${numero}</strong> para cima temos <strong>${Math.ceil(numero)}</strong></p>`

texto.innerHTML += `<p>Seu número com duas casas decimais é <strong>${numero.toFixed(2)}</strong></p>`

texto.innerHTML +=`<p>Seu número elevado ao quadrado é <strong>${numero ** 2}</strong></p>`

textoSec.innerHTML = ' Obrigado por participar !!!'

