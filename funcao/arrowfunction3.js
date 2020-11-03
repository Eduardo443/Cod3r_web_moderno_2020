let comparaComThis = function (param){
    console.log(this === param)
}

comparaComThis(global)

// amarrando o this ao objs  
const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

// por meio da função arrow, podemos fixar o this no modulo atual
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

// função arrow é mais forte que o bind
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)