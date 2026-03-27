var produto1 = 1;
var produto2 = 99;
var valorTotal = produto1 + produto2;

let mensagem = valorTotal > 100 ? "O Total é de: "  + valorTotal : "Com desconto ficou:" + (valorTotal - (valorTotal * 0.10));
    console.log(mensagem);

    // o desconto é dado na let mensagem, se o valor dos produtos resultar me mais de 100, é dado um desconto de 10%