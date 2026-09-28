// 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
// multiplicação e divisão desses valores.
console.log('Exercício 01')
const ex1 = function(x,y){
        console.log(`A soma de ${x} e ${y} é igual a ${x+y}`);
        console.log(`A subitração de ${x} e ${y} é igual a ${x-y}`);
        console.log(`A multiplicação de ${x} e ${y} é igual a ${x*y}`);
        console.log(`A divisão de ${x} por ${y} é igual a ${x/y}`);
        console.log(`A divisão de ${y} por ${x} é igual a ${y/x}`);

}
ex1(2,7)

// 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo).
console.log('Exercício 02')

const ex2 = function( x=1, y=1, z=1){
    if(x == y == z){
        console.log(`O triângulo de lados ${x}, ${y}, ${z} é Equilátero`)
    } else if(x == y || x == z || y == z){
        console.log(`O triângulo de lados ${x}, ${y}, ${z} é Isósceçes`)
    } else {
        console.log(`O triângulo de lados ${x}, ${y}, ${z} é Escaleno`)
    }
}
ex2()
ex2(3,2,1)
ex2(3,2,2)

// 03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
console.log('Exercício 03')

const ex3 = function(x=1,y=1) {
    console.log(`Caso ${x} seja elevado a ${y} o valor será ${x**y}`)
    console.log(`Caso ${y} seja elevado a ${x} o valor será ${y**x}`)
}
ex3(2,5)
ex3(0)

// 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
// e o resto da divisão destes dois valores.
console.log('Exercício 04')

const ex4 = function(x=1,y=1){
    console.log(`O resto da divisão entre ${x} e ${y} será ${x%y}`)
    console.log(`O resto da divisão entre ${y} e ${x} será ${y%x}`)
}
ex4(2,7)
ex4(2)

// 05) Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
// seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
// importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
// um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
// que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).
console.log('Exercício 05')

const ex5 = (x) =>console.log(x.toFixed(2))

ex5(0.30000000000000004)

// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.
console.log('Exercício 06')

const ex6JurosSimples = function(C,i,t){
    var J=C*i*t
    var M=J+C
    console.log(`O capital inicial ${C} investido por ${t} meses a uma taxa de ${i} terá em juros simples: ${J} e com montante de: ${M}`)
}
ex6JurosSimples(1500,0.35,8)

const ex6JurosCompostos = function(C,i,t){
    var M=C*(1+i)**t
    var J=M-C
    console.log(`O capital inicial ${C} investido por ${t} meses a uma taxa de ${i} terá em juros compostos: ${J.toFixed(2)} e com montante de: ${M.toFixed(2)}`)
}
ex6JurosCompostos(1500,0.35,8)

// 07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
// elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
// parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
// -5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
// que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
// “Delta é negativo”.
console.log('Exercício 07')

const ex7 = function(a,b,c) {
    let delta= (b**2)-(4*a*c)
    if(delta>0){
        console.log(`Terá duas raizes reais diferentes.`)
    }else if(delta = 0){
        console.log('Duas raizes reais e iguais.')
    }else{
        console.log('Não existem raízes reais.')
    }

}
ex7(3,-5,12)
ex7(5,12,3)


// 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
// registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
// mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
// pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
// vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
// jogo. (Número do pior jogo).
// Obs.: O primeiro jogo não conta como novo recorde do melhor.
// Exemplo:
// String: “10 20 20 8 25 3 0 30 1”
// Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
// aconteceu no sétimo jogo.)
/* explicação do gpt */
console.log('Exercício 08 COM DÚVIDAS')

function ex8(stringPontuacoes) {
    // 1. Transforma a string em array de números
    let pontuacoes = stringPontuacoes.split(" ").map(Number);
    
    let maiorPontuacao = pontuacoes[0];
    let menorPontuacao = pontuacoes[0];
    let recordesBatidos = 0;
    let piorJogo = 1; // Posição do jogo (1º, 2º...)

    for (let i = 1; i < pontuacoes.length; i++) {
        // Se a pontuação atual for MAIOR que o recorde
        if (pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i];
            recordesBatidos++;
        } 
        // Se a pontuação atual for MENOR que o pior desempenho
        else if (pontuacoes[i] < menorPontuacao) {
            menorPontuacao = pontuacoes[i];
            piorJogo = i + 1; // +1 porque o array começa no 0, mas o jogo é o 1º, 2º...
        }
    }

    return [recordesBatidos, piorJogo];
}

