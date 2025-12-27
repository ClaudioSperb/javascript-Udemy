//Exemplo de condição IF ELSE e If e else

const hora = 7

if (hora >= 12 && hora <= 18){
    console.log('Boa tarde')
} else if (hora >= 6 && hora <= 12){
    console.log('Bom dia')
} else if (hora >= 18 && hora <= 23){
    console.log('Boa noite')
} else{
    console.log('Boa Madrugada')
}

/*
IF - Pode ser utilizado sozinho
IF ELSE - Podem ter quantos forem necessários
ELSE - Sempre que temos o else no final do codigo, é a ultima condição que  programa executará.
*/