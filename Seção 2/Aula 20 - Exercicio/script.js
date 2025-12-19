function meuEscopo() {

    const form = document.querySelector('.form');
    const pessoas = [];
    

    function receberEventoForm(evento) {
        evento.preventDefault();
        const nome = document.querySelector('.nome');
        const sobrenome = document.querySelector('.sobrenome');
        const peso = document.querySelector('.peso');
        const altura = document.querySelector('.altura');
        const resultado = document.querySelector('.resultado');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })
        console.log(pessoas)

        resultado.innerHTML += `<p>Olá <strong>${nome.value}</strong> <strong>${sobrenome.value}</strong>, seu peso é <strong>${peso.value}kg</strong> e sua altura é <strong>${altura.value}m</strong>.</p>`;
    }

    form.addEventListener('submit', receberEventoForm);

};
meuEscopo();