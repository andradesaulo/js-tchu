function calcula() {
	var f,s;

	f = parseFloat(document.getElementById("f").value);
	s = parseFloat(document.getElementById("s").value);

	if (f <= 350) {
		s = (f + 100) - (f + 100)*0.07;
		document.getElementById("s").textContent = "R$" + s.toFixed(2) + ", é o salário do funcionário.";
		}
		else if (( f > 350) && (f < 600)) {
			s = (f+75) - (f+75)*0.07;
			document.getElementById("s").textContent = "R$" + s.toFixed(2) + ", é o salário do funcionário.";
			}
			else if ((f >= 600) && (f <= 900)) {
				s = (f+50) - (f+50)*0.07;
				document.getElementById("s").textContent = "R$" + s.toFixed(2) + ", é o salário do funcionário.";
				}
				else if (f > 900) {
					s = (f+35) - (f+35)*0.07;
					document.getElementById("s").textContent = "R$" + s + ", é o salário do funcionário.";
					}
}
