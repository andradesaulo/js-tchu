function calcula() {
    var opcao, num1, num2;
    opcao = document.getElementById("opcao").value;
    num1 = Number(document.getElementById("num1").value);
    num2 = Number(document.getElementById("num2").value);
    switch (opcao) {
        case "a":
            var media = (num1 + num2)/2;
            document.getElementById("resposta").textContent = "A média dos números é " + media;
            break;
        case "b":
            if (num1 > num2) {
                var diferenca = num1 - num2;
            } else {
                var diferenca = num2 - num1;
            }
            document.getElementById("resposta").textContent = "A diferença do maior número pelo menor é " + diferenca;
            break;
        case "c":
            var produto = num1 * num2;
            document.getElementById("resposta").textContent = "O produto dos dois números é " + produto;
            break;
        case "d":
            var divisao = num1 / num2;
            document.getElementById("resposta").textContent = "A divisão dos dois números é " + divisao;
            break;
    }
}

document.getElementById("botao").addEventListener('click', calcula);
