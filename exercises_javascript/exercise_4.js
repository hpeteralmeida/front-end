// funcao que recebe dois numeros e mostra o maior entre eles

function verificaMaior(A, B) {
    if (A !== B) {
        if (A > B) {
            return 'O Valor A (' + A + ') é maior';
        } else {
            return 'O Valor B (' + B + ') é maior';
        } 
    } else {
        return 'Os valores sao iguais';
    }
}

let A = 5;
let B = 15;
const maior = verificaMaior(A, B);

console.log(maior);