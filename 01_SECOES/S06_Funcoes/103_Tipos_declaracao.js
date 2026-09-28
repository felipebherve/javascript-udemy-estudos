console.log(soma(3,4))
// console.log(sub(3,4))   DA ERRO PQ N TEM HOISTINg

//function declaration
//sofre hoisting porque no jscript a primeira coisa lida pelo programa são as funções
function soma(x,y /*parametros da função*/) { return x+y/*corpo da função*/}

//atribuindo função anonima à uma variável
//function expression

const sub = function(x,y) { return x-y }

//named function expression (função com o mesmo nome da constante)
const mult = function mult(x,y) { return x*y }

