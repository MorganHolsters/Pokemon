"use strict";
function envoyerPageCombat(){
    const username ="";
    const mdp = "";
    
    
    xhr.open('get', 'getUserInfo?username=' + username + '&mdp=' + mdp);
    xhr.onload = () => {
        window.location = "page?url=combat&user=" + username + "&mdp=" + mdp;
    }
    
    
    
}
function envoyerPageInscription(){
    window.location = "inscription.html";
}