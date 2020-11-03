const pessoa = {
    nome: "eduardo",
    idade: 19,
    peso: 99.4
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
    
});

//criar atributo e definir propriedades 
Object.defineProperty(pessoa, "dataNascimento", {
    enumerable: true,
    writable: false,
    value: "24/06/2001"
})

pessoa.dataNascimento = "01/01/2001"
console.log(Object.entries(pessoa))

//Object.assign ES6
// o primeiro objeto incluido recebera os demais
// se, algum objeto tiver um paramentro de mesmo nome, o destino será reescrito
const destino = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const assignObj = Object.assign(destino, o1, o2)

console.log(assignObj)