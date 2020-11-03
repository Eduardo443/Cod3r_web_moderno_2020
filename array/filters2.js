Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
}

const produto = [
    {nome: "Notebook", preco: 2499 , fragil:true },
    {nome: "Ipad pro", preco:4999 , fragil: true },
    {nome: "Copo de Vidros", preco: 12.49 , fragil:true },
    {nome: "Copo de Plastico", preco:18.99 , fragil:true },
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produto.filter2(caro).filter2(fragil))