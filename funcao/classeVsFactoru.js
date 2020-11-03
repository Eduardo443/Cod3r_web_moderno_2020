//Class construtora
class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar(){
        return console.log(`Meu nome é ${this.nome}`)
    }
}

const joaoPessoa = new Pessoa("joao") 
joaoPessoa.falar()


//função construtora
function Pessoa2(nome) {
    this.nome = nome

    this.falar = function(){
        return console.log(`Meu nome é ${nome}`)
    }
}

const JoaoFunc = new Pessoa2 ('Jose')
JoaoFunc.falar()



//Função Factory
const Pessoa3 = nome => {
    return{ 
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const JoaoFactory = Pessoa3("Edu")
JoaoFactory.falar()
