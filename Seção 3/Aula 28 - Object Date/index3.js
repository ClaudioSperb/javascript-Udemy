const data = new Date(1768233487995);
console.log('Dia', data.getDate());
console.log('Mes', data.getMonth() + 1); //Mes começa no 0.
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minutos', data.getMinutes());
console.log('Segundos', data.getSeconds());
console.log('Milisegundos', data.getMilliseconds());
console.log('Dia da semana', data.getDay()); // 0-Domingo e 6- Sábado.
console.log(Date.now());

