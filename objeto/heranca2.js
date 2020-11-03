// cadeia de prototipos (prototype chain)
Object.prototype.attr0 = '0' //não recomendado pois aferatá todas as cadeis.

const avo = {attr1: 'a'}
const pai = {__proto__: avo, attr2: 'b', attr3: '3'}
const filho = {__proto__: pai, attr: 'c'}
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo:"california"
}

// super. é uma palavra reservada do prototype, para refrenciar um metodo
const mercedesBenz = {
    velMax: 390,
    modelo: "AMG-gt",
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

//setar a Herança
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(mercedesBenz, carro)

ferrari.acelerarMais(70)
console.log(ferrari.status())

mercedesBenz.acelerarMais(130)
console.log(mercedesBenz.status())