function carro(velocidadeMaxima = 200, delta = 5){
    //atributo privado
    let velocidadeAtual = 0

    //método publico
    this.acelerar = function () {
        if(velocidadeAtual+delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    //método publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new carro()

uno.acelerar()
console.log("a velocidade do uno é: ", uno.getVelocidadeAtual())

const ferrari = new carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log('A velocidade da ferrari é: ', ferrari.getVelocidadeAtual())

console.log(typeof carro)
console.log(typeof ferrari)
console.log(typeof uno)
console.log(typeof acelerar)
