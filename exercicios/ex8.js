function calcula() {
	var n1,a;

	n1 = parseFloat(document.getElementById("n1").value);
	a = parseFloat(document.getElementById("a").value);

	if (n1 < 0) {
		return document.getElementById("a").textContent = "Insira um salário maior que zero."
	}
	else if (n1 <= 300) {
		a = n1 + n1*0.35;
		}
		else {
			a = n1 + n1*0.15;
			}

	document.getElementById("a").textContent = "R$" + a.toFixed(2) + ", é o novo salário.";
}
