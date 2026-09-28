Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprResult = function(nota) {
    if(nota.entre(9, 10)) {
        console.log('Quadro de Honra')
    } else if(nota.entre(7, 8.99)) {
        console.log('Aprovado')
    } else if(nota.entre(4, 6.99)) {
        console.log('Recuperação')
    } else if(nota.entre(0, 3.99)) {
        console.log('Reprovado')
    } else {
        console.log('NOTA INVALIDA')
    }
    console.log('Final.')
}

imprResult(10)
imprResult(8)
imprResult(7)
imprResult(6)
imprResult(5)
imprResult(3)
imprResult(-1)
imprResult(11)