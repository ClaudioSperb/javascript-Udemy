const cadastro = {
    nome: 'Claudio',
    idade: 36,
    cargo: 'gerente'
};

for(let etiqueta in cadastro){
    console.log('campo:' + etiqueta)
    
    console.log('conteúdo:' + cadastro[etiqueta])
}