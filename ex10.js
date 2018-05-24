function calcula() {
	var f,n;

	f = parseFloat(document.getElementById("f").value);
	n = parseFloat(document.getElementById("n").value);
	
		if (f <= 12000) {
			n = (f + (f*0.05));
			document.getElementById("n").textContent = n + " é preço ao consumidor.";
			}
			else if (( f >= 12000) && (f <=25000)) {
				n = (f + (f*0.1) + (f*0.15));
				document.getElementById("n").textContent = n + ", é preço ao consumidor."; 
				}
				else if (f > 25000) {
					n = (f + (f*0.15) + (f*0.20));
					document.getElementById("n").textContent = n + ", é o preço ao consumidor.";
					}			
}	