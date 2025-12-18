function meuEscopo (){
    const form = document.querySelector('.form');//seleciona o form
    const resultado = document.querySelector('#resultado'); //seleciona a div resultado

    const pessoas = []; //array para guardar as pessoas
    
    function recebeEventoForm (evento){

        evento.preventDefault();//previne o comportamento padrão do form (recarregar a página)

        const nome = form.querySelector('.nome')//seleciona o input nome

        const sobrenome = form.querySelector('.sobrenome')//seleciona o input sobrenome

        const peso = form.querySelector('.peso')//seleciona o input peso

        const altura = form.querySelector('.altura')//seleciona o input altura

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        form.addEventListener('submit', recebeEventoForm);
    }
}
meuEscopo();