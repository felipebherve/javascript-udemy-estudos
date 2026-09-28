let dobro = function(a){ return 2*a }

dobro = (a) => { return 2*a }

dobro = a => 2*a //retorno implicito do return

console.log(dobro(Math.PI))

let ola = function(){ return 'Olá' }

ola = () => 'Olá' // sem parametros

ola = _ => 'Olá' // pode existir mas menos usado

console.log(ola())