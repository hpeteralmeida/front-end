// funcao que conta quantas letras tem uma string

/*
========= METODOS DE STRING =========

Metodos depressiados:  (NAO USE)

.anchor();
.big();
.blink();
.bold();
.fixed();
.fontcolor();
.fontsize();
.italics();
.link();
.small();
.sub();
.sup();

Metodos menos utilizados:

.codePointAt();  // retorna um numero nao negativo inteiro entre 0 e 1114111 
                 // representando o ponto de codigo UTF-16 do caractere na posicao dada
.fromCodePoint(); // retorna uma string criada a partir de uma sequencia de pontos de codigo UTF-16
.normalize(); // retorna a forma de normalizacao Unicode do texto
.localeCompare(); // retorna um numero negativo, 0 ou um numero positivo dependendo se a string de chamada for menor, 
                  // igual ou maior que a string comparada, de acordo com a ordem lexicografica
.toLocaleUpperCase(); // retorna a string convertida para maiusculas, de acordo com as regras de localizacao
.toLocaleLowerCase(); // retorna a string convertida para minusculas, de acordo com as regras de localizacao

Metodos de comparacao e verificacao:

.match(); *ESTUDAR REGEXP // retorna um array contendo as correspondencias encontradas ou null se nenhuma correspondencia for encontrada
.matchAll();  // retorna um iterador contendo todas as correspondencias encontradas ou null se nenhuma correspondencia for encontrada
.search(); // retorna o indice da primeira ocorrencia da substring ou -1 se nao for encontrada 


*/

function tamanhoString(texto) {
    const palavras = texto.split(' ')

    let wordsQuantity = palavras.length
    let letters = 0

    for (let i = 0; i < wordsQuantity; i++) {
        letters += palavras[i].length
    }
     return letters
}

const phrase = 'Pedro Almeda';
const tamanhoFrase = tamanhoString(phrase.trim());

console.log(tamanhoFrase);