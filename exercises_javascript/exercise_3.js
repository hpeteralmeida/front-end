// verifica se um numero é par ou impar

function verificaParOuImpar(A) {
    if (A % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}

let A = 7;
let resultado = verificaParOuImpar(A);
console.log(resultado);