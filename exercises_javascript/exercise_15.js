//Arrays - forEach()
// Crie uma lista e some todos os seus numeros 

const numeros = [10, 20, 30, 45]
let soma = 0

numeros.forEach(numero => {
    soma += numero
})

console.log(soma)