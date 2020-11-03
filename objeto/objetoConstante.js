//pessoa => 123(local da memoria) => {...}
const pessoa = {nome: "Pedro"}
pessoa.nome = "Maria"
console.log (pessoa.nome)

//tendo em vista que é uma const, não pode alterar o local de memoria
// pessoa = {nome: "jaison"}
//console.log (pessoa.nome)

//.freeze impede que novas alterações sejam feitas no objs
Object.freeze(pessoa)

pessoa.end = "rua 123"
console.log(pessoa)

// criar um obj congelado
const pessoaConstante = Object.freeze({nome: "jose"})
console.log(pessoaConstante)