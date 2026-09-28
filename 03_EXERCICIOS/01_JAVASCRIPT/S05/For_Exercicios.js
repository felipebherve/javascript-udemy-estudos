// Básicos de Contagem
// 1 a 10: Imprima os números de 1 a 10.

for(let contador1 = 0 ; contador1 <= 10; contador1++){
    console.log(`Contando: ${contador1}`)
}
// Regressiva: Imprima os números de 10 até 1.
for(let decontador = 10; decontador >= 0; decontador--){
    console.log(`Decrescendo: ${decontador}.`)
}
// Pares: Imprima todos os números pares de 0 a 20.
for(let sopares = 0; sopares <= 20; sopares++){
    if(sopares % 2 == 0){
    console.log(`Somente pares: ${sopares}.`)
}
}

//caso queira que dê um número que a gente queira
const ApenasPares = function(i){
    console.log(`Esses são os números pares de 0 até ${i}.`)
    for(let sopares2 = 0 ;sopares2 <= i ; sopares2++){        
        if(sopares2 % 2 == 0){
            console.log(sopares2)
        }
    }
}

ApenasPares(100)
// Ímpares: Imprima todos os números ímpares de 1 a 15.
const SoImpares = function(i){

    console.log(`Estes são os números ímpares de ${i} a 0.`)
    for(let base1 = 0; base1 = i; i--){
        if(i % 2 != 0){
            console.log(i)
        }
    }
}
SoImpares(15)
// Múltiplos de 5: Imprima os múltiplos de 5, de 0 a 50.
for(let i= 0; i <=50; i++){
    if(i % 5 == 0){
        console.log(i)
    }
}

//ou

for(let i = 0; i <=50; i += 5){
    console.log(`Múltiplos de 5 = ${i}`)
}

// Soma Total: Calcule a soma de todos os números de 1 a 100 e exiba o resultado.
let somadosvalores = 0
for(let i = 0; i <=100; i++){
somadosvalores = somadosvalores+i
}
console.log(`Soma total ${somadosvalores}`)


// Tabuadas e Cálculos
// Tabuada: Exiba a tabuada completa do número que quiser 
// até o valor que quiser.
const tabuada = function (i, x){
    console.log(`A tabuada de ${x} até 0 do número ${i} é:`);
    let resultadotabuada = 0;
    for(x; x >=0; x--){
        resultadotabuada = i*x
        console.log(`${i} x ${x} = ${resultadotabuada}`)
    } 
}
tabuada(5, 10)

//para forma crescente
const tabuada2 = function (i, x) {
    console.log(`A tabuada do ${i} de 0 até ${x} é:`);

    for (let contador = 0; contador <= x; contador++) {
        let resultado = i * contador;
        console.log(`${i} x ${contador} = ${resultado}`);
    } 
}

tabuada2(5, 10);

// Faça uma função que gere números aleatórios repetidamente até o resultado ser um número ímpar
// após isso faça com que a const julianoAmanda repitam usando for uma função chamada sexo
// onde irá contar quantas vezes o numero aleatório rodou até ser ímpar
// dando como resultado João Henrique nasceu após x tentativas (sendo x o numero de contagem de vezes executado a função sexo)!

//função randomica
const nrandon = function() {
    return Math.floor(Math.random() * 100) + 1;
}


const julianoAmanda = function() {
    let tentativas = 0;
    let encontrouImpar = false;

    for (tentativas = 1; !encontrouImpar; tentativas++) {
        
       
        let numeroSorteado = nrandon();
        
        console.log(`Tentativa ${tentativas}: O número foi ${numeroSorteado}`);

        if (numeroSorteado % 2 !== 0) {
            encontrouImpar = true; 
            
            
            console.log(`João Henrique nasceu após ${tentativas} tentativas!`);
        }
    }
}

julianoAmanda();

// Quadrados: Imprima o quadrado de cada número de 1 a 10 (ex: 1, 4, 9...).

const quadrados = function(){
    for(numeros = 1; numeros <= 10; numeros++){
        console.log(`O quadrado de ${numeros} é: ${numeros**2}`)
    }
}
quadrados()
// Fatorial com For: Calcule o fatorial de um número escolhido (ex: 5!).
const fatorial = function(x){
    let total = 1
    for(fatorando = x; fatorando >= 1; fatorando--){
        total *= fatorando;
        console.log(`Multiplicando por ${fatorando}, o total agora é: ${total}`)
    }
    return console.log(`Então ${x}! = ${total}`);
}

fatorial(10)

// Potência de 2: Exiba as primeiras 10 potências de 2 (2, 4, 8, 16...).
const potencia_de_dois = function(){
    for(let x=1; x <= 10; x++){
    let total = 2 ** x;
    console.log(`${x}) 2**${x}= ${total}`);
    }
};
potencia_de_dois();

const potencia_manual = function() {
    let resultado = 1; // Nosso acumulador começa em 1 (2^0)

    for (let x = 1; x <= 10; x++) {
        resultado = resultado * 2; // Dobramos o valor anterior
        console.log(`${x}) 2^${x} = ${resultado}`);
    }
};
potencia_manual();
// Arrays (Listas)
// Percorrer Lista: Dado o array ['Maçã', 'Banana', 'Uva'], use o for para imprimir cada fruta.
// Soma de Array: Dado um array de números [10, 20, 30, 40], some todos eles.
// Maior Número: Encontre o maior número em um array de números desordenados.
// Contar Itens: Conte quantos nomes em uma lista começam com a letra "A".
// Filtrar Positivos: Dado um array com números positivos e negativos, crie um novo array apenas com os positivos.
// Strings e Lógica Visual
// Letra por Letra: Receba uma string (ex: "JavaScript") e imprima cada letra em uma linha diferente.
// Contar Letras: Conte quantas vezes a letra "a" aparece na frase "O rato roeu a roupa do rei".
// Inverter String: Use o for para percorrer uma string de trás para frente e exibi-la invertida.
// Triângulo de Asteriscos: Imprima um triângulo no console que cresce a cada linha:
// *
// **
// ***
// ****
// Substituição: Percorra um array de números e, se o número for menor que 5, substitua-o por 0 no console.
