const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const genero = d => d.genero === "F"
const etinia = p => p.pais === "China"

//notavel: ao inves de um if, else, o retorno ficara assim, mais leve em codigo e facil de ler

const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

/*
const menorSalario = (func, funcAtual) => {
    if( func.salario < funcAtual.salario){
        return func
    }else{
        return funcAtual
    }
}
*/

axios.get(url).then(response => {
    const funcionarios = response.data

    const resultado = funcionarios.filter(genero).filter(etinia).reduce(menorSalario)
    console.log(resultado)
})
