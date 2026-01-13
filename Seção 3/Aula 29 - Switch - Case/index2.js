const data = new Date();
let diaSemana = data.getDay();
let horaAtual = data.getHours();
let minAtual = data.getMinutes();
let segAtual = data.getSeconds();
// ndiaSemana = 9;
let diaSemanaTexto;

switch(diaSemana){
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaSemanaTexto = 'Segunda-Feira';
        break;
    case 2:
        diaSemanaTexto = 'Terça-Feira';
        break;
    case 3:
        diaSemanaTexto = 'Quarta-Feira';
        break;
    case 4:
        diaSemanaTexto = 'Quinta-Feira';
        break;
    case 5:
        diaSemanaTexto = 'Sexta-Feira';
        break;
    case 6:
        diaSemanaTexto = 'Sábado';
        break;
        default:
            diaSemanaTexto = 'ERRO'
};

console.log(`Hoje é ${diaSemanaTexto} que corresponde ao número ${diaSemana} em JS. A hora atual de hoje é ${horaAtual}:${minAtual}:${segAtual} horas.`);