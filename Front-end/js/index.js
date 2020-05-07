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
