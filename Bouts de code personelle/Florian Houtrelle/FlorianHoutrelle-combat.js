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

let pseudoUtilisateur;
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
    
    
    function enCombat(){
    document.getElementById("pv1").value = pvPok1;
    document.getElementById("pv2").value = pvPok2;
    
    document.getElementById("pourcentPv1").innerText = "Pv: " + pvPok1 + "/" + pvConst1;
    document.getElementById("pourcentPv2").innerText = "Pv: " + pvPok2 + "/" + pvConst2;
    
    
    
    function resultatCombat(){
    if(pvPok2 <= 0){
        document.getElementById("dialogue1Text").innerText = "Vous avez gagné !";
        

        
        document.getElementById("pv2").value = 0;
        document.getElementById("pourcentPv2").innerText = "Pv: " + 0 + "/" + pvConst2;
        
        document.getElementById("choixAttaque").style.display = "none";
        
        
            else if(pvPok1 <= 0){
        document.getElementById("dialogue1Text").innerText = "Vous avez perdu !";
  
        
        document.getElementById("pv1").value = 0;
        document.getElementById("pourcentPv1").innerText = "Pv: " + 0 + "/" + pvConst1;
        
        document.getElementById("choixAttaque").style.display = "none";
