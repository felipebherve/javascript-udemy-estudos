// class pessoa {
//     constructor(nome) {
//         this.nome = nome
//     }
//     falar() {
//         console.log(`Meu nome é ${this.nome}`)
//     }
// }

function Pessoa(nome) {
        this.nome = nome
        
        this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

//em arrow

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}
const p2 = criarPessoa('Jonas')