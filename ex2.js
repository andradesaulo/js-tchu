function calcula () {
	var n1,n2, nf;

	n1 = parseFloat(document.getElementById("n1").value);
	n2 = parseFloat(document.getElementById("n2").value);


	nf = (n1 + n2) /2; 
	if ((n1 < 0 ) || (n2 < 0 )) {
			document.getElementById("nf").textContent = "Negativo";
		}
		else if ((nf >= 7) && (nf <= 10)) {
				document.getElementById("nf").textContent = "Aprovado, " + nf;
			}
			else if ((nf >= 3) && (nf < 7 )) {
					document.getElementById("nf").textContent = "Exame, " + nf;
				}
                else if ((nf >=0) && (nf < 3)) {
                		document.getElementById("nf").textContent = "Reprovado, " + nf;
                }
                	else {
                		document.getElementById("nf").textContent = "Inválido";
                }
}
document.getElementById("bd").addEventListener('click', calcula );