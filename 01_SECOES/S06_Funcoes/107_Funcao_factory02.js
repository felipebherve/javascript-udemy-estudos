// criando um objeto passando parametros para uma função
function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1 // 10%
    }
}

console.log(criarProduto('Ronivaldo', 2199.49))
console.log(criarProduto('Mercedes', 2654612))
console.log(criarProduto('Jair','pé no rabo'))
// console.log(criarProduto(,))
// console.log(criarProduto(,))