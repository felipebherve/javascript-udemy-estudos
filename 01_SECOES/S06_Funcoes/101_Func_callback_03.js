// exemplo de callback no browser
//document é a função estática que acessa os elementos a "bios"
//do browser
document.getElementsByTagName('body') [0].onclick = function (e){
    console.log('O evento ocorreu!')
}

//quando chamar essa função o evento será chamado

//se der refresh no browser e clicar ele perderá a 
// função pois ela não tinha callback