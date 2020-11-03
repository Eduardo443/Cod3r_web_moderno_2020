const obj = {nome: "qualquer", preco:1.99, tag: 'promoção', soma(){return a + b + c}}
console.log(JSON.stringify(obj))

//para o tipo Json, deve ser declarado com aspas simples ('), e dentro de chaves ("{}")
// e, os atributos envoltos em aspas dublas ("), exempo:
console.log(JSON.parse('{"a": 1, "b": 1.1, "c": "String"}'))