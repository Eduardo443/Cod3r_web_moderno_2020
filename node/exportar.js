console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null //null esta sendoa trubuido a função exports, que aponta para module

console.log(module.exports)

exports = {name:"test"}

console.log(module.exports)

module.exports = {publico:true}

console.log(module.exports)