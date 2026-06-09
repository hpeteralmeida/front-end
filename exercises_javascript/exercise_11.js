// Arrays - criando listas
/* Crie uma lista de frutas e adicione itens usando push() */ 

const frutas = [];

frutas.push("Banana");
frutas.push("Abacate");
frutas.push("Melancia");

console.log(frutas)
console.log(frutas.length)

// mostra os itens da lista em coluna
for (let i = 0; i <= frutas.length - 1; i++) {
    console.log(i)
    console.log(frutas[i]);
}

// mostra os itens invertidos
for (let i = frutas.length - 1; i >= 0; i--) {
    console.log(i);
    console.log(frutas[i]);
}