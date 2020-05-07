// Code pour la page inscription

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

//******************************************************
// code pour la page index

let affichage = document.getElementById("speeches");
let compteur = 0;

function rotateSpeeches(){
    let texte2 = "<p>Les règles sont simples vous aurez accès à ##### et vous devrez en affrontez un nombre égal. Vous aurez accès à 4 attaques par pokémon chacune ayant une certaine chance de réussite… ou d’échec...</p>" +
        "<p>Ainsi les chances de réussites par attaque seront classées comme suite: </p>" +
        "<p>- Attaque 1 : 80% de réussite.</p>" +
        "<p>- Attaque 2 : 70% de réussite.</p>" +
        "<p>- Attaque 3 : 60% de réussite.</p>" +
        "<p>- Attaque 4 : 50% de réussite.</p>" +
        "<p>Sur ce si vous avez bien compris les règles il ne me reste que à vous souhaiter bonne chance.</p><input onclick=\"rotateSpeeches()\" type=\"button\" value=\"Suivant\" id=\"textChanger\">";

    let texte3 = "<p>Bienvenue dans le monde des Pokémon ! <BR> Les Pokémon sont d’étranges créatures avec lesquelles certains d’entre nous se réunissent afin de les faire s’affronter au cours de formidables combats. <BR> Es-tu prêt pour l’aventure ? <br>Alors qu'attand-tu pour te présenter!</p><input onclick=\"rotateSpeeches()\" type=\"button\" value=\"Je me présente!\" id=\"textChanger\">";
    if(compteur === 0){
        document.getElementById("speeches").innerHTML = texte2
    }else if(compteur === 1) {
        document.getElementById("speeches").innerHTML = texte3
    }
    else{
        window.location = "login"
    }
    compteur++;
}



//***************
//code pour la page login

"use strict";

document.addEventListener('DOMContentLoaded', initPage); // quand la page charger, lancer initPage()

function initPage(){ 
    let formLogin = document.getElementById("formLogin");
    formLogin.addEventListener("submit", SoumettreRequete); //on submit load function
}

function SoumettreRequete(event){
   event.preventDefault(); //bloque lenvoi formulaire
    
    let formulaire = this;
    
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

