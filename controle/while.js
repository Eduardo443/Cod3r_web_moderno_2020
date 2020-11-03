const numeroAleatorio = function (min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let valorAleatorio = 0

while ( valorAleatorio != -1){
    valorAleatorio = numeroAleatorio(-5, 10)
    console.log(`O numero sorteado foi ${valorAleatorio}.`)
}

console.log ('fim.')