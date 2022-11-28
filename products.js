let scanf = require('scanf');

const produtos = [
    {
        nome: "Notebook",
        categoria: "Eletrônico",
        valor: 1999.99
    },
    {
        nome: "Impressora",
        categoria: "Eletrônico",
        valor: 999.99
    },
    {
        nome: "Caneta BIC",
        categoria: "Escolar",
        valor: 0.50
    },
    {
        nome: "Lapiseira Pentel",
        categoria: "Escolar",
        valor: 7.50
    },
]


function listar() {
    produtos.forEach(p => {
        console.log(p)
    })
}

const listarPorCategoria = (categoria) => produtos.filter(el => el.categoria.includes(categoria)); 

const listarPorValor = (valor) => produtos.filter(el => el.valor === valor); 

console.log(listarPorValor(7.5))
