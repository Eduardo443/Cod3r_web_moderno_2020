const carrinho = [
    '{"nome": "borracha", "preco": 3.45',
    '{"nome": "caderno", "preco": 13,90',
    '{"nome": "kit de lapis", "preco": 41,22',
    '{"nome": "caneta", "preco": 7.5}'
]

const paraObj = json => JSON.parse(json)
const apenasPreco = produto => produto.preco 

const resultado = carrinho.map(paraObj).map(apenasPreco)
console.log(resultado)