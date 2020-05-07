"use strict";
let donnees;
let xhr = new XMLHttpRequest();
    xhr.open('get', "/getScore", true);
    xhr.onload =
        function traiterReponse() {
            donnees = JSON.parse(xhr.responseText);
        };
    xhr.send();

function initPage(){
    let tableauComplet = "";
    console.log(donnees);
    
    for(let i = 0;i<donnees.length && i<10; i++){
        tableauComplet += "<tr><td>" + "#" + (i+1) + "</td><td>" + donnees[i].user_name + "</td><td>" + donnees[i].victoire + "</td><td>" + donnees[i].defaite + "</td></tr>";
    }
    
    document.getElementById("tableauScore").innerHTML = tableauComplet;
}

function retourPageAcceuil(){
    window.location = "index";
}