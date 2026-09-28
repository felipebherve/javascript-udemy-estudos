// focado em repetições indeterminada de vezes
//Vamos criar primeiro uma função que me retorne um numero aleatório inteiro sempre

function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random()* (max-min) + min
    return Math.floor(valor)
}

// while significa que a expreção retorne só quando for verdadeira
// neste exemplo definiremos que o while parará
//de ser executado quando encontrar-mos -1 como resultado

let opcao = 0;
while (opcao != -1){
    opcao = getInteiroAleatorioEntre(-1, 100)
    console.log(`A opção dessa vez foi ${opcao}.`)
}

console.log('Tivemos esses resultados até chegar em -1')