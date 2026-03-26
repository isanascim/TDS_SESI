function calcularTotal (preco1, preco2){
    return preco1 + preco2;
}

let resultado = calcularTotal(30, 50); // Somar

// Imprimir cotatenando e com template string

console.log("O resultado da soma é " + resultado); // Contatenando
console.log(`O resultado da soma é ${resultado}`); // Template String