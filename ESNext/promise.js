function falaDepois(segundos, frase){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos
        
        * 1000);
    })
}

falaDepois(3, 'que legal!')
    .then(frase => frase.concat('?!'))
    .then(outraFrase => console.log(outraFrase))
    //capturar o reject
    .catch(e => console.log(e))
