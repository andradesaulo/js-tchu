function calcula() {
	var p,c,s;

	p = parseFloat(document.getElementById("p").value);
	c = parseFloat(document.getElementById("c").value);
	s = parseFloat(document.getElementById("s").value);
	
		if ((c <= 3) && (p <=30)) {
			s = p ;
			document.getElementById("s").textContent = "R$" + s + ",00" + " sem desconto.";
			}
			else if (( c >= 3) && (c <=10) || ( p >= 30) && (p <=100)) {
				s = (p - (p*0.1));
				document.getElementById("s").textContent = "R$" + s  + " com 10% de desconto."; 
				}
				else if ((c > 10) && (p > 100)) {
					s = (p - (p*0.15));
					document.getElementById("s").textContent ="R$" + s + " com 15% de desconto.";
				}

}	