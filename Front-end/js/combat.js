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
        
//        document.getElementById("dialogue").innerText = "Vous avez gagné!";
        
        document.getElementById("pv2").value = 0;
        document.getElementById("pourcentPv2").innerText = "Pv: " + 0 + "/100";
        
        document.getElementById("choixAttaque").style.display = "none";
        
        setTimeout(function(){window.location.replace("page4.html");}, 5000);
    }
    else if(pvPok1 <= 0){
        document.getElementById("page?url=page4").innerText = "Vous avez perdu !";
        
//        document.getElementById("dialogue").innerText = "Vous avez gagné!";
        
        document.getElementById("pv1").value = 0;
        document.getElementById("pourcentPv1").innerText = "Pv: " + 0 + "/100";
        
        document.getElementById("choixAttaque").style.display = "none";
        
        setTimeout(function(){window.location.replace("page?url=page4");}, 5000);
    }
}
function ouvrirSac(){
    alert("Cette fonctionnalité n'est pas disponible dans la version gratuite.");
}
function ouvrirPokemon(){
    alert("Cette fonctionnalité n'est pas disponible dans la version gratuite.");
}
function ouvrirFuite(){
    window.location.replace("page?url=login");
}
function ouvrirAttaque(){
    document.getElementById("menuAttaque").style.display = "block";
}

function pourcentageReussite(){
    pourcentReussite = Math.floor(Math.random()*100);
}

function attaque1(){
    pourcentageReussite();
    console.log(pourcentReussite);
    
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
    console.log(pourcentReussite);
    
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
    console.log(pourcentReussite);
    
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
    console.log(pourcentReussite);
    
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
    console.log("-" + choixAttaqueEnnemie);
    
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










