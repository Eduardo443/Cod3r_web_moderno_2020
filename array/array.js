//metodo new array pouco usado
let aprovados = new Array('bia', 'eduardo', 'carlos', 'jose')
console.log(aprovados)

//mais comum!
aprovados = ['bia', 'eduardo', 'carlos', 'jose']
console.log(aprovados[3])

//recomendado para substituir um dado 
aprovados[4] = 'maria'
// jogara para a ultima posição o novo dado
aprovados.push('Zésinho')
console.log(aprovados.length)

//altera os dados, organzando por dados ordem alfabetica
aprovados.sort()
console.log(aprovados)

//splice, função para alterar, incluir ou excluir dados
//o primeiro parametro, indica a posição por onde começar
//o segundo, são quantos itens serão excluidos
aprovados.splice(1, 1)

//podemos tambem adicionar dados, informando o seguindo parametro como sero, nenhum sera excluido
//e apartir do indice 1, ssera incluido so dois elementos
aprovados.splice(1, 0, 'elemento1', 'elemnto2')

//pop, retira o ultimo elemento 
aprovados.pop
console.log(aprovados)

//slice, copia um pedaço do array
let aprovados2 = aprovados.slice(1,3)
console.log(aprovados2)

//shift retira o primeiro dado [0]
aprovados2.shift()
console.log(aprovados2)
//unshift, adiciona no indice 0
aprovados2.unshift('lucas')
console.log(aprovados2)

