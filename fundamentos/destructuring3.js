// min e max setados com valores padroes em caso de não houver imput
function rand ({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    console.log(Math.floor(valor))
}

rand({min: 100, max: 150})
rand({})