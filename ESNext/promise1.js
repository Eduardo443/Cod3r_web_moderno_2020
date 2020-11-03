 const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

new Promise(resolve => {
    resolve(['Ana', 'Bia', 'Carlos', 'Eduado'])
})
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log)
