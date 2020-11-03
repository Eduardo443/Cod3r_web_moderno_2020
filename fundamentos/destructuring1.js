// novo recurso do ES2015

const pessoa = {
    nome: 'Eduardo',
    idade: 19,
    peso: 98.7,
    endereco: {
        lougrado: 'Rua: Gustavo Zimmermann',
        numero: 2660,
        complemento: 'lote 219'
    }
}

//extraindo do objeto alguns itens especificos
const { nome, idade} = pessoa 
console.log(nome, idade)

// podendo atribuir um novo nome para o valor estraido
const { nome: n, idade: i} = pessoa 
console.log(n, i)

// caso não esncontre o valor, podemos atribuir um retorno padrao
const {sobrenome, bmeHumorado = true} = pessoa
console.log(sobrenome, bmeHumorado)

const { endereco: {logradouro}} = pessoa
console.log(logradouro)