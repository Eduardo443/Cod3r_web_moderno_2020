//array
const valores = [7.7, 5.8, 2.5, 4.8]
//consulta
console.log(valores[0], valores[3])
console.log(valores[5])

//inserir novos valores
valores[4] = 10
console.log(valores)
//consultar tamanho da array
console.log(valores.length)

//inserir valores em sequencia
valores.push({id: 3}, false, null, 'test')
console.log(valores)

//retirar o ultimo item
console.log(valores.pop())
// apagar valor especifico
delete valores[0]
console.log(valores)

console,log(typeof valores)