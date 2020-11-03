const imprimirResultado = function(nota){
    switch (Math.floor(nota)){
        case 10: case 9:
            console.log('Aprovado com estrelinha')
            break
        case 8: case 7:
            console.log('Aprovado na mediocridade')
            break
        case 6: case 5: case 4:
            console.log('recuperação, tá por um fio')
            break
        case 3: case 2: case 1: case 0:
            console.log('reprovado, mais sorte na proxima')
            break
        default:
            console.log('Nota invalida')
    }
}

imprimirResultado(8)