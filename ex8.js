function calcula() {
	var n1,a;

	n1 = parseFloat(document.getElementById("n1").value);
	a = parseFloat(document.getElementById("a").value);
		
		if (n1 <= 300) {
			a = (n1 + (n1*0.35));
			document.getElementById("a").textContent = a + ", é o novo salário.";
			}
			else if ( n1 > 300) {
				a = (n1 + (n1*0.15));
				document.getElementById("a").textContent = a + ", é o novo salário."; 
				}
			
}