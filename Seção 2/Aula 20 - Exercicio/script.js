function meuEscopo() {

    const form = document.querySelector('.form');
    const nome = document.querySelector('.nome');
    const sobrenome = document.querySelector('.sobrenome');
    const peso = document.querySelector('.peso');
    const altura = document.querySelector('.altura');
    const resultado = document.querySelector('.resultado');

    function receberEventoForm(evento) {
        evento.preventDefault();
        console.log('form não foi enviado')
        resultado.innerHTML += `<p>Olá ${nome.value} ${sobrenome.value}, seu peso é ${peso.value}kg e sua altura é ${altura.value}m.</p>`;
    }

    form.addEventListener('submit', receberEventoForm);

};
meuEscopo();