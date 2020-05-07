"use strict";

document.addEventListener('DOMContentLoaded', initPage); // quand la page charger, lancer initPage()
document.addEventListener('DOMContentLoaded', chargerUtilisateurs); // quand la page charger, lancer  chargerUtilisateurs()

let stockageUtilisateur; // liste des utilisateurs deja en DB

function chargerUtilisateurs(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET','/getAllUsers',true); //method url asynch
    xhr.onload = function(){
        let reponse = JSON.parse(xhr.responseText);
        stockageUtilisateur = reponse; // inject into global var
    }
    xhr.send();
}

function initPage(){ 
    let inscriptionForm = document.getElementById("inscriptionForm");
    inscriptionForm.addEventListener("submit", SoumettreRequete); //on submit load function
}

function SoumettreRequete(event){
   event.preventDefault(); //bloque lenvoi formulaire
    
    let formulaire = this;
    let userExists = false; //initialise le fait que l'user existe a false
    
    for (let elements of stockageUtilisateur){
        if(elements.user_name === formulaire.username.value){
            userExists = true; //test if user exits
        }
    }
    
    if(userExists === false){ //if user doesnt exist send values 
         envoyerRequete(formulaire.username.value, formulaire.password.value, formulaire.gender.value, formulaire.lang.value); //envoyer la requete au serv username password gender and value
    }
    else{
        alert("Le nom d'utilisateur est deja selectionner. Veuillez en entrez un autre.") // otherwise prompt user to re-enter
    }
   
}

function envoyerRequete(user, pass, gender, lang){
    let xhr = new XMLHttpRequest(); 
    xhr.open('GET', '/sendUserInfo?username=' + user + '&mdp=' + pass +'&sexe=' + gender + '&lang=' + lang, true); //define type GET, URL, asynch
    xhr.onload = function(){ 
                window.location = "/combat?user=" + user ; //send to next page with user info          
    }
    xhr.send();
}