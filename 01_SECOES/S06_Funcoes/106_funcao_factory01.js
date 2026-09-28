const prod1 = {
    nome: '..',
    preco: 45
}
const prod2 = {
    nome: '...',
    preco: 1235
}

// factory simples

function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}
//uma função que cria novos objetos
console.log(criarPessoa())