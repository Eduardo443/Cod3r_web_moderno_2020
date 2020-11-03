function getPreco(imposto = 0, moeda = "R$: "){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 - imposto)}`
}

const produto = {
    preco: 3000,
    nome: "coisa",
    desc: .10,
    getPreco
}

console.log(getPreco())
console.log(produto.getPreco())


const carro = {preco: 3000, desc: .17}

// no call, posso incluir novos parametros diretamente
console.log(getPreco.call(carro))
console.log(getPreco.call(carro, this.desc, "$"))

// no apply, posso incluir novos parametros por meio de arrys
console.log(getPreco.apply(carro, [this.desc, "$$"]))