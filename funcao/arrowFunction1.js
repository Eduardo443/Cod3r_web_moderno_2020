let dobro = function(a){
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => a * 2 //return implicito

console.log (dobro)



let ola = function (){
    return 'ola'
}

ola = () => 'Olá'

ola = _ => "ola" // possue um parametro '_'

console.log(ola())