function calcula() {
    var precoProduto, tipo;

    precoProduto = Number(document.getElementById("precoProduto").value);

    if (precoProduto <= 0) {
        return document.getElementById("resposta").textContent = "Preço inválido. Insira valores maiores que zero."
        } else if (precoProduto > 100) {
            precoProduto += precoProduto * 0.15;
            } else if (precoProduto > 50) {
                    precoProduto += precoProduto * 0.1;
                    } else {
                        precoProduto += precoProduto * 0.05;
                        }
    if (precoProduto > 200) {
        tipo = "muito caro";
        } else if (precoProduto > 120) {
            tipo = "caro";
            } else if (precoProduto > 80) {
                tipo = "normal";
                } else {
                    tipo = "barato";
                    }
    document.getElementById("resposta").textContent = "O novo preço do produto é de R$" + precoProduto.toFixed(2) + ". Este preço é considerado " + tipo + "."
}

document.getElementById("botao").addEventListener("click", calcula);
