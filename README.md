# Projet-Pokémon
## présentation de l'équipe
Ce projet  a été créé par Holsters Morgan, Parfondry Mickaël, Grégoire Nathan et Florian Hourelle de la classe 1TL1
## Description du projet
### Besoin du client 
Nous désirons une page web simulant un combat pokémon avec possibilité de sauver vos résultats
### Fonctionnalités principales
```
.Une page présentant le jeu et ses règles
.Possibilité de pouvoir s'identifier / s'inscire
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
   Une table utilisateurs
      reprenant les champs du formulaire et leur ajoutant un id (id_utilisateur, user_name, sexe, language_prefere et mdp)
   Une table Pokémon
      avec les champs id_pokemon, nom_pokemon, sexe_pokemon et pv_totaux
   table attaques
      avec les champs id_attaques, id_pokemon, nom_attaque et dégats 
   table score
      avec les champs id_score, id_utilisateur, victoire, defaite
2.backend: Un serveur web capable de proposer les pages html, js et css ainsi que de proposer des webservices 
3.backend: 
   -Un webservice capable d'envoyer et de recevoir des données utilisateurs (Morgan)
       retour: JSON
       nom: getUserInfo
       paramètres: in username, in password
   -Un webservice capable de recevoir les infos utilisateurs afin de verifier s'il exite deja (Morgan)
       retour: JSON tableau contenant utilisateurs
       nom: getAllUsers
       paramètres: in n/a
   -Un webservice capable de recevoir les infos utilisateurs afin d'envoyer les donnees d'utilisateur au serv (Morgan)
       retour: RAW Envoy a la base de donnees les info utilisateur
       nom: sendUserInfo
       paramètres: in username, mdp, sexe, lang
   -Un webservice capable d'envoyer les nom, le sexe et les pv totaux du Pokémon (Florian)
       nom: get_Pokémon
   -Un webservice capable de mettre à jour un tableau de scores (Nathan)
       retour: int
       paramètre: tinyint
       nom: get_score
   -Un webservice capable d'envoyer les attaques au pokémon (Mickael)
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
        -afficher les scores des joueurs
      
