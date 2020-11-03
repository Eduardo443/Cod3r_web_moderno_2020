const pai = {nome: "pai", corDoCabelo: "preto"}

const filha1 = Object.create(pai)
filha1.nome = "Ana"
console.log(filha1.nome)

const filha2 = Object.create(pai, {
    nome: {value: "Julha", enumerable: true, writable: false }
})
filha2.nome = "Bia"
console.log(`${filha2.nome} tem cabelo ${filha2.corDoCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha2){
    filha2.hasOwnProperty(key) ?
        console.log(key
            ) : console.log(`Por herança: ${key}`)
}
