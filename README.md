# Projet-Pokémon
## présentation de l'équipe
Ce projet  a été créé par Holsters Morgan, Parfondry Mickaël, Grégoire Nathan et Florian Hourelle de la classe 1TL1
## Description du projet
### Besoin du client 
Nous désirons une page web simulant un combat pokémon avec possibilité de sauver vos résultats
### Fonctionnalités principales
```
.Une page présentant le jeu et ses règles
.Possibilité de choisir le nom du joueur 
.Une page de combat de Pokémon permettant de choisir son attaque
.Une page de fin de partie victoire ou défaite
```
### Fonctionnalités secondaires
```
.Possibilité d'arrêter le combat en appuyant sur fuite
.Possibilié de récupérer les statistiques du joueur en fin de partie 
```
## Implémentation détaillée
### Implémentation: approche technique
```
1.backend: Une base de donée permettant de mémoriser les Pokémon et les joueur
   Une table uilisateurs
      reprenant les champs du formulaire (nom, prénom, sexe, language préféré, mdp, victoire, défaite)
   Une table Pokémon
      avec les champs id_pokemon, nom_pokemon, sexe_pokemon, pv_totaux
   table attaques
      avec les champs id_pokemon, nom_attaque, dégats 
2.backend: Un serveur web capable de proposer les pages html, js et css ainsi que de proposer des webservices 
3.backend: 
   -Un webservice capable d'envoyer et de recevoir des données utilisateurs 
       retour: varchar
       nom: get_user_info
       paramètres: in username, in password
   -Un webservice capable d'envoyer les nom, le sexe et les pv totaux du Pokémon
       nom: get_Pokémon
       paramètres: in nomPokémon,in pvTotaux
   -Un webservice capable de mettre à jour un tableau de scores
       retour: int
       paramètre: tinyint
       nom: get_score
   -Un webservice capable d'envoyer les attaques au pokémon
       paramètre: in nom, in dégats
       nom: get_attaques
4.frontend:
    - une page web (html, css, js) de présentation
    - une page web (html, css, js) de formulaire permettant d'appeler des webservices et de traiter les réponses qui propose une interface utilisateur pour
        -demander un nom
        -demander un mod de passe
        -demander un prénom
        -demander un sexe
        -demander un language de programmation préféré
        -et d'enregistrer ces derniers
    -une page web (html, css, js) de combat permettant d'appeler des webservices et de traiter les réponses, qui propose une interface utilisateur pour:
        -afficher la zone de combat, les pokémons, le menu d'ordre et le nom d'utilisateur
        -modifier les pv des pokémon
        -stocker victoires/défaites
    -une page web (html, css, js) de fin permettant d'appeler  un webservice, qui propose une interface utilisateur pour:
        -afficher les scores du joueur
      
