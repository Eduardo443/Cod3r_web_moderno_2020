const produto = [
    {nome: "Notebook", preco: 2499 , fragil:true },
    {nome: "Ipad pro", preco:4999 , fragil: true },
    {nome: "Copo de Vidros", preco: 12.49 , fragil:true },
    {nome: "Copo de Plastico", preco:18.99 , fragil:true },
]

console.log(produto.filter(function(p){
    return false
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produto.filter(caro).filter(fragil))
