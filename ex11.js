function calcula() {
    var salarioAtual, salarioAumento, aumento;

    salarioAtual = Number(document.getElementById("salarioAtual").value);

    if (salarioAtual < 0) {
        return document.getElementById("resposta").textContent = "Salário inválido.";
    }
        else if ((salarioAtual >= 600) && (salarioAtual <= 900)) {
                aumento = 0.05;
                salarioAumento = salarioAtual + salarioAtual * 0.05;
            }
            else if (salarioAtual > 300) {
                aumento = 0.1;
                salarioAumento = salarioAtual + salarioAtual * 0.1;
            }
                else {
                    aumento = 0.15;
                    salarioAumento = salarioAtual + salarioAtual * 0.15;
                }

    document.getElementById("resposta").textContent = "O seu salário foi reajustado em " + aumento*100 + "%. Agora seu salário é de R$" + salarioAumento.toFixed(2);
}
document.getElementById("botao").addEventListener("click", calcula);
