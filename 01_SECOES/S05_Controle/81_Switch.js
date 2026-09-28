const impResult = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota Inválida')
    }
    console.log('Fim')
}

console.log('Para 11 :' + impResult(11))
impResult(10)
impResult(8.99)
impResult(7.5)
impResult(5)
impResult(4)
impResult(2)
impResult(-1)