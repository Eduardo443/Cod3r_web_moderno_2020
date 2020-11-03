const notas = [7.5, 3.8, 9.0, 7.7, 2.1]

//sem call back
const notasBaixas = []
for (let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//com call back
const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})

const notaBaixas3 = notas.filter(nota => nota < 7)
console.log(notaBaixas3)