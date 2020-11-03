// min e max setados com valores padroes em caso de não houver imput
function rand ([min = 0, max = 1000]){
    if (max < min) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50,40]))
console.log(rand([992]))
console.log(rand([]))