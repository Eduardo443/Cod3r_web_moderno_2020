const bodyparser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './upload')
    },
    filename: function(req, file, callback){
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage}).single('arquivo')

app.post('/upload', (req, res) =>{
    upload(req, res, err =>{
        if(err){
            return res.end('ocorreu um erro')
        }
        res.end('sucesso')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 7
    })
})

app.get('/parOutImpar', (req, res) =>{

    const par = parseInt(req.query.numero) % 2 === 0

    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

app.listen(8080)