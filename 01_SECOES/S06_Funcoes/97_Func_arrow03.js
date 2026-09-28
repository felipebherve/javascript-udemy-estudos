let comparaComThis = function (param) {
    console.log(this === param)
}
comparaComThis(global) // no caso do browser é no window

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(this)
comparaComThis(obj)

console.log('Segundo Exemplo')

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)
comparaComThisArrow(this)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) //mesmo usando o bind o arrow 
                        // será mais forte
comparaComThisArrow(module.exports)