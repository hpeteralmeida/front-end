// Arrays - forEach()
/* Crie uma lista de nomes e leia todos usando forEach() */

const nomes = ["Mhel", "Yasmim", "Malu", "Lizzie", "Athena"] 

// a funcao forEach espera receber outra funcao dentro dela
// nomes.forEach(function(nome){}) outra forma de passar a funcao como parametro
nomes.forEach( nome => { // arrow functions
    console.log(`Olá ${nome}`)
})
