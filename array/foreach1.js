const aprovados = ['agatha', 'aldo', 'daniel', 'raquel']

//forEach: pode receber até 3 parametros, necessariamente nesta ordem
aprovados.forEach(function (nome, indice, array){
    console.log(`${indice}) ${nome}`)
    //console.log(array)
})

//mesma coisa, só que na função arrow
aprovados.forEach = (nome) => console.log(nome)

const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)