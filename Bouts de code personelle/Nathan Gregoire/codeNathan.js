//Création combat.js

"use strict";
let pvPok1 = 100;
let pvPok2 = 100;
let nom1 = "Mickaël";
let nom2 = "Morgan";
let male = "♂";
let femele = "♀";

let pourcentReussite;
let choixAttaqueEnnemie;

let degat1 = 10;
let degat2 = 20;
let degat3 = 30;
let degat4 = 40;



//-------------
let pseudoUtilisateur = "";
let mesUtilisateurs;
let idUtilisateur;
let mesScores;
let nbVictoire;
let nbDefaite;
//-------------

function initPage(){
    document.getElementById("pv1").value = 100;
    document.getElementById("pv2").value = 100;
    
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
    //----------------------
    
    
    let flag = 0;
    for(let p = 0; p<mesScores.length;p++){
        if(pseudoUtilisateur === mesScores[p].user_name){
            flag = 1;
            console.log("ok");
        }
    }

    if(flag === 0){
        let xhr5 = new XMLHttpRequest(); 
        xhr5.open('GET', '/addScore?id_utilisateur=' + idUtilisateur + '&victoire=' + 0 +'&defaite=' + 0, true);
        xhr5.send();
        console.log("Ajout BDD");
        setTimeout(function(){location.reload();}, 500);
    }
    //-----------------------
}

function enCombat(){
    document.getElementById("pv1").value = pvPok1;
    document.getElementById("pv2").value = pvPok2;
    
    document.getElementById("pourcentPv1").innerText = "Pv: " + pvPok1 + "/100";
    document.getElementById("pourcentPv2").innerText = "Pv: " + pvPok2 + "/100";
}
function resultatCombat(){
    if(pvPok2 <= 0){
        document.getElementById("dialogue1Text").innerText = "Vous avez gagné !";
        
        document.getElementById("pv2").value = 0;
        document.getElementById("pourcentPv2").innerText = "Pv: " + 0 + "/100";
        
        document.getElementById("choixAttaque").style.display = "none";
        
        for(let m = 0;m<mesUtilisateurs.length; m++){
            if(pseudoUtilisateur === mesScores[m].user_name){
                nbVictoire = mesScores[m].victoire;
                nbDefaite = mesScores[m].defaite;
                nbVictoire = (nbVictoire + 1);
            }
        }
        envoieScore();
        setTimeout(function(){window.location = "scores";}, 5000);
    }
    else if(pvPok1 <= 0){
        document.getElementById("pv1").innerText = "Vous avez perdu !";
        
        document.getElementById("pv1").value = 0;
        document.getElementById("pourcentPv1").innerText = "Pv: " + 0 + "/100";
        
        document.getElementById("choixAttaque").style.display = "none";
        
        for(let y = 0;y<mesUtilisateurs.length; y++){
            if(pseudoUtilisateur === mesScores[y].user_name){
                nbVictoire = mesScores[m].victoire;
                nbDefaite = mesScores[m].defaite;
                nbDefaite = (nbDefaite + 1);
            }
        }
        envoieScore();
        setTimeout(function(){window.location = "scores";}, 5000);
    }
}
function ouvrirSac(){
    alert("Cette fonctionnalité n'est pas disponible dans la version gratuite.");
}
function ouvrirPokemon(){
    alert("Cette fonctionnalité n'est pas disponible dans la version gratuite.");
}
function ouvrirFuite(){
    window.location = "scores";
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
        document.getElementById("dialogue1Text").innerText = "Vous avez infligée 10PV.";
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
        document.getElementById("dialogue1Text").innerText = "Vous avez infligée 20PV.";
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
        document.getElementById("dialogue1Text").innerText = "Vous avez infligée 30PV.";
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
        document.getElementById("dialogue1Text").innerText = "Vous avez infligée 40PV.";
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
            pvPok1 = pvPok1 - degat1;
            document.getElementById("dialogue2Text").innerText = "Il a infligé 10PV.";
        }
        else{
        document.getElementById("dialogue2Text").innerText = "Il a raté son attaque !";
        }
    }
    if(choixAttaqueEnnemie == 1){
        if(pourcentReussite > 30 && pourcentReussite <= 100){
            pvPok1 = pvPok1 - degat2;
            document.getElementById("dialogue2Text").innerText = "Il a infligé 20PV.";
        }
        else{
        document.getElementById("dialogue2Text").innerText = "Il a raté son attaque !";
        }
    }
    if(choixAttaqueEnnemie == 2){
        if(pourcentReussite > 40 && pourcentReussite <= 100){
            pvPok1 = pvPok1 - degat3;
            document.getElementById("dialogue2Text").innerText = "Il a infligé 30PV.";
        }
        else{
        document.getElementById("dialogue2Text").innerText = "Il a raté son attaque !";
        }
    }
    if(choixAttaqueEnnemie == 3){
        if(pourcentReussite > 50 && pourcentReussite <= 100){
            pvPok1 = pvPok1 - degat4;
            document.getElementById("dialogue2Text").innerText = "Il a infligé 40PV.";
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

