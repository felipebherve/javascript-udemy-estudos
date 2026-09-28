// funcao sem retorno

function imprimirSoma(a, b) {
    console.log(a+b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma()
imprimirSoma(2,3,4,5,5,6,7)


// funcao sem retorno
function soma(a , b = 0){
    return a+b
}
console.log(soma)
console.log(soma(2,3))
console.log(soma(2))
console.log(soma())
