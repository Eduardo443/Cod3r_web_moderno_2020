// fs.readfile
// emcapsular um readfile em um promise

const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function lerArquivo (caminho){
    return new Promise((resolve) =>{
        fs.readFile(caminho, (_, conteudo) => {
            resolve(conteudo.toString())
        })
    }) 
} 

lerArquivo(caminho)
    .then(console.log)