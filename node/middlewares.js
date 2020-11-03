//middleware pattern (chain of responsability)
// é um desing com o intuiçõ de executar, de forma flexivel e modular, varias funções

const passo1 = (ctx, next) =>{
    ctx.valor1 = "mid1",
    next()
}

const passo2 = (ctx, next) =>{
    ctx.valor2 = "mid2",
    next()
}

const passo3 = (ctx) => ctx.valor3 = "mid3"

const exec = (ctx, ...middlewares) => {
    const execStaps = indice => {
        middlewares && indice < middlewares.length &&
            middlewares[indice](ctx, () => execStaps(indice + 1))
    }
    execStaps(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)

