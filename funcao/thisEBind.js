const pessoa = {
    saudacoes: "Bom dia",
    falar() {
        console.log(this.saudacoes)
    }
}

//bind fixará o this no objeto pessoa
const falarPessoa = pessoa.falar.bind(pessoa)
falarPessoa()