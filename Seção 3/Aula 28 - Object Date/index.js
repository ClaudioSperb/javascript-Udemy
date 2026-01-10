const tresHoras = 60 * 60 * 3 * 1000; // Tres horas em milesimos de segundos.
const umDia = 60 * 60 * 24 * 1000; // Um dia em milesimos de segundos.
const data = new Date(0 + tresHoras - umDia); // 01/01/1970
console.log(data.toString());
