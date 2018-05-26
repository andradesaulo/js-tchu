function calcula() {
	var n1,n2,m,o;

	n1 = parseFloat(document.getElementById("n1").value);
	n2 = parseFloat(document.getElementById("n2").value);
	o = String(document.getElementById("o").value);
	switch (o) {

	case'k': document.getElementById("m").innerHTML = m = Math.pow(n1, n2) ;  break;
	case'kk': document.getElementById("m").innerHTML = m = (Math.sqrt(n1) + " e " + Math.sqrt(n2)) ; break;
	case 'kkn': document.getElementById("m").innerHTML = m = (Math.cbrt(n1) + " e " + Math.cbrt(n2)) ;break;
	case 'n':
	default :  document.getElementById("m").innerHTML = m = "Opção inválida"; break;
	}

}
