// criando objetos com a notaçao literar 
const obj1 = {}
obj1.nome = "Eduardo"
console.log(obj1.nome)

// Objects com JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//função contrutora 
function obj3(nome, preco, desc){
    this.nome = nome,
    preco,
    desc,
    this.calcularPreco = () => {
        return preco * (1-desc)
    }
}

const criarObj3 = new obj3("eduardo", 4038.1, .15)
console.log(criarObj3.calcularPreco(), criarObj3.nome)

//função factory

function obj4(nome, salario, faltas){
    nome,
    salario,
    faltas,
    this.calcularSalario = () => {
        const resultado = salario/30 * (30 - faltas)
        return Math.round(resultado)
    }
} 

const salarioEduado = new obj4("eduardo", 4800.1, 7)
console.log(salarioEduado.calcularSalario())
