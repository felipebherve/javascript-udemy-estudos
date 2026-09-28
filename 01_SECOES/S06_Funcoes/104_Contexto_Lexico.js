const valor = 'Global'
//contexto lexico base js
function minhaFuncao() {
 console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}
exec()
// como o contexto foi declarado diretamente no js 
//ele terá mais peso na hora de o programa decidir 