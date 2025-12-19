/*

Operadores de Comparação
> Maior que
>= Maior ou Igual a
< Menor que
<= Menor ou Igual a
== Igualdade ( ele testa somente o Valor )
=== Igualdade estrita ( ele testa valor e tipo )
!= Diferente ( Valor )
!== Diferente estrito (ele testa o Valor e Tipo)

*/

// console.log(10 > 5) // True
// console.log(10 < 5) // False
//Sempre teremos um resultado Boolean ( True ou False)

// const comp = 10 <= 22
// console.log(comp) //True

 const num1 = 10 //Number
 const num2 = '10' //String
// console.log(num1 === num2) // False

console.log(num1 !== num2) // True

console.log(num1 != num2) // False ( Não recomenda-se a utilizaçao desse operador pois ele não testa o tipo somente o Valor )

