function meuobjeto() {}
console.log(meuobjeto.prototype)

const obj1 = new meuobjeto
const obj2 = new meuobjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(meuobjeto.prototype === obj1.__proto__)

meuobjeto.prototype.nome = "Edu"
meuobjeto.prototype.falar = function(){
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}

obj1.falar()
obj2.nome = "Rafael"
obj2.falar()

const obj3 = {}
obj3.__proto__ = meuobjeto.prototype
obj3.nome = "Maria"
obj3.falar() 
