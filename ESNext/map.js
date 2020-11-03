const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('algular', {framework: true})

console.log(tecnologias.react)
console.log(tecnologias.get('react'))

const chavesVariadas = new Map([
    [function() { }, 'função'],
    [{}, 'objeto'],
    [123, 'numero'],
])

chavesVariadas.forEach((ch, vl) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)