const saudacao = 'opa'  // contexto léxico 1

function exec(){
    const saudacao = 'falaaa' //contexto léxico 2
    return saudacao
}

//objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Eduardo',
    idade: 19,
    peso: 98.7,
    endereco: {
        lougrado: 'Rua: Gustavo Zimmermann',
        numero: 2660,
        complemento: 'lote 219'
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)