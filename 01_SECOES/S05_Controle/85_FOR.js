let contador = 1
while(contador <=10) {
    console.log(`contando = ${contador}`)
    contador++
}

// agora for é uma versão resumida do while sendo
// primeiro definindo a variável
//segundo ditando a regra para ser verdadeiro
// terceiro a execução da função

for(let i = 1; i <=10; i++){
    console.log(`O valor de i agora é ${i}.`)
}
//navegando por um array usando for
notas = [6.7 , 7.4, 8.12, 10, 9.14]
for(let i = 0; i< notas.length; i++){
    console.log(`Nota: ${notas[i]}`)
}