// raramente usada
// garante que pelo menos uma vez a estrutura seja executada

function valInteiroRandon(min, max){
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

let opcao = -1

do{
    opcao = valInteiroRandon(-1, 10)
    console.log(`A opção escolhida foi ${opcao}.`)
} while (opcao != -1)
console.log('Até aqui foram essas opções.')
