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
    
    document.getElementById("pourcentPv1").innerText = "Pv: " + pvPok1 + "%";
    document.getElementById("pourcentPv2").innerText = "Pv: " + pvPok2 + "%";
    
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
    
    document.getElementById("pourcentPv1").innerText = "Pv: " + pvPok1 + "%";
    document.getElementById("pourcentPv2").innerText = "Pv: " + pvPok2 + "%";
}
function resultatCombat(){
    if(pvPok2 <= 0){
        alert("Vous avez gagné!");
        document.getElementById("pv2").value = 0;
        document.getElementById("pourcentPv2").innerText = "Pv: " + 0 + "%";
    }
    if(pvPok1 <= 0){
        alert("Vous avez perdu!");
        document.getElementById("pv1").value = 0;
        document.getElementById("pourcentPv1").innerText = "Pv: " + 0 + "%";
    }
}
function ouvrirSac(){
    alert("Cette fonctionnalité n'est pas disponible dans la version gratuite.");
}
function ouvrirPokemon(){
    alert("Cette fonctionnalité n'est pas disponible dans la version gratuite.");
}
function ouvrirFuite(){
    window.location.replace("page4.html");
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
        alert("Vous avez attaqué avec 10PV.");
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
        alert("Vous avez attaqué avec 20PV.");
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
        alert("Vous avez attaqué avec 30PV.");
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
        alert("Vous avez attaqué avec 40PV.");
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
        pvPok1 = pvPok1 - degat1;
        alert("Vous avez été attaqué avec 10PV.");
    }
    if(choixAttaqueEnnemie == 1){
        pvPok1 = pvPok1 - degat2;
        alert("Vous avez été attaqué avec 20PV.");
    }
    if(choixAttaqueEnnemie == 2){
        pvPok1 = pvPok1 - degat3;
        alert("Vous avez été attaqué avec 30PV.");
    }
    if(choixAttaqueEnnemie == 3){
        pvPok1 = pvPok1 - degat4;
        alert("Vous avez été attaqué avec 40PV.");
    }
}










