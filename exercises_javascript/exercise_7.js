// Inverter Strings

function inverteString(text) {
    const inicio = text.length - 1;
    let inversao = '';
    for (let i = inicio; i >= 0; i--) {
        inversao += text[i]
    }

    return inversao.toUpperCase()
}

let nome = 'NAIROLADNAM';
console.log(inverteString(nome));