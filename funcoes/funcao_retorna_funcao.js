function criarCalculadorDesconto(desconto){
    return function(preco){
        return preco - (preco * desconto);
    }
}

const desconto10 = criarCalculadorDesconto(0.10);
const desconto50 = criarCalculadorDesconto(0.50);

console.log(`O Resultado é: ${desconto10(200)}`);
console.log(`O Resultado é: ${desconto50(1230)}`);