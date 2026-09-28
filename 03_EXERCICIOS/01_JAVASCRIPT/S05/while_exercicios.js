// Nível Iniciante (Contadores e Lógica Simples)
// Contagem Progressiva: Imprima os números de 1 a 10 no console utilizando while.


let contador1 = 0

while (contador1 <= 10){
    console.log(`Contando ${contador1}`)
    contador1++
}


// Contagem Regressiva: Imprima os números de 10 até 0 no console.

let contador2 = 10
while (contador2 >= 0) {
    console.log(`Contando regressivamente ${contador2}.`)
    contador2--
}

// Números Pares: Exiba todos os números pares de 0 a 20.

let sopares = 0

while(sopares <= 20){
    if(sopares % 2 == 0){
        console.log(`Somente pares de 0 a 20 = ${sopares}.`)
    }
sopares++ 
}

//outra forma de pares


let sopares2 = 0;

while (sopares2 <= 20) {
    console.log(`Somente pares de 0 a 20 = ${sopares2}.`);
    sopares2 += 2; // Soma 2 ao valor atual (0, 2, 4, 6...)
}

// Números Ímpares: Exiba todos os números ímpares de 0 a 20.

let soimpares = 0

while(soimpares <=20){
    if(soimpares % 2 != 0){  
           console.log(`Somente ímpares de 0 a 20 = ${soimpares}.`)
    }
soimpares++    
}



// Soma de 1 a 100: Calcule o somatório de todos os números de 1 a 100 e exiba o resultado final.
let contador3 = 0

let resultadocontador3 = 0

while(contador3 <= 100){
    resultadocontador3 = resultadocontador3 + contador3;
    contador3++
}
console.log(`O resultado da soma dos números 1 ao 100 é ${resultadocontador3}.`)

// Tabuada Fixa: Escolha um número (ex: 5) e imprima a tabuada dele de 1 a 10 usando while. 
const tabuada = function(num4){
    let contador4 = 0;
    let resultado4 = 0;
    console.log(`A tabuada de ${num4} é:`);

    while(contador4 <= 10){
        resultado4 = contador4 * num4;
        console.log(`${num4} x ${contador4} = ${resultado4}.`)
        contador4++
    }
}

tabuada(1)
tabuada(20)
tabuada(13)


// Nível Intermediário (Interação e Acumuladores)

// Soma até Parar: Use prompt para pedir números ao usuário e somá-los.
// O loop deve parar apenas quando o usuário digitar 0.
// Média de Valores: Peça ao usuário 5 notas de alunos e, ao final, exiba a média aritmética delas.
// Fatorial: Peça um número ao usuário (ex: 5) e calcule o seu fatorial (5! = 5 * 4 * 3 * 2 * 1) utilizando um loop while.
// Validação de Dados: Crie um programa que peça um nome de usuário e uma senha. Enquanto o nome for igual à senha, exiba um erro e peça os dados novamente. 

// Nível Desafio
// Sequência de Fibonacci: Imprima os primeiros 10 números da sequência de Fibonacci (onde cada número é a soma dos dois anteriores: 0, 1, 1, 2, 3, 5...) utilizando while. 
// Rocketseat
// Rocketseat
// Dicas de Ouro para JavaScript:
// Evite Loops Infinitos: Certifique-se sempre de atualizar a variável de controle (ex: i++) dentro do bloco do while.
// Template Strings: Use ${variavel} para exibir mensagens formatadas de forma mais limpa.
// Plataformas de Treino: Para exercícios interativos mais avançados, recomendo sites como o HackerRank ou Codewars. 
// YouTube
// YouTube
//  +3