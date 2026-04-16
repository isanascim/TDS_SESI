//desenvolva uma function que receba o nome horaAtual que retorne bom dia boa noite e boa tarde concatenado ao nome baseando-se em faixas de horarios 00 a 11, 12 as 17 e 18 as 23
function saudacao(horaAtual) {
    let mensagem = "Oieee ";
   
    if (horaAtual >= 0 && horaAtual < 12) {
        mensagem += "bom dia!";
    } else if (horaAtual >= 12 && horaAtual < 18) {
        mensagem += "boa tarde!";
    } else if (horaAtual >= 18 && horaAtual < 24) {
        mensagem += "boa noite!";
    } else {
        mensagem += "horário inválido!";
    }
   
    return mensagem;
}

console.log(saudacao(9))