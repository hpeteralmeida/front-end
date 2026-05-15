// funcao que verifica um numero que pode ser negativo, 0 ou positivo

function verificaNumero(A) {
    if (A !== 0) {
        if (A > 0) {
            return 'O valor é positivo';
        } else {
            return 'O valor é negativo';
        }
    } else {
        return 'O valor é 0';
    }
}

let num = 12;

console.log(verificaNumero(num));