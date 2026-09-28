const a = {name: 'Teste'}

console.log(a)
console.log(typeof a)

const b = a

console.log(b)
console.log(typeof b)

b.name = 'opa'

console.log(a)
console.log(typeof a)
console.log(b)
console.log(typeof b)

//se eu igualei os objetos eles vão receber as mesmas mudanças

let c = 3
let d = c

d++

console.log(c)
console.log(typeof c)
console.log(d)
console.log(typeof d)


let valor // não inicializada

console.log(valor)
// console.log(valor2) como não foi definida dará erro
// ReferenceError: valor2 is not defined

valor = null
console.log(valor)
// ausencia de valor

// console.log(valor.toString()) 
// TypeError: Cannot read properties of null

const produto = {}
console.log(produto.preco)
// como não foi definido o preço e por isso ta undefined
// console.log(produto.preco.a)
//TypeError: Cannot read properties of undefined

produto.preco = 3.6

console.log(produto)

produto.preco = undefined // evita dog

console.log(produto)
console.log(!!produto.preco)
console.log(produto)
// delete produto.preco
// console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)
