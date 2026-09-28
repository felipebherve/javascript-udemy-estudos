// v e v -> v
// v e f - f
// f e ? - f

// op1 e op2 e op3 e op4 -> v

// v ou ? -> v
// f ou ? -> ?
// f ou v -> v
// f ou f -> f

// //basta um ser verdadeiro que será verdadeiro


// v xor v -> f
// v xor f -> v
// f xor v -> v
// f xor f -> f

// !v -> f
// !f -> v

//operador logico E
// dois trabalhos, nessa semana tem um na terça e outro na quinta
// se o t1 der certo e o t2 certo voce compra uma tv50''
//se algum dos dois dar certo a tv será pior mas haverá
// se falhar os dois não haverá tv
//
//operador lógico OU
//
//só não irá tomar sorvete se não conseguir fazer nenhum trabalho
//
// Negação lógica
// Será saudável se comprar a tv
//não será saudavel se comprar a tv

function compras(t1, t2) {
    const comprarSorvete = t1 || t2
    const comprarTv50 = t1 && t2
    // const comprarTV32 = !!(t1 ^ t2) //bitwise xor
    const comprarTv32 = t1 != t2
    const ManterSaudavel = !comprarSorvete //operador unario

    return {comprarSorvete, comprarTv50, comprarTv32, ManterSaudavel}  
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

console.log(true&&true)
console.log(true&&false)
console.log(false&&true)
console.log(false&&false)