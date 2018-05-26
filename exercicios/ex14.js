function calcula() {
	var f,s;

	f = parseFloat(document.getElementById("f").value);
	s = parseFloat(document.getElementById("s").value);
	//Será que não é melhor colocar a resposta no final das condições?
	//tratar condição se for negativo ou zero
	if (f <= 300) {
		s = f + f * 0.5 ;
		document.getElementById("s").textContent = "R$" + s.toFixed(2) + ", é novo salário do funcionário.";
		}
		else if (( f > 300) && (f <= 500)) {
			s = f + f * 0.4;
			document.getElementById("s").textContent = "R$" + s.toFixed(2) + ", é novo salário do funcionário.";
			}
			else if ((f > 500) && (f <= 700)) {
				s = f + f * 0.3;
				document.getElementById("s").textContent = "R$" + s.toFixed(2) + ", é novo salário do funcionário.";
				}
				else if ((f > 700) && (f <= 800)) {
					s = f + f * 0.2;
					document.getElementById("s").textContent = "R$" + s.toFixed(2) + ", é novo salário do funcionário.";
					}
					else if ((f > 800) && (f <= 1000)) {
						s = f + f * 0.1;
						document.getElementById("s").textContent = "R$" + s.toFixed(2) + ", é o novo salário do funcionário.";
						}
						else {
							s = f + f * 0.05;
							document.getElementById("s").textContent = "R$" + s.toFixed(2) + ", é o novo salário do funcionário.";
						}
}
