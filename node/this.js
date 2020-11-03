console.log(this === global) //fora de uma função, False
console.log(this === module) //False, pois this é um objeto

console.log(this === module.exports) //true
console.log(this === exports) //true, aponta para a mesma referencia

function logThis(){
    console.log("dentro de uma função...")
    console.log(this === exports) //false 
    console.log(this === module.exports) //false 
    console.log(this === global) // dentro de uma função, True
}

logThis()