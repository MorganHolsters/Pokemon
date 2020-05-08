//partie de code de combat.js


function envoyerRequete(pid){
		
	
		let xhrAttaque = new XMLHttpRequest();
		xhrAttaque.open('GET','/getAttaques?pid='+pokeId1, true);
		xhrAttaque.onload = function traiterReponseAttaque(){
			response = JSON.parse(xhrAttaque.responseText);		
				competence1 = response[0].nom_attaques;
				competence2= response[1].nom_attaques;
				competence3 = response[2].nom_attaques;
				competence4 = response[3].nom_attaques;
				
				
			degat1 = response[0].degats;
			degat2 = response[1].degats;
			degat3 = response[2].degats;
			degat4 = response[3].degats;
			
			degatennemi1 = response[0].degats;
			degatennemi2 = response[1].degats;
			degatennemi3 = response[2].degats;
			degatennemi4 = response[3].degats;
	
			document.getElementById("competence1").innerText = competence1; 
			document.getElementById("competence2").innerText = competence2; 
			document.getElementById("competence3").innerText = competence3; 
			document.getElementById("competence4").innerText =competence4; 
			
		
    

		}
		xhrAttaque.send();   
		
		let xhrAttaqueEnnemie = new XMLHttpRequest();
		xhrAttaqueEnnemie.open('GET','/getAttaques?pid='+pokeId2, true);
		xhrAttaqueEnnemie.onload = function traiterReponseAttaque(){
			response = JSON.parse(xhrAttaqueEnnemie.responseText);		
				
			degatennemi1 = response[0].degats;
			degatennemi2 = response[1].degats;
			degatennemi3 = response[2].degats;
			degatennemi4 = response[3].degats;
		}
		xhrAttaqueEnnemie.send();   
	}
	response = envoyerRequete(pokeId1);