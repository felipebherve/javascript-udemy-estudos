function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Parabéns! Aprovado com ' + nota)
    }

}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdade(valor) {
    if(valor) {
        console.log('É verdade...' + valor)
    }
}

seForVerdade() // falso
seForVerdade(null) // falso
seForVerdade(undefined)
seForVerdade(NaN)
seForVerdade('')
seForVerdade(0)
seForVerdade(-1) // verdadeiro
seForVerdade(' ') // verdadeiro
seForVerdade('?')
seForVerdade([])
seForVerdade([1, 2])
seForVerdade({})
