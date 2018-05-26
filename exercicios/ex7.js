function calcula() {
    var salario, salarioReajustado;

    salario = parseFloat(document.getElementById('salario').value);

    if (salario < 500) {
        salarioReajustado = (salario + salario * 0.3).toFixed(2);
        document.getElementById('resposta').textContent = "Seu novo salário é de R$" + salarioReajustado;
    } else {
        document.getElementById('resposta').textContent = "Você não está apto a receber um aumento salarial";
    }
}

document.getElementById("botao").addEventListener("click", calcula);
