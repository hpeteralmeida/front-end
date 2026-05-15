// funcao que soma elementos de uma lista numerica


function totalLista(lista) {
    const tamanho = lista.length;
    let soma = 0
     
    for (let i = 0; i < tamanho; i++) {
        soma += lista[i];
    }

    return soma;
}

const idades = [23, 20, 18];
console.log(totalLista(idades));