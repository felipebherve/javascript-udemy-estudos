const prod1 = {}

console.log('Adicionando atributos ao objeto')
//adicionando atributos ao objeto
prod1.nome = 'Celular Ultra Mega'
//defini o nome do objeto prod1
prod1.preco = 4998.90
prod1['desconto legal'] = 0.40 //evitar atributos com espaço

console.log(prod1)

console.log('exemplo 2')
const prod2 = {
    nome: 'Camisa polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj : {
            blabla : 2
        }
    }
}
console.log(prod2)