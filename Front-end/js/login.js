"use strict";

document.addEventListener('DOMContentLoaded', initPage); // quand la page charger, lancer initPage()

function initPage(){ 
    let formLogin = document.getElementById("formLogin");
    formLogin.addEventListener("submit", SoumettreRequete); //on submit load function
}

function SoumettreRequete(event){
   event.preventDefault(); //bloque lenvoi formulaire
    
    let formulaire = this; //recuperation ID formulaire
    
    envoyerRequete(formulaire.username.value, formulaire.password.value); //recup user mdp et envoy a function
}

function envoyerRequete(user, pass){
            
    
    let xhr = new XMLHttpRequest();
    
    xhr.open('GET', '/getUserInfo?username=' + user + '&mdp=' + pass, true); //define type GET, URL, asynch
    xhr.onload = function(){
        
        let reponse = JSON.parse(xhr.responseText);
        
        if(reponse.length === 0){ // test pour match
           alert("Username ou password non reconnu, veuillez reessayer");
           }
        
        else if(user == reponse[0].user_name || reponse[0].mot_de_passe == pass){ // if user pass is known in DB
            window.location = "/combat?user=" + user ; //send to combat with username param
           
        }
        else{
            alert("Erreur inconnue"); // au cas ou ?
        }
    }
   
    xhr.send();
}

function envoyerPageInscription(){
    window.location = "inscription";
}
