const elementos = [
    {tag: 'p', texto: 'Páragrafo criado com sucesso!'}, // índice 0
    {tag: 'div', texto: 'Div criada com sucesso!'}, // índice 1
    {tag: 'section', texto: 'Section criada com sucesso!'}, //índice  2
    {tag: 'footer', texto: 'Footer criado com sucesso!'}, // índice 3
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for(i = 0; i < elementos.length; i++){
    let { tag, texto } = elementos[i]
    let tagCriada = document.createElement(tag);
    tagCriada.innerHTML = texto;
    div.appendChild(tagCriada);
};

container.appendChild(div);