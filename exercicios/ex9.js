function calcula(){
    var saldoMedio, valorCredito;

    saldoMedio = Number(document.getElementById("saldoMedio").value);

    if (saldoMedio > 400) {
        valorCredito = saldoMedio * 0.3;
    } else if (saldoMedio > 300) {
            valorCredito = saldoMedio * 0.25;
        } else if (saldoMedio > 200) {
                valorCredito = saldoMedio * 0.2;
            }else {
                    valorCredito = saldoMedio * 0.1;
                }
    document.getElementById("resposta").textContent = "Seu saldo médio é de R$" + saldoMedio.toFixed(2) + ". O valor do seu crédito é de R$" + valorCredito.toFixed(2);
}

document.getElementById("botao").addEventListener("click", calcula);
