// quando trabalhamos com funções normais podemos nomear as funções
//ou podemos criar uma função anonima armazenando em uma variável

const soma = function (x,y){ return x+y/*parâmetros da função*/  }

const impResult = function (a, b, operacao = soma){
    console.log(operacao(a,b)) /*nesse caso, puxamos o parametros da 
    função soma e trocamos para a e b */
}
impResult(3,4)
impResult(3,4, soma) //chamando a função soma.
impResult(3,4, function(x,y){return x-y}) 
//atribuindo uma nova função anonima
impResult(3,4,(x,y) => x * y) 
//atribuindo uma nova função anonima em arrow
impResult()

const pessoa = {
    falar:function (){
        console.log('Opa')
    }
}

pessoa.falar()//chamando uma função anonima 
// como se fosse um atributo de uma função