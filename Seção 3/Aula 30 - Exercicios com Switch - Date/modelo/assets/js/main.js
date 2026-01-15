const h1 = document.querySelector('.container h1');
let data = new Date();
h1.innerHTML = data.toString();



function getdDiaSemanaTexto(diaSemana){

    const dataAtual = data.toLocaleDateString();
    const horaAtual = data.toLocaleTimeString();

    let diaSemanaTexto;

    switch(diaSemana){
    case 0:
        diaSemanaTexto = `Hoje é Domingo , ${dataAtual} e agora são ${horaAtual} horas.`;
        return diaSemanaTexto;
    case 1:
        diaSemanaTexto = `Hoje é Segunda-Feira , ${dataAtual} e agora são ${horaAtual} horas.`;
        return diaSemanaTexto;
    case 2:
        diaSemanaTexto = `Hoje é Terça-Feira , ${dataAtual} e agora são ${horaAtual} horas.`;
        return diaSemanaTexto;
    case 3:
        diaSemanaTexto = `Hoje é Quarta-Feira , ${dataAtual} e agora são ${horaAtual} horas.`;
        return diaSemanaTexto;
    case 4:
        diaSemanaTexto = `Hoje é Quinta-Feira , ${dataAtual} e agora são ${horaAtual} horas.`;
        return diaSemanaTexto;
    case 5:
        diaSemanaTexto = `Hoje é Sexta-Feira , ${dataAtual} e agora são ${horaAtual} horas.`;
        return diaSemanaTexto;
    case 6:
        diaSemanaTexto = `Hoje é Sábado , ${dataAtual} e agora são ${horaAtual} horas.`;
        return diaSemanaTexto;
        default:
            diaSemanaTexto = 'ERRO'
        return diaSemanaTexto;
};

    return diaSemanaTexto;
}

h1.innerHTML = getdDiaSemanaTexto(data.getDay());
