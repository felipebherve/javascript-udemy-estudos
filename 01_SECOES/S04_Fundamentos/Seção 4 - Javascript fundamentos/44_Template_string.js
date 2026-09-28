const nome = 'Rebeca';
const concatenacao = 'Olá' + nome + '!';

const template =`olá${nome}!`
// o $ concatena o que está escrito

console.log(concatenacao, template)

console.log(`1+1= ${1+1}`)
//nesse exemplo podemos ver que o que estiver dentro de $ será executado

const up = texto => texto.toUpperCase()

console.log(`Ei... ${up('cuidado')}`)