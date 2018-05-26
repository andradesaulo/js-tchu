function calcula () {
	var n1,n2,n3, mn, i;

	n1 = parseFloat(document.getElementById("n1").value);
	n2 = parseFloat(document.getElementById("n2").value);
	n3 = parseFloat(document.getElementById("n3").value);
	if ((n1 === n2) && (n1===n3)) {
		document.getElementById("i").textContent = " Estes números são iguais.";
	}
		else if ((n1 > n2 ) && (n1 > n3 )) {
				mn = n1;
			document.getElementById("mn").textContent = mn + ", é o maior.";
		}
			else if (n2 > n3) {
					mn = n2;
				document.getElementById("mn").textContent = mn + ", é o maior.";
			}
				else {
					mn = n3;
				document.getElementById("mn").textContent = mn + ", é o maior.";
				}
	}

document.getElementById("bd").addEventListener('click', calcula );
