const h1 = document.querySelector('.container h1');
let data = new Date();
h1.innerHTML = data.toString();



function getdDiaSemanaTexto(diaSemana){

    const dataAtual = data.toLocaleDateString();
    const horaAtual = data.toLocaleTimeString();

    let diaSemanaTexto;

    switch(diaSemana){
    case 0:
        diaSemanaTexto = 'Domingo';
        return diaSemanaTexto;
    case 1:
        diaSemanaTexto = 'Segunda-Feira';
        return diaSemanaTexto;
    case 2:
        diaSemanaTexto = 'Terça-Feira';
        return diaSemanaTexto;
    case 3:
        diaSemanaTexto = `Hoje é Quarta-Feira , ${dataAtual} e agora são ${horaAtual} horas.`;
        return diaSemanaTexto;
    case 4:
        diaSemanaTexto = 'Quinta-Feira';
        return diaSemanaTexto;
    case 5:
        diaSemanaTexto = 'Sexta-Feira';
        return diaSemanaTexto;
    case 6:
        diaSemanaTexto = 'Sábado';
        return diaSemanaTexto;
        default:
            diaSemanaTexto = 'ERRO'
        return diaSemanaTexto;
};

    return diaSemanaTexto;
}

h1.innerHTML = getdDiaSemanaTexto(data.getDay());
