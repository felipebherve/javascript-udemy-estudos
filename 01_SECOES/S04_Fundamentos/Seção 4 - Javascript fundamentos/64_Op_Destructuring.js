// novo recurso do ecmanscript2015
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereço: {
        logradouro: 'rua numero 0',
        numero: 0
    }
}

const { nome, idade } = pessoa // tire do objeto nome e idade, do objeto pessoa
console.log(nome, idade)

const {nome: n, idade: i } = pessoa
console.log(n, i)

// const {sobrenome, bemhumorada} = pessoa
// console.log(sobrenome, bemhumorada)

const {sobrenome, bemhumorada = true} = pessoa
console.log(sobrenome, bemhumorada)

const { endereço: {logradouro, numero, cep}} = pessoa
console.log( logradouro, numero, cep)

// const { conta: {ag, num}} = pessoa;
// console.log( ag, pessoa)