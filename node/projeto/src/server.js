// const porta = 3003

// const express = require('express')
// const app = express()
// const db = require('./db')
// const bodyParser = require('body-parser')

// app.use(bodyParser.urlencoded({extended: true}))

// app.get('/novosProdutos', (req, res, next) => {
//     res.send(db.getNovosProdutos())
// })

// app.get('/novosProdutos/:id', (req,res,next) => {
//     res.send(db.getProduto(req.params.id))
// })

// app.post('/novosProdutos', (req,res,next) => {
//     const produto = db.salvarProduto({
//         nome: req.body.nome,
//         preco: req.body.preco
//     })
//     res.send(produto)
// })

// app.put('/novosProdutos/: id', (req,res,next) => {
//     const produto = db.salvarProduto({
//         id: req.params.id,
//         nome: req.body.nome,
//         preco: req.body.preco
//     })
//     res.send(produto)
// })

// app.delete('/novosProdutos/: id', (req,res,next) => {
//     const produto = db.excluirProduto(req.params.id)
//     res.send(produto)
// })

// app.listen(porta, () => {
//     console.log(`O servidor esta executando na porta ${porta}`)
// })
const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) // JSON
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})