// é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e 
// manipular variaveis externas à função (de acordo com o contexto lexico)

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())

// como o contexto lexico onde foi definida a função
// era dentro da função ele buscará pirmeiro
// dentro dela mesma o valor de x e por isso
//foi impresso local por conta do closures (mais próximo)