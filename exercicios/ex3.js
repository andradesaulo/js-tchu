function calcula() {
    var num1, num2, maior;
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);

    if (num1 < num2){
        menor = num1;
    } else if (num1 > num2){
        menor = num2;
    } else {
        menor = "Estes números são iguais."
    }
    document.getElementById("resposta").textContent = menor;
}

document.getElementById("botao").addEventListener('click', calcula);
