var produto = "Esmalte";
var preco = 5;
var estoque = 10;
let mensagem = estoque > 1 ? "Com estoque" : "Sem estoque";
console.log(mensagem);

console.log(`o item ${produto} custa: ${preco}
disponibilidade: ${estoque}`);