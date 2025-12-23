// Operadores Lógicos em JavaScript
/*
 
&& - E (AND) - Esse testa se as expressões são todas True para retornar true, quando houver um false, a expressao toda retorna False.

|| - OU (OR) - Esse testa uma ou a outra, sendo uma verdadeira , ja retorna True, só vai retorna False, quando todas as expressões forem falsas.

! - NÃO (NOT) -inver a expressão

*/

const usuario = 'claudiosperbpaulo@gmail.com'
const senha = '123456'
//const usuarioLogado = usuario === 'claudiosperbpaulo@gmail.com' && senha === '123456';
//console.log(usuarioLogado) // Nesse exemplo retornou True, pois as duas expressões são verdadeiras

// const usuarioLogado = usuario === 'claudiosperbpaulo@gmail.com' || senha === '1234566458';
// console.log(usuarioLogado) // Nesse exemplo daria TRUE pois uma delas é verdadeira. Se fosse no &&, daria FALSE.

const usuarioLogado = usuario === 'claudiosperbpaulo@gmail.com' && senha === '1234564848686';
console.log(usuarioLogado) // Nesse exemplo retornou FALSE, pois uma das duas expressões é falso.