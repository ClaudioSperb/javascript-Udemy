function calculoImc(){
    const form = document.querySelector('#formulario');
    const resultado = document.querySelector('#resultado');
    const resultadoYellow = document.querySelector('#resultado-yellow');
    const resultadoRed = document.querySelector('#resultado-red');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Evento previnido !!! ');
        const peso = form.querySelector('#peso');
        const altura = form.querySelector('#altura');

        const imc = Number(peso.value) / Number(altura.value) ** 2;
        imc.toFixed(2);
        console.log(imc);

        

        function validaInput(){
            if (peso.value === 0){
                resultado.innerHTML = 'Digite um número válido'
            } else if (altura === 0){
                resultado.innerHTML = 'Digite uma altura válida'
            }
        }

        resultado.innerHTML = '';

        if(imc < 18){
            resultadoRed.innerHTML = `Seu imc é de <strong>${imc.toFixed(2)}</strong> - Você esta a baixo do peso !`
            
        } else if(imc >= 18.5 && imc <= 24.9){
            resultado.innerHTML = `Seu imc é de <strong>${imc.toFixed(2)}</strong> - Você esta com o peso normal !`
        } else if(imc >= 25 && imc <= 29.9){
            resultado.innerHTML = `Seu imc é de <strong>${imc.toFixed(2)}</strong> - Você esta com sobrepeso, atenção !`
        } else if(imc >= 30 && imc <= 34.9){
            resultadoYellow.innerHTML = `Seu imc é de <strong>${imc.toFixed(2)}</strong> - Você esta com obesidade Grau 1 !`
        } else if(imc >= 35 && imc <= 39.9){
            resultadoYellow.innerHTML = `Seu imc é de <strong>${imc.toFixed(2)}</strong> - Você esta com obesidade Grau 2 !`
        } else if(imc > 40){
            resultadoRed.innerHTML = `Seu imc é de <strong>${imc.toFixed(2)}</strong> - Você esta com obesidade Grau 3 !`
        } else{
            alert('Dados incorretos, tente novamente colocando somente numeros válidos !')
        }

    });

    
}
calculoImc();