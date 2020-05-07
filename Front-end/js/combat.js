"use strict";

let pvPok1 = 100;
let pvPok2 = 100;
let nom1 = "Mickaël";
let nom2 = "Morgan";
let male = "♂";
let femele = "♀";

let pourcentReussite;
let choixAttaqueEnnemie;

let degat1 ;
let degat2  ;
let degat3 ;
let degat4  ;

let competence1;
let competence2;
let competence3;
let competence4;

function initPage(){

	let pid = 1 ;
	let response;
	
	function envoyerRequete(pid){
		let xhrAttaque = new XMLHttpRequest();
		xhrAttaque.open('GET','/getAttaques?pid='+pid,  true);
		xhrAttaque.onload = function traiterReponse(){
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
			
			document.getElementById("pv1").value = pvPok1;
			document.getElementById("pv2").value = pvPok2;
			document.getElementById("nomPok1").innerText = nom1 + " " + male;
			document.getElementById("nomPokDialogue").innerText = nom1 + "  ?";
			document.getElementById("nomPok2").innerText = nom2 + " " + femele;
    
			document.getElementById("pourcentPv1").innerText = "Pv: " + pvPok1 + "/100";
			document.getElementById("pourcentPv2").innerText = "Pv: " + pvPok2 + "/100";
    
		if(male === "♂"){
			document.getElementById("nomPok1").style.color = "blue";
		}
		if(femele === "♀"){
			document.getElementById("nomPok2").style.color = "red";
		}
	
		}
		xhrAttaque.send();   
	}
	response = envoyerRequete(pid);
	
	
}
function enCombat(){
    document.getElementById("pv1").value = ""+pvPok1;
    document.getElementById("pv2").value = ""+pvPok2;
    
    document.getElementById("pourcentPv1").innerText = "Pv: " + pvPok1 + "/100";
    document.getElementById("pourcentPv2").innerText = "Pv: " + pvPok2 + "/100";
}
function resultatCombat(){
    if(pvPok2 <= 0){
        document.getElementById("dialogue1Text").innerText = "Vous avez gagné !";
        
//        document.getElementById("dialogue").innerText = "Vous avez gagné!";
        
        document.getElementById("pv2").value = 0;
        document.getElementById("pourcentPv2").innerText = "Pv: " + 0 + "/100";
        
        document.getElementById("choixAttaque").style.display = "none";
        
        setTimeout(function(){window.location.replace("scores");}, 5000);
    }
    else if(pvPok1 <= 0){
        document.getElementById("dialogue1Text").innerText = "Vous avez perdu !";
        
//        document.getElementById("dialogue").innerText = "Vous avez gagné!";
        
        document.getElementById("pv1").value = 0;
        document.getElementById("pourcentPv1").innerText = "Pv: " + 0 + "/100";
        
        document.getElementById("choixAttaque").style.display = "none";
        
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
    window.location.replace("login");
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
    console.log(pourcentReussite);
    
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
    console.log(pourcentReussite);
    
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
    console.log("-" + choixAttaqueEnnemie);
    
    if(choixAttaqueEnnemie == 0){
        if(pourcentReussite > 20 && pourcentReussite <= 100){
            pvPok1 = pvPok1 - degat1;
            document.getElementById("dialogue2Text").innerText = "Il a infligé "+degat1+" PV.";
        }
        else{
        document.getElementById("dialogue2Text").innerText = "Il a raté son attaque !";
        }
    }
    if(choixAttaqueEnnemie == 1){
        if(pourcentReussite > 30 && pourcentReussite <= 100){
            pvPok1 = pvPok1 - degat2;
            document.getElementById("dialogue2Text").innerText = "Il a infligé "+degat2+" PV.";
        }
        else{
        document.getElementById("dialogue2Text").innerText = "Il a raté son attaque !";
        }
    }
    if(choixAttaqueEnnemie == 2){
        if(pourcentReussite > 40 && pourcentReussite <= 100){
            pvPok1 = pvPok1 - degat3;
            document.getElementById("dialogue2Text").innerText = "Il a infligé "+degat3+" PV.";
        }
        else{
        document.getElementById("dialogue2Text").innerText = "Il a raté son attaque !";
        }
    }
    if(choixAttaqueEnnemie == 3){
        if(pourcentReussite > 50 && pourcentReussite <= 100){
            pvPok1 = pvPok1 - degat4;
            document.getElementById("dialogue2Text").innerText = "Il a infligé "+degat4+" PV.";
        }
        else{
        document.getElementById("dialogue2Text").innerText = "Il a raté son attaque !";
        }
    }
}










