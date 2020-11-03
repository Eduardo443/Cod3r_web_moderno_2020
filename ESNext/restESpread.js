//Operador ... rest(JUNTAR) e Spread(ESPALHAR)
//usando rest como parametro de funcao

//usando spread com objeto 
const funcionarios = {nome: 'eduardo', salario: 1234}
const clone = { ativo: true, ...funcionarios}
console.log(clone)

//usando spread com array
const grupoA = ['jose', 'maria', 'zezinho']
const grupoB = ['Eduardo', ...grupoA, 'roberta']
console.log(grupoB)
