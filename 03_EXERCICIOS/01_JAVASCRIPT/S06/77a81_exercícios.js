// Exercício
//       Verificador de Par ou Ímpar (if/else) 
// Objetivo: Criar uma função que recebe um número e diz se ele é par ou ímpar. 
// Portal do IFSC
// Portal do IFSC
// Instruções:
// Crie uma variável numero.
// Use if/else e o operador de resto (%) para verificar.
// Se o resto da divisão por 2 for 0é par; caso contrárioé ímpar.
// Dica: if (numero % 2 === 0). 

const ParImpar = function(PI) {
    if (PI % 2 === 0){
        console.log('O número '+ PI +' é par')
    } else { 
        console.log('O número '+ PI +' é ímpar.')
    }
}

ParImpar(2)
ParImpar(387)
ParImpar(504678)
ParImpar(89489456,3)
ParImpar(987891,1)


// EXERCÍCIO
//      Classificador de Idade (if/else if/else) 
// Objetivo: Classificar uma pessoa em categorias de idade. 
// Portal do IFSC
// Portal do IFSC
// Instruções:
// Crie uma variável idade.
// Use if/else if/else para classificar:
// Menor que 13: "Criança"
// Entre 13 e 17: "Adolescente"
// Entre 18 e 64: "Adulto"
// 65 ou mais: "Idoso" 

const FaseDaVida = function(FDV) {
    if (FDV > 0 && FDV < 13) {
        console.log('Estamos falando de uma criança com '+ FDV + ' anos.')
    } else if (FDV >= 13 && FDV <= 17) {
        console.log('Estamos falando de um adolecente de ' + FDV + " anos.")
    } else if(FDV >= 18 && FDV <= 64) {
        console.log('Estamos falando de um adulto de ' + FDV + " anos.")
    } else if( FDV >= 65 && FDV <= 100) {
               console.log('Estamos falando de um velho de ' + FDV + " anos.") 
    } else if( FDV > 100){
        console.log('Você não devia estar morto com ' +FDV+ ' senhor?')
    } else {
        console.log('CARAMBA TU NEM NASCEU!')
    }
}

FaseDaVida(1)
FaseDaVida(12)
FaseDaVida(13)
FaseDaVida(17)
FaseDaVida(18)
FaseDaVida(64)
FaseDaVida(65)
FaseDaVida(100)
FaseDaVida(105)
FaseDaVida(-1)


/*Menu de Bebidas: 
* Crie um switch que receba o nome de uma bebida 
* ("café", "chá", "suco", "água").
* Para cada uma, exiba o preço correspondente.
* Se a bebida não estiver na lista, exiba "Produto não encontrado"
*/

const bebidas = function (BS) {
    switch (BS){
        case "Água":
            console.log('O preço da ' +BS+ ' é R$ 2,50')
            break
        case "Chá":
            console.log('O preço do ' +BS+ ' é R$ 5,50')
            break
         case "Café":
            console.log('O preço do ' +BS+ ' é R$ 3,50')
            break
         case "Suco":
            console.log('O preço do ' +BS+ ' é R$ 8,00')
            break
        default:
            console.log(BS + ' PRODUTO INVÁLIDO')
    }
} 

bebidas("Café");
bebidas("Chá");
bebidas("Suco");
bebidas("Água");
bebidas("Monster");

/*Dia Útil ou Final de Semana:
* Use um switch para receber um dia da semana
* (ex: "Sábado", "Segunda").
* Se for "Sábado" ou "Domingo",
* imprima "Final de semana!".
* Para os outros dias,
* "Dia de trabalho!". 
*/

const DiaÚtilOuFDS = function (Dia){
     switch (Dia){
        case 'Sábado': case 'Domingo':
            console.log('BEM VINDO AO FIM DE SEMANA')
            break
        case 'Segunda': case 'Terça': case 'Quarta': case 'Quinta':
            console.log(Dia + ' É DIA DA SEMANA AFF')
            break
        case 'Sexta':
            console.log('AEEEEE HOOOOOOO SEXTA FERAAA')
            break
        default:
            console.log('TA MALUCO??? ' + Dia + ' NEM É DIA DA SEMANA LOUCO!')
    }
}

DiaÚtilOuFDS('Segunda')
DiaÚtilOuFDS('Terça')
DiaÚtilOuFDS('Quarta')
DiaÚtilOuFDS('Quinta')
DiaÚtilOuFDS('Sexta')
DiaÚtilOuFDS('Sábado')
DiaÚtilOuFDS('Domingo')
DiaÚtilOuFDS('Como e Damião')
DiaÚtilOuFDS('')
DiaÚtilOuFDS('')