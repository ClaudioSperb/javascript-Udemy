/*
Primitivos (Imutáveis) - String, number, boolean, undefined, null (bigint, symbol)
*/

let a = 'A';
let b = a; // Cópia do valor
console.log(a, b); // A A

a = 'Outra coisa';
console.log(a, b); // Outra coisa A

/*
Referência (Mutável) - Array, object, function
*/
let c = [1, 2, 3];
let d = c;
console.log(c, d); // [1, 2, 3] [1, 2, 3]

c.push(4);
console.log(c, d); // [1, 2, 3, 4] [1, 2, 3, 4]

d.pop();
console.log(c, d); // [1, 2, 3] [1, 2, 3]