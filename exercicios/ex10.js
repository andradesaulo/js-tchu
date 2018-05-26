function calcula() {
	var f,n;

	f = parseFloat(document.getElementById("f").value);
	n = parseFloat(document.getElementById("n").value);

	if (f <= 0) {
		return document.getElementById("n").textContent = "Insira um preço maior que zero."
	}
	else if (f <= 12000) {
		n = f + f*0.05;
		}
		else if (( f > 12000) && (f <= 25000)) {
			n = f + f*0.1 + f*0.15;
			}
			else {
				n = f + f*0.15 + f*0.20;
				}

	document.getElementById("n").textContent = "R$" + n.toFixed(2) + " é o preço ao consumidor.";
}
