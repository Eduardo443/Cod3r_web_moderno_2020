// const sequence = {
//     _id: 1,
//     get id() {return this._id++}
// }

// const novosProdutos = {}

// function salvarProduto (produto){
//     if(!produto.id) produto._id = sequence.id
//     novosProdutos[produto.id] = produto
//     return produto 
// }

// function getProduto (id) {
//     return novosProdutos[id] || {}
// }

// function getNovosProdutos() {
//     return Object.values(novosProdutos)
// }

// function excluirProduto(id) {
//     const prdutoExcluido =  novosProdutos[id]
//     delete novosProdutos[id]
//     return prdutoExcluido
// }

// module.exports = { salvarProduto, getProduto, getNovosProdutos, excluirProduto}
const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const produtos = {}

function salvarProduto(produto) {
    if (!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

function getProduto(id) {
    return produtos[id] || {}
}

function getProdutos() {
    return Object.values(produtos)
}

function excluirProduto(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto }