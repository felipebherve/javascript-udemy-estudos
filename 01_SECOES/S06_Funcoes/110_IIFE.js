// como fugir do escopo global do window

// criar uma função auto invocável

// IIFE - Imediately Invoked Function Expression

(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()