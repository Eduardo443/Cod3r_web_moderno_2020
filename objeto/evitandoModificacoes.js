//Object.preventExtensions
// não permite adicionar novos atribustos, porem excluir ou alterara esta liberado
const produto = Object.preventExtensions({
    nome: "qualquer", preco:1.99, tag: 'promoção'
})
console.log('Extensivel: ', Object.isExtensible(produto))


produto.nome = "borracha"
produto.descricao = "Borracha escolar branca"
delete produto.tag
console.log(produto)

//Object.seal
// não permiti incluir ou excluir atributos, apenas alterar
const pessoa = {nome: "qualquer", preco:1.99, tag: 'promoção'}
Object.seal(pessoa)
console.log('selado:', Object.isSealed(pessoa))

//Object.freeze
//já apresentado antes, porem não permiti nenhum tipo de alteração pois criaçõa
