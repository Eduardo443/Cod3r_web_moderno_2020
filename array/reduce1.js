const aluno = [
    {nome: 'joao', nota: 7.3, bolsista: false},
    {nome: 'mario', nota: 9.5, bolsista: true},
    {nome: 'maria', nota: 8.6, bolsista: false},
    {nome: 'ana', nota: 4.3, bolsista: true},
]

console.log(aluno.map(a => a.nota) )
const resultado = aluno.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(`Acumulador: ${acumulador} + nota atual: ${atual}`)
    return acumulador + atual
}, 0) //valor inicial

console.log(`Resultado final: ${resultado}`)