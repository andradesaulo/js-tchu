function calcula() {
    var nota1, nota2, nota3, nota4;
    nota1 = parseFloat(document.getElementById("nota1").value);
    nota2 = parseFloat(document.getElementById("nota2").value);
    nota3 = parseFloat(document.getElementById("nota3").value);
    nota4 = parseFloat(document.getElementById("nota4").value);

    media = (nota1 + nota2 + nota3 + nota4)/4

    if ((nota1 < 0) || (nota2 < 0) || (nota3 < 0) || (nota4 < 0)) {
        document.getElementById("resposta").innerHTML = "Notas inválidas";
    }
        else if (media >= 7) {
        document.getElementById("resposta").innerHTML = "Aluno aprovado";
        }
            else {
        document.getElementById("resposta").innerHTML = "Aluno reprovado";
        }
}

document.getElementById("botao").addEventListener('click', calcula);
