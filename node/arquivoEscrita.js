const fs = require('fs')

const produto = {
    nome: "teclado",
    modelo:"kala RGB",
    preco: 344.99
}

fs.writeFile(__dirname + "/arquivogerado.json", JSON.stringify(produto), err => {
    console.log(err || "arquivo salvo!!")
})