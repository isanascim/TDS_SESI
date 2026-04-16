// ESTOQUE
let produtos = [
  "GABINETE AQUARIUM",
  "Placa mãe B550M",
  "SSD 1TB",
  "RTX 4060"
];

produtos.push("Fonte 750W");

// DADOS DO CLIENTE
let nomeCliente = "Guilherme";
let idadeCliente = 15;
let temCupom = true;

// VALOR TOTAL
let totalCompra = 600;

// FUNÇÃO DE VENDA
function realizarVenda() {

  // VERIFICA IDADE
  if (idadeCliente < 16) {
    console.log("Venda não permitida: cliente menor de idade");
    return;
  }

  console.log("Venda liberada para " + nomeCliente);

  // DESCONTO
  let totalFinal = totalCompra;

  if (totalCompra > 500 || temCupom === true) {
    totalFinal = totalCompra * 0.85;
  }

  totalFinal = totalFinal.toFixed(2);

  // MOSTRA PRODUTOS
  for (let i = 0; i < produtos.length; i++) {
    console.log("Enviando: " + produtos[i]);
  }

  // LIMPA LISTA
  produtos = [];

  // RESUMO
  console.log(
    "Resumo:\n" +
    "Cliente: " + nomeCliente + "\n" +
    "Total pago: R$ " + totalFinal + "\n" +
    "Itens no estoque: " + produtos.length
  );
}

// EXECUTA
realizarVenda();