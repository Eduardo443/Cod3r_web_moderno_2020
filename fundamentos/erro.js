function tratarErroELancar(erro){
    throw{
        nome:erro.name,
        msg: erro.menssage,
        date: new Date
    }
}

function imprimitNomeGritando (obj){
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (error) {
        tratarErroELancar(error)
    }
    finally{
        console.log('final')
    }
}

const obj = {nome:'eduardo'}
imprimitNomeGritando(obj)

