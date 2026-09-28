const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}
pessoa.falar()

const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e oo

const falarDePessoa = pessoa.falar.bind(pessoa) // bind amarra o this
falarDePessoa()

const falar2 = pessoa.falar
falar2()
