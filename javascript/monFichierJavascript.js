var abonnements = function() {
	var exposant = document.getElementById("exposant").value;
	var mantisse = document.getElementById("mantisse").value;
	var resultat = document.getElementById('resultat');
	var verifier = document.getElementById('verifierbinaire').addEventListener("click", verifierbinaire);
	var caculer = document.getElementById('calculer').addEventListener("click", ieee);	
}
window.addEventListener("load",abonnements);// lance la fonction abonnements après le chargement de ma page


var verifierbinaire = function() {
	var exposant = document.getElementById("exposant").value;
	var resultatexposant = document.getElementById("resultatexposant");
	var longueur = exposant.length;
	var mantisse = document.getElementById("mantisse").value;
	var resultatmantisse = document.getElementById("resultatmantisse");
	var longueurmantisse = mantisse.length;
	var i = 0;
	if (exposant != ""){
		erreur = "";
		while ((exposant.charAt(i) == 0 || exposant.charAt(i) == 1 ) && i < longueur) {
			i = i + 1;
		}
		if (i < longueur && longueur > 0) {
			resultatexposant.innerHTML = "L' exposant " + exposant + " n'est pas un nombre binaire.";
		} else if (longueur > 0) {
			resultatexposant.innerHTML = "L' exposant " + exposant + " peut être considéré comme un nombre binaire.";
		}
		while ((mantisse.charAt(i) == 0 || mantisse.charAt(i) == 1 ) && i < longueurmantisse) {
			i = i + 1;
		}
		if (i < longueurmantisse && longueurmantisse > 0) {
			resultatmantisse.innerHTML = "La mantisse " + mantisse + " n'est pas un nombre binaire.";
		} else if (longueurmantisse > 0) {
			resultatmantisse.innerHTML = "La mantisse " + mantisse + " peut être considérée comme un nombre binaire." ;
		}
	}
	else if (exposant == "" ){
		var resultatmantisse = document.getElementById("resultatmantisse");
		erreur= "<span id='erreur'>Veuillez remplir tous les champs ! </span>";
		resultatmantisse.innerHTML = erreur;
		var erreurDouble = true ; 
	}
}

var ieee = function (){
	var signe = document.getElementById("signe").value;
	var resultatiee = document.getElementById("resultatiee");
	var exposant = document.getElementById("exposant").value;
	var mantisse = document.getElementById("mantisse").value;
	var biais = 127 ;
	if (signe == "0" || signe == "" ){	signeieee = "+" ;}
	if (signe == "1"){ signeieee = "-";}
	
	 if (exposant != ""){
		erreur = "";
		var exposantieee =  Math.pow( 2, parseInt(exposant, 2) - biais);
		var longueurmantisse = mantisse.length;
		var i = 0;
		var mantisseieee = 1;
		var rang = -1;
		while (i < longueurmantisse ){
			 if(mantisse.charAt(i) == 1){
					var mantisseieee = mantisseieee + Math.pow(2, rang);
					}
			i = i + 1;
			rang = rang -1;
		}
		var resultatieefinal = signeieee + (exposantieee  * mantisseieee);
		resultatiee.innerHTML = "Le signe est : " + signeieee + " </br>" + "L'exposant est : " + exposantieee +" </br> La mantisse est : " + mantisseieee +  " </br> Le resultat est : " + resultatieefinal;
	}
	else if (exposant == ""  ){
		erreur= "<span id='erreur'>Veuillez remplir tous les champs ! </span>";
		resultatiee.innerHTML = erreur;
	}

	
}



