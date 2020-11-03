const x = "global"

function fora(){
    const x = "oi"
    function dentro(){
        return x
    }
    return dentro
}

const resultadoFunc = fora()
console.log(resultadoFunc())