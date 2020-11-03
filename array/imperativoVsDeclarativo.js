const aluno = [
    {nome: 'joao', nota: 7.3},
    {nome: 'mario', nota: 9.5},
    {nome: 'maria', nota: 8.6},
    {nome: 'ana', nota: 4.3,},
]

//imperativo
let total1 = 0
for(let i = 0; i < aluno.length; i++){
    total1 += aluno[i].nota
}
console.log(total1 / aluno.length)

//Declarativa

const getNota = aluno => aluno.nota
const soma = (concentrar, atual) => concentrar + atual
const resultado = aluno.map(getNota).reduce(soma)

console.log(resultado / aluno.length)