// Testando com a string do exercício
let resultado = ex8("10 20 20 8 25 3 0 30 1");
console.log(resultado); // [3, 7] -> Bateu recorde 3 vezes, 7º jogo foi o pior

// 09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
// classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
// possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
// que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
// arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
// 85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
// seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
// e o aluno será aprovado.
console.log('Exercício 09')

const ex9 = function(nota=1){
    if (nota<0 || nota >100){
        console.log('NOTA INVALIDA');
        return;
    }
    let restoNota = nota%5;
    if(nota >=38 && restoNota>=3){
        nota = nota+(5 - restoNota);
    }
    if(nota >=40){
        console.log(`Parabéns você foi aprovado com ${nota} pontos`)
    }else{
        console.log(`Reprovado com ${nota} pontos`)
    }

}

ex9(100)
ex9(38)
ex9(36)
ex9(200)

// 10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
// ou false.
console.log('Exercício 10')

const ex10 = function(x) {
    let y = x%3
    if(y === 0){
        console.log('True')
    }else{
        console.log('False')
    }
}
ex10(3)
ex10(33)
ex10(399)
ex10(5)

// 11) As regras para o cálculo dos anos bissextos são as seguintes:
// De 4 em 4 anos é ano bissexto;
// De 100 em 100 anos não é ano bissexto;
// De 400 em 400 anos é ano bissexto;
// Prevalecem as últimas regras sobre as primeiras.
// Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
// mensagem e retornando true ou false.
console.log('Exercício 11')

const ex11 = function(ano=1){
    let x = ano%4
    let y = ano%100
    let z = ano%400
    if(z === 0){
        console.log(`Pela regra dos 400 anos, o ano de ${ano} é bissexto.`)
    } else if(x === 0 && y !== 0){
        console.log(`Pela regra dos 4 anos, o ano ${ano} é bissexto`)
    } else if(y === 0){
        console.log(`Pela regra dos 100 anos, o ano ${ano} NÃO é bissexto.`)
    } else{
        console.log(`O ano ${ano} não é bissexto`)
    }
}
ex11(100)
ex11(400)
ex11(4)
ex11(500)
ex11(2026)
ex11(2024)
ex11(2028)

/*exemplo de uma linha do gpt*/

// const ehBissexto = ano => (ano % 400 === 0) || (ano % 4 === 0 && ano % 100 !== 0);

// console.log(ehBissexto(2024)); // true
// console.log(ehBissexto(1900)); // false


// 12) Faça um algoritmo que calcule o fatorial de um número.
console.log('Exercício 12')

const ex12 = function(x){
   let resultado = 1


// Início: Comece o contador i valendo o número que eu recebi (ex: 5).
// Condição: Continue fazendo isso enquanto o i for maior que 1.
// Passo: A cada volta, diminua 1 do valor de i (vire 4, depois 3, depois 2...)."

   for(let i = x; i>1; i--){
    resultado = resultado*i
// "O trabalho real: pegue o que já está na minha caixinha (resultado) (inicia igual ao valor de x)
//  e multiplique pelo valor atual do contador (i). 
//  Guarde o novo valor na mesma caixinha."
    console.log(`${resultado/i} * ${i} = ${resultado}`)
   }
   return console.log(`Então ${x} fatorial é ${resultado}`);
}
ex12(15)

// 13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
// dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
console.log('Exercício 13')

const ex13 = function(x=1){
if (x < 1 || x > 31) {
        console.log(`O dia ${x} é um DIA INVÁLIDO (fora do mês)`);
        return; // Para a função aqui
}
    switch(true){
        case (x%7 === 1):
            console.log(`O dia ${x} é domingo!`)
            break
        case(x%7 === 0):
            console.log(`O dia ${x} é sábado!`)
        break
        default:
            console.log(`O dia ${x} é inválido`)
    }

}
ex13(7)
ex13(1)
ex13(4)
ex13(40)

// 14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
// casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
// escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
// também um default, que retornará uma mensagem de erro no console.
console.log("Exercício 14")

const ex14 = function(fruta){
   const limpar = (texto) => {
    return texto
        .normalize("NFD")               // Decompõe acentos (á -> a + ´)
        .replace(/[\u0300-\u036f]/g, "") // Remove os acentos
        .toLowerCase()                  // Deixa tudo minúsculo
        .trim();                        // Remove espaços extras no início/fim
}
const x = limpar(fruta)


    switch(true){
        case (x == 'maca'):
            console.log("Não vendemos esta fruta aqui.")
            break
        case(x == "kiwi"):
            console.log("Estamos com escassez de kiwis.")
            break
        case(x == "melancia"):
            console.log("Está 3 reais o kg da melancia.")
        default:
            console.log('HEIN??? VOCÊ DISSE O QUE?')

    }
}
ex14('Maçã')
ex14('Kiwi')
ex14('Melancia')
ex14('Tabaco')

/*15) Um homem decidiu ir à uma revenda comprar um carro. 
Ele deseja comprar um carro hatch, 
e a revenda possui, além de carros hatch,
 sedans, motocicletas e caminhonetes.
  Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne:
 “Compra efetuada com sucesso”. Nas outras opções,
  retorne:
   “Tem certezaque não prefere este modelo?”.
 Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”.*/ 
console.log('EXERCICIO 15')
const ex15 = function(carro){
    switch(true){
        case  (carro == "Hatch"):
            console.log('Compra efetuada com sucesso')
            break
        case (carro == 'Sedans'):
        case (carro == 'Motocicletas'):
        case (carro == 'Caminhonetes'):
            console.log('Tem certezaque não prefere este modelo?')
            break
        default:
            console.log('Não trabalhamos com este tipo de automóvel aqui.')
    }
}

ex15('Hatch')
ex15('Sedans')
ex15('Motocicletas')
ex15('Caminhonetes')
ex15('Helicópteros')

/*16) Utilizando a estrutura do Switch
faça um programa que simule uma calculadora básica
O programa recebe como parâmetros dois valores numéricos
e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos.
Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. 
Crie um caso default para operações inválidas.*/

// Parametros x e z
console.log('EXERCICIO 16')
const ex16 = function(x = 1,y,z=1){
  
    switch(true){
        case(typeof(x) != typeof(1)): case(typeof(z) != typeof(1)):
        console.log(`Algum dos valores "${x}" ou "${y}" não são números válidos`)
        break
        case(y == "+"):
        console.log(`A operação ${x}+${z} é igual a: "${x+z}"`)
        break
        case(y == "-"):
        console.log(`A operação ${x} + ${z} é igual a: "${x+z}"`)
        break
        case(y == "/"):
        console.log(`A operação ${x} / ${z} é igual a: "${x/z}"`)
        break
        case(y == "%"):
        console.log(`A operação ${x} % ${z} é igual a: "${x%z}"`)
        break
        case(y == "*"):
        console.log(`A operação ${x} x ${z} é igual a: "${x*z}"`)
        break
        default:
            console.log(`Algum dos valores "${x}", "${y}" ou "${z}", não são válidos para uma operação de matemática`)
    }
}

ex16('n',2,'1')
ex16(4,"/",12)
ex16(3,"+",1)

const calculadora = function(x, operador, z) {
    // Validação de tipo
    if (typeof x !== 'number' || typeof z !== 'number') {
        console.log(`Erro: "${x}" ou "${z}" não são números válidos!`);
        return;
    }

    // Lógica das operações
    switch (operador) {
        case '+':
            console.log(`A operação ${x} + ${z} é igual a ${x + z}`);
            break;
        case '-':
            console.log(`A operação ${x} - ${z} é igual a ${x - z}`);
            break;
        case '/':
            // Bônus: evitar divisão por zero
            if (z === 0) {
                console.log("Erro: Não é possível dividir por zero!");
            } else {
                console.log(`A operação ${x} / ${z} é igual a ${x / z}`);
            }
            break;
        case '*':
            console.log(`A operação ${x} * ${z} é igual a ${x * z}`);
            break;
        case '%':
            console.log(`A operação ${x} % ${z} é igual a ${x % z}`);
            break;
        default:
            console.log(`Erro: Operador "${operador}" é inválido!`);
    }
}

// Testes
calculadora(3, "-", 8);
calculadora(3, "/", 8);
calculadora(3,"-",8)
calculadora(3,"/",8)
// calculadora(3,"*",8)
// calculadora(3,"%",8)
// calculadora(3,"+",8)
// calculadora(3,"+","n")

/*17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.*/

console.log("EXERCICIO 17")
//CRIAR A FUNÇÃO
//VARIAVEIS plano, salario
//default plano de trabalho invalido

const ex17 = function(plano, salario){
    console.log(`Para o plano ${plano} e o salário R$${salario}.`)
    switch(plano){
        case "A":
            console.log(`Plano salarial A: Salario base : R$${salario} +10% = R$${(salario*0.1)+salario}`)
            break
        case "B":
            console.log(`Plano salarial B: Salario base : R$${salario} +20% = R$${(salario*0.2)+salario}`)
            break
        case "C":
            console.log(`Plano salarial C: Salario base : R$${salario} +30% = R$${(salario*0.3)+salario}`)
            break
        default:
            console.log("Plano Inválido")
    }
}
ex17("A",1500)
ex17("B",1500)
ex17("C",1500)
ex17("D",1500)

// 18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
// switch. Crie um case default que escreva ‘Número fora do intervalo.’
console.log('EXERCICIO 18')
/*
1 - criar função
2 - criar case
3 - criar default
*/
const ex18 = function(x){
    //case
    console.log("Essa função escreve o número por extenso:")
    switch(x){
        case 0:
            console.log(`${x} = Zero`)
            break
        case 1:
            console.log(`${x} = Um`)
            break
        case 2:
            console.log(`${x} = Dois`)
            break
        case 3:
            console.log(`${x} = Três`)
            break
        case 4:
            console.log(`${x} = Quatro`)
            break
        case 5:
            console.log(`${x} = Cinco`)
            break
        case 6:
            console.log(`${x} = Seis`)
            break
        case 7:
            console.log(`${x} = Sete`)
            break
        case 8:
            console.log(`${x} = Oito`)
            break
        case 9:
            console.log(`${x} = Nove`)
            break
        case 10:
            console.log(`${x} = Dez`)
            break
        default:
            console.log(`${x} não está nos parametros da função`)
    }
}
ex18(0)
ex18(10)
ex18("n")



// 19) O cardápio de uma lanchonete é o seguinte:
// Código Descrição do Produto Preço
// 100 Cachorro Quente R$ 3,00
// 200 Hambúrguer Simples R$ 4,00
// 300 Cheeseburguer R$ 5,50
// 400 Bauru R$ 7,50
// 500 Refrigerante R$ 3,50
// 600 Suco R$ 2,80
// Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
// a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
// comando switch. Crie um caso default para produto não existente.
console.log('EXERCICIO 19')
/*
1 - criar a função
2 - parametros da função:
codigo, quantidade
3 - default produto inexistente
*/
const ex19 = function(codigo, quantidade){
    if(typeof quantidade !== 'number'){return console.log(`${quantidade} não representa um valor válido`)
    }
    switch(codigo){
        case 100:
            console.log(`Cachorro Quente: R$3,00un. ${quantidade}un: R$${quantidade*3}`)
            break
        case 200:
            console.log(`Hambúrguer Simples: R$4,00un. ${quantidade}un: R$${quantidade*4}`)
            break
        case 300:
            console.log(`Cheeseburguer R$5,50un. ${quantidade}un: R$${quantidade*5.5}`)
            break
        case 400:
            console.log(`Bauru: R$7,50un. ${quantidade}un: R$${quantidade*7.5}`)
            break
        case 500:
            console.log(`Refrigerante R$3,50un. ${quantidade}un: R$${quantidade*3.5}`)
            break
        case 600:
            console.log(`Suco: R$2,80un. ${quantidade}un: R$${quantidade*2.8}`)
            break
        default:
            console.log(`${codigo} código inválido.`)
    }
} 
ex19(100,30)
ex19(500,29)
ex19(800,30)
ex19(100,"borboleta")

// 20) Crie um programa para informar quais e quantas notas são necessárias para 
// entregar o mínimo de cédulas
// para um determinado valor informado pelo usuário considerando notas de 
// R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
// Seu programa deve mostrar apenas as notas utilizadas.
//  Por exemplo, ao solicitar R$18, o programa deve
// informar apenas a seguinte informação (note que não foram exibidas informações
//  sobre as demais cédulas): 1
// nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.

/*
Programa para dividir notas nos seguintes valores
100, 50, 10, 5, 1
o número x é divisivel por 100 sem virgula?
se não for divisivel por 100 criar um default
variaveis
recebido, resto


*/

const ex20 = function(recebido){
    if(typeof recebido !== 'number' || recebido <= 0 ){
        return console.log(`"${recebido}" não é um valor válido.`)
    }

    let valorAtual = recebido;

    //R$ 100 -
    if(valorAtual >=100){
        let notas100 = Math.floor(valorAtual / 100);
        console.log(`${notas100} notas de R$100,00`)
        valorAtual = valorAtual % 100;
    }

    //R$ 50
    if (valorAtual >= 50){
        let notas50 = Math.floor(valorAtual / 50);
        console.log(`${notas50} notas de R$ 50,00`);
        valorAtual = valorAtual %50;
    }
    //R$ 10
    if (valorAtual >= 10){
        let notas10 = Math.floor(valorAtual / 10);
        console.log(`${notas10} notas de R$ 10,00`)
        valorAtual = valorAtual % 10
    }
    //R$ 5
    if(valorAtual >= 5){
        let notas5 = Math.floor(valorAtual / 5);
        console.log(`${notas5} notas de R$ 5,00`);
        valorAtual = valorAtual % 5;
    }
    //R$ 1
    if(valorAtual >= 1){
        let notas1 = valorAtual;
        console.log(`${notas1} notas de R$ 1,00`)
    }

}
ex20(-1)
 ex20(136)

// 21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
// considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 
// 1) crianças com menos de 10 anos pagam R$80;
// 2) conveniados com idade entre 10 e 30 anos pagam R$50;
// 3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95;
// 4) conveniados acima de 60 anos pagam R$130

const ex21 = function(idade){
    let planoBase = 100
    console.log(`Plano de saúde para o seguinte caso:`)
    if(idade<=0){
        console.log(`Idade indisponível.`)
    }
    switch(true){
        case idade <= 10:
            console.log(`Para a criança de ${idade} anos será R$ ${80+planoBase}`)
            break
        case idade > 10 || idade <= 30: 
            console.log(`Para o individuo de ${idade} anos será R$ ${50+planoBase}`)
            break
        case idade > 30 || idade <= 60:
            console.log(`Para o individuo de ${idade} anos será R$ ${95+planoBase}`)
            break
        case idade > 60:
            console.log(`Para o individuo de ${idade} anos será R$ ${130+planoBase}`)
        default:
            console.log('Valor não encontrado')
    }
}
ex21(5)
ex21(10)
ex21(30)
ex21(60)
ex21(120)

// 22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação.
// A função recebe como parâmetro um inteiro que representa o mês 
// (1 - janeiro, 2 - fevereiro…)
// que foi paga e o valor da anuidade. 
// A anuidade deve ser paga no mês de janeiro.
//  Por mês, é cobrado 5% de juros (sob o regime de juros compostos).
//  O retorno deve ser o valor a ser pago para o respectivo mês escolhido.

const ex22 = function(mes,valor){
    if(mes < 1 || mes > 12 || typeof valor != 'number'){
        console.log('Valores errados')
    }else{
        console.log(`Para o mês ${mes} e anuidade ${valor}:`)
    }
    
    let p = valor
    let i = 0.05
    let n = mes-1
    let m = (p * (1 + i) ** n).toFixed(2);
    switch(mes){
        case 1:
           console.log(`O valor a ser pago em Janeiro é de: R$ ${valor}`)
           break
        case 2:
            console.log(`O valor de Fevereiro ficará: R$ ${m}.`)
            break
        case 3:

            console.log(`O valor de Março ficará: R$ ${m}.`)
            break
        case 4:
            console.log(`O valor de Abril ficará: R$ ${m}.`)
            break
        case 5:
            console.log(`O valor de Maio ficará: R$ ${m}.`)
            break
        case 6:
            console.log(`O valor de Junho ficará: R$ ${m}.`)
            break
        case 7:
            console.log(`O valor de Julho ficará: R$ ${m}.`)
            break
        case 8:
            console.log(`O valor de Agosto ficará: R$ ${m}.`)
            break
        case 9:
            console.log(`O valor de Setembro ficará: R$ ${m}.`)
            break
        case 10:
            console.log(`O valor de Outubro ficará: R$ ${m}.`)
            break
        case 11:
            console.log(`O valor de Novembro ficará: R$ ${m}.`)
            break
        case 12:
            console.log(`O valor de Dezembro ficará: R$ ${m}.`)
            break

    }
}
ex22(0,100)
ex22(1,100)
ex22(2,100)
ex22(12,100)
ex22(13,100)

// segunda forma de fazer o exercício

const ex22x2 = function(mes, valor) {
    if (mes < 1 || mes > 12 || typeof valor !== 'number') {
        return console.log('Erro: Valores de mês ou anuidade inválidos.');
    }
    let p = valor;
    let i = 0.05;
    let n = mes - 1;
    let m = (p * (1 + i) ** n).toFixed(2); 

    const meses = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    console.log(`O valor a ser pago em ${meses[mes - 1]} é de: R$ ${m}`);
}
ex22x2(4,337.72)
ex22x2(0,337.72)

// 23) Escreva um algoritmo que leia o código de um aluno e suas três notas.
// Calcule a média ponderada do aluno,
// considerando que o peso para a maior nota seja 4 e para as duas restantes, 3.
// Mostre o código do aluno, 
// suas três notas, 
// a média calculada e uma mensagem "APROVADO"
// se a média for maior ou igual a 5 
// e "REPROVADO" 
// se a média for menor que 5. 
// Repita a operação até que o código lido seja negativo.

const ex23 = function(aluno, nota1,nota2,nota3){
    //qual a maior nota?
    //calculo da média ponderada
    let testenota = nota1+nota2+nota3
    
    if(typeof aluno != 'string' || typeof testenota != 'number' || testenota > 30 || testenota < 0){
        console.log('Operadores não consistentes com a operação')
    }
    else if(nota1 >= nota2 && nota1 >= nota3){
        let media = (nota1*4+nota2+nota3)/7
        console.log(`O aluno ${aluno} com notas (${nota1}x4, ${nota2} e ${nota3})/7: `)
            switch(true){
                case media >= 5:
                console.log(`Aprovado com média ${media.toFixed(2)}`)
                break
                default:
                 console.log(`Reprovado com média ${media.toFixed(2)}`)
            }
        }
    else if(nota2 >= nota1 && nota2 >= nota3){
        let media = (nota1+nota2*4+nota3)/7
        console.log(`O aluno ${aluno} com notas (${nota1}, ${nota2}x4 e ${nota3})/7: `)
            switch(true){
                case media >= 5:
                console.log(`Aprovado com média ${media.toFixed(2)}`)
                break
                default:
                 console.log(`Reprovado com média ${media.toFixed(2)}`)
            }
        }
        else if(nota3 >= nota1 && nota3 >= nota2){
        let media = (nota1+nota2+nota3*4)/7
        console.log(`O aluno ${aluno} com notas (${nota1}, ${nota2} e ${nota3}x4)/7: `)
            switch(true){
                case media >= 5:
                console.log(`Aprovado com média ${media.toFixed(2)}`)
                break
                default:
                 console.log(`Reprovado com média ${media.toFixed(2)}`)
            }
        }
    }
    ex23('Francisco', 8,5,5)
    ex23('João', 5, 8, 5)
    ex23('Pedro', 5, 5, 8)
    ex23('Larissa', 1, 2, 4)
            
