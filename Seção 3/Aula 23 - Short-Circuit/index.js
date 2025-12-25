/*
FALSY

0
'' , " " ,  `` -> strings vazias
null/undefined
NaN

*/

//Short-Circuit com AND ( && )
console.log('Claudio' && 'Sperb' && NaN &&'Lacerda') // retorna o NaN ( um dos FALSY )

function falarOi() {
    return 'Ola !!!'
}

const VaiDarOi = true

console.log( VaiDarOi && falarOi()) // Aqui no caso ele retorna a function, pois a ultima expressao validada é true a anterior tambem.

const a = 2
const b = false
const c = 'false'
const d = true
const e = NaN