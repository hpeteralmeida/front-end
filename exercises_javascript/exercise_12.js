// Arrays - criando listas
/* Crie uma lista com numeros e remova usando pop() */

const primeiraLista = [10, 20, 30, 40, 50];
const segundaLista = []

let tamanho = primeiraLista.length
for (let i = 0; i < tamanho; i++) {
    console.log(primeiraLista);

    let item = primeiraLista.pop();
    segundaLista.push(item);
}

console.log(segundaLista);
