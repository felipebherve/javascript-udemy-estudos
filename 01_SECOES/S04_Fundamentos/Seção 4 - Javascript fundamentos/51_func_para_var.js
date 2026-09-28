// armazenando uma funcao em variavel
const imprimirSoma = function (a , b) {
    console.log(a+b)
}

imprimirSoma(2,3)

// armazenando uma função arrow em uma variável

const soma = (a, b) => { 
    return a+b
}

console.log(soma(2,3));

//retorno implícito

const subtracao = (a, b) => a-b

console.log(subtracao(2, 8))

const aboba = a => console.log(a)

aboba('legall!!')