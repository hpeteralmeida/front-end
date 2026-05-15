// funcao que verifica qual o maior e o menor numero da lista

function maiorMenorLista(lista) {
    let maior = 0;
    let menor = 0;
    const tamanho = lista.length;

    for (let i = 0; i < tamanho; i++) {
        if (lista[i] > maior) {
            maior = lista[i];
        } else if  (lista[i] < menor) {
            menor = lista[i];
        }
    }

    return 'O maior valor é: ' + maior + ' e o menor valor é: ' + menor;
}

const numbers = [2, 40, 1, -1, 3, 24];
console.log(maiorMenorLista(numbers))