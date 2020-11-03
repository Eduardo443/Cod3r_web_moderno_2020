const fs = require('fs')

//__dirname = diretorio atual
const caminho = __dirname + "/arquivo.json"

//Leitura sincrona.
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// leitura assincrona.
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

//Leitura com recursos da linguagem
const config = require('./arquivo')
console.log(config.db)

// verificando o conteudo do diretorio
fs.readdir(__dirname, (err, arquivos) => {
    console.log('conteudo da pasta...')
    console.log(arquivos)  //arquivos recebe uma stringo com os dados
})