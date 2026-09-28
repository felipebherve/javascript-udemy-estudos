// existem várias formas de percorrer um array porém
// usaremos o for/in
// array é uma estrutura indexada
const notas = [6.7 , 7.4, 8.12, 10, 9.14]

for (let i in notas){
    console.log(i, notas[i])
} 
// Nesse caso, i seriam os índices do array,
// notas seriam os resultados
const pessoa = {
    nome: 'Ana',
    idade: 29,
    peso:64,
}


for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
// aqui atributos seriam os indices (atributos) 
// dados no array
// e o pessoa seriam os resultados adquiridos

// console.log(atributo)