"use strict";
let donneesPoke;
let pokeId1;
let pokeId2;
let pvPok1; 
let pvPok2;
let nom1; 
let nom2;
let sexe1;
let sexe2;
let pvConst1;
let pvConst2;

let pourcentReussite;
let choixAttaqueEnnemie;

let degat1;
let degat2;
let degat3;
let degat4;

let degatennemi1;
let degatennemi2;
let degatennemi3;
let degatennemi4;

let competence1;
let competence2;
let competence3;
let competence4;

let pseudoUtilisateur = "";
let mesUtilisateurs;
let idUtilisateur;
let mesScores;
let nbVictoire;
let nbDefaite;

function initPage(){

	let response;
    let reponseEnemie;
	
	
	let xhrPv = new XMLHttpRequest();
	xhrPv.open('get', '/getPokemon', false);
	xhrPv.onload = 
	function traiterReponse(){
		donneesPoke = JSON.parse(xhrPv.responseText);
	
		pokeId1 = Math.floor(Math.random()*6)+1 ; //variable servant à retenir un id d'un pokemon aléatoirement
		pokeId2 = Math.floor(Math.random()*6)+1 ;
	}
	xhrPv.send();
    
	
	if (donneesPoke[pokeId1-1].sexe_pokemon === 1){ // condition servant à définir le sexe du pokemon
		sexe1= "♂";
	
}
	else if (donneesPoke[pokeId1-1].sexe_pokemon === 0){
		sexe1 = "♀";
	
}

	if (donneesPoke[pokeId2-1].sexe_pokemon === 1){
		sexe2 = "♂";
}
	else if (donneesPoke[pokeId2-1].sexe_pokemon === 0){
		sexe2 = "♀";
		
}
    
    if( sexe1=== "♂"){ // défini la couleur du sexe en fonction de ce dernier 
       document.getElementById("nomPok1").style.color = "blue";
    }
	else {
		document.getElementById("nomPok1").style.color = "red";
	}
		
    if(sexe2 === "♀"){
       document.getElementById("nomPok2").style.color = "red";
    }
	else {
		document.getElementById("nomPok2").style.color = "blue";
	} 
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
	
			document.getElementById("competence1").innerText = competence1; 
			document.getElementById("competence2").innerText = competence2; 
			document.getElementById("competence3").innerText = competence3; 
			document.getElementById("competence4").innerText =competence4; 
			
		
    

		}
		xhrAttaque.send();   
		
		let xhrAttaqueEnnemie = new XMLHttpRequest();
		xhrAttaqueEnnemie.open('GET','/getAttaques?pid='+pokeId2, true);
		xhrAttaqueEnnemie.onload = function traiterReponseAttaque(){
			reponseEnemie = JSON.parse(xhrAttaqueEnnemie.responseText);		
				
			degatennemi1 = reponseEnemie[0].degats;
			degatennemi2 = reponseEnemie[1].degats;
			degatennemi3 = reponseEnemie[2].degats;
			degatennemi4 = reponseEnemie[3].degats;
		}
		xhrAttaqueEnnemie.send();   
	}
	response = envoyerRequete(pokeId1);
        
    pvConst1 = donneesPoke[pokeId1-1].pv_totaux; //variable servant à retenir les points de vie maximum d'un pokemon
	pvConst2 = donneesPoke[pokeId2-1].pv_totaux;
	pvPok1 = donneesPoke[pokeId1-1].pv_totaux	; // variable servant à retenir les points de vie d'un pokemon qui seront modifiés lors du combat
	pvPok2 = donneesPoke[pokeId2-1].pv_totaux;
	nom1 = donneesPoke[pokeId1-1].nom_pokemon; // variable servant à retenir le nom d'un pokemon
	nom2 = donneesPoke[pokeId2-1].nom_pokemon;
	
	document.getElementById("pokemon1").innerHTML = "<img class=\"taillePok\" alt=\"pok1\" src=\"img/pokemon"+ pokeId1 +".png\">"; //permet de choisir l'image en fonction du pokemon donné
	document.getElementById("pokemon2").innerHTML = "<img class=\"taillePok\" alt=\"pok2\" src=\"img/pokemon"+ pokeId2 +".png\">";
	document.getElementById("pv1").max = pvConst1; // place la valeur de points de vie capé
	document.getElementById("pv2").max = pvConst2;
	
    document.getElementById("pv1").value = pvPok1; // place la valeur de points de vie effectif
    document.getElementById("pv2").value = pvPok2;
    
    document.getElementById("nomPok1").innerText = nom1 + " " + sexe1; //Donne le nom et le sexe du pokemon
    document.getElementById("nomPokDialogue").innerText = nom1 + "  ?"; // Demande au pokemon ce qu'il doit faire
    document.getElementById("nomPok2").innerText = nom2 + " " + sexe2;
    
    document.getElementById("pourcentPv1").innerText = "Pv: " + pvPok1 + "/" + pvConst1;  
    document.getElementById("pourcentPv2").innerText = "Pv: " + pvPok2 + "/" + pvConst2;
	
    
    //----------------------
    
    
    let flag = 0; //user doesnt exist
    for(let p = 0; p<mesScores.length;p++){ //regarde en fonction de la longeur du tableau score
        if(pseudoUtilisateur === mesScores[p].user_name){ //regarde si le pseudo match un existant
            flag = 1; //fait rien
        }
    }

    if(flag === 0){ //si existe pas alors envoy nouvelle ligne
        let xhr5 = new XMLHttpRequest(); 
        xhr5.open('GET', '/addScore?id_utilisateur=' + idUtilisateur + '&victoire=' + 0 +'&defaite=' + 0, true);
        xhr5.send();
        setTimeout(function(){location.reload();}, 500);
    }
    //-----------------------
}

function enCombat(){
    document.getElementById("pv1").value = pvPok1;
    document.getElementById("pv2").value = pvPok2;
    
    document.getElementById("pourcentPv1").innerText = "Pv: " + pvPok1 + "/" + pvConst1;
    document.getElementById("pourcentPv2").innerText = "Pv: " + pvPok2 + "/" + pvConst2;
}
function resultatCombat(){
    if(pvPok2 <= 0){
        document.getElementById("dialogue1Text").innerText = "Vous avez gagné !";
        
        
        document.getElementById("pv2").value = 0;
        document.getElementById("pourcentPv2").innerText = "Pv: " + 0 + "/" + pvConst2;
        
        document.getElementById("choixAttaque").style.display = "none";
        
        for(let m = 0;m<mesUtilisateurs.length; m++){
            if(pseudoUtilisateur === mesScores[m].user_name){
                nbVictoire = mesScores[m].victoire;
                nbDefaite = mesScores[m].defaite;
                nbVictoire = (nbVictoire + 1);
            }
        }
        envoieScore();
        
        setTimeout(function(){window.location.replace("scores");}, 5000);
    }
    else if(pvPok1 <= 0){
        document.getElementById("dialogue1Text").innerText = "Vous avez perdu !";
        
        
        document.getElementById("pv1").value = 0;
        document.getElementById("pourcentPv1").innerText = "Pv: " + 0 + "/" + pvConst1;
        
        document.getElementById("choixAttaque").style.display = "none";
        
        for(let y = 0;y<mesUtilisateurs.length; y++){
            if(pseudoUtilisateur === mesScores[y].user_name){
                nbVictoire = mesScores[y].victoire;
                nbDefaite = mesScores[y].defaite;
                nbDefaite = (nbDefaite + 1);
            }
        }
        envoieScore();
        
        setTimeout(function(){window.location.replace("scores");}, 5000);
    }
}
function ouvrirSac(){
    alert("Cette fonctionnalité n'est pas disponible dans la version gratuite.");
}
function ouvrirPokemon(){
    alert("Cette fonctionnalité n'est pas disponible dans la version gratuite.");
}
function ouvrirFuite(){
    window.location.replace("scores");
    for(let i = 0;i<mesUtilisateurs.length; i++){
            if(pseudoUtilisateur === mesScores[i].user_name){
                nbVictoire = mesScores[i].victoire;
                nbDefaite = mesScores[i].defaite;
                nbDefaite = (nbDefaite + 1);
            }
        }
        envoieScore();
}
function ouvrirAttaque(){
    document.getElementById("menuAttaque").style.display = "block";
}

function pourcentageReussite(){
    pourcentReussite = Math.floor(Math.random()*100);
}

function attaque1(){
    pourcentageReussite();
    
    if(pourcentReussite > 20 && pourcentReussite <= 100){
       pvPok2 = pvPok2 - degat1;
        document.getElementById("dialogue1Text").innerText = "Vous avez infligée "+degat1+" PV.";
    }
    else{
        document.getElementById("dialogue1Text").innerText = "Vous avez raté votre attaque !";
    }
    
    attaqueEnnemie();
    enCombat();
    resultatCombat();
    document.getElementById("menuAttaque").style.display = "none";
}
function attaque2(){
    pourcentageReussite();
    
    if(pourcentReussite > 30 && pourcentReussite <= 100){
       pvPok2 = pvPok2 - degat2;
        document.getElementById("dialogue1Text").innerText = "Vous avez infligée "+degat2+" PV.";
    }
    else{
        document.getElementById("dialogue1Text").innerText = "Vous avez raté votre attaque !";
    }
    
    attaqueEnnemie();
    enCombat();
    resultatCombat();
    document.getElementById("menuAttaque").style.display = "none";
}
function attaque3(){
    pourcentageReussite();
 
    
    if(pourcentReussite > 40 && pourcentReussite <= 100){
       pvPok2 = pvPok2 - degat3;
        document.getElementById("dialogue1Text").innerText = "Vous avez infligée "+degat3+" PV.";
    }
    else{
        document.getElementById("dialogue1Text").innerText = "Vous avez raté votre attaque !";
    }
    
    attaqueEnnemie();
    enCombat();
    resultatCombat();
    document.getElementById("menuAttaque").style.display = "none";
}
function attaque4(){
    pourcentageReussite();
    
    if(pourcentReussite > 50 && pourcentReussite <= 100){
       pvPok2 = pvPok2 - degat4;
        document.getElementById("dialogue1Text").innerText = "Vous avez infligée "+degat4+" PV.";
    }
    else{
        document.getElementById("dialogue1Text").innerText = "Vous avez raté votre attaque !";
    }
    
    attaqueEnnemie();
    enCombat();
    resultatCombat();
    document.getElementById("menuAttaque").style.display = "none";
}


function attaqueEnnemie(){
    choixAttaqueEnnemie = Math.floor(Math.random()*4);
    
    if(choixAttaqueEnnemie == 0){
        if(pourcentReussite > 20 && pourcentReussite <= 100){
            pvPok1 = pvPok1 - degatennemi1 ;
            document.getElementById("dialogue2Text").innerText = "Il a infligé "+degatennemi1 +" PV.";
        }
        else{
        document.getElementById("dialogue2Text").innerText = "Il a raté son attaque !";
        }
    }
    if(choixAttaqueEnnemie == 1){
        if(pourcentReussite > 30 && pourcentReussite <= 100){
            pvPok1 = pvPok1 - degatennemi2 ;
            document.getElementById("dialogue2Text").innerText = "Il a infligé "+degatennemi2 +" PV.";
        }
        else{
        document.getElementById("dialogue2Text").innerText = "Il a raté son attaque !";
        }
    }
    if(choixAttaqueEnnemie == 2){
        if(pourcentReussite > 40 && pourcentReussite <= 100){
            pvPok1 = pvPok1 - degatennemi3 ;
            document.getElementById("dialogue2Text").innerText = "Il a infligé "+degatennemi3 +" PV.";
        }
        else{
        document.getElementById("dialogue2Text").innerText = "Il a raté son attaque !";
        }
    }
    if(choixAttaqueEnnemie == 3){
        if(pourcentReussite > 50 && pourcentReussite <= 100){
            pvPok1 = pvPok1 - degatennemi4 ;
            document.getElementById("dialogue2Text").innerText = "Il a infligé "+degatennemi4 +" PV.";
        }
        else{
        document.getElementById("dialogue2Text").innerText = "Il a raté son attaque !";
        }
    }
}


//------------------Recupère pseudo joueur et idUtilisateur

pseudoUtilisateur = window.location.search;
pseudoUtilisateur = pseudoUtilisateur.substr(6)

if(pseudoUtilisateur === ""){
    window.location = "login";
}


let xhr = new XMLHttpRequest();
    xhr.open('get', "/getAllUsers", false);
    xhr.onload =
        function traiterReponse() {
            mesUtilisateurs = JSON.parse(xhr.responseText);
        };
    xhr.send();


    for(let l = 0; l < mesUtilisateurs.length; l++){
        if(pseudoUtilisateur === mesUtilisateurs[l].user_name){
            idUtilisateur = mesUtilisateurs[l].id_utilisateur;
        }
    }

//------------------Récupere le tableau score

let xhr2 = new XMLHttpRequest();
    xhr2.open('get', "/getScore", false);
    xhr2.onload =
        function traiterReponse() {
            mesScores = JSON.parse(xhr2.responseText);
        };
    xhr2.send();


function envoieScore(){
        let xhr = new XMLHttpRequest(); 
        xhr.open('GET', '/sendScores?id_utilisateur=' + idUtilisateur + '&victoire=' + nbVictoire +'&defaite=' + nbDefaite, false);
        xhr.send();
    }

