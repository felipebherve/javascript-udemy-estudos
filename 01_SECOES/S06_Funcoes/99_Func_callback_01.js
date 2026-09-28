// callback = chamar de volta
const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}
fabricantes.forEach(imprimir)
//forEach é uma função estática do array (cada elemento do array
//irá executar a função imprimir.)
//callback, passar uma função para outra função
//onde quando um evento acontecer essa função será chamada de volta
// dependendo do contexto
fabricantes.forEach(function(a){console.log(a)})
fabricantes.forEach(function(y){console.log(y)})
fabricantes.forEach(fabricante => console.log(fabricante))

//cada vez que a forEach encontra um elemento do array ela chamará a 
//função passada como callback
