let n1 = 1
let n2 = 2

n1++
console.log(n1)
--n1
console.log(n1)
console.log(++n1 === n2--)
//o ++ foi executado antes de comparar
console.log(n1 === n2) 