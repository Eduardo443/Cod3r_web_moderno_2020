const aluno = [
    {nome: 'joao', nota: 7.3, bolsista: false},
    {nome: 'mario', nota: 9.5, bolsista: true},
    {nome: 'maria', nota: 8.6, bolsista: false},
    {nome: 'ana', nota: 4.3, bolsista: true},
]

//Desafio 1 = Todos os alunos são bolsistas?
const resultado1 = (resultado, bolsista) => resultado && bolsista
console.log(aluno.map(a => a.bolsista).reduce(resultado1))

//Desafio 2 = algum é bolsista?
const resultado2 = (resultado, bolsista) => resultado || bolsista
console.log(aluno.map(a => a.bolsista).reduce(resultado2))