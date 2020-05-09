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
.Une page de fin de partie affichant un tableau des scores reprenant les scores de tous les utilisateurs
```
### Fonctionnalités secondaires
```
.Possibilité d'arrêter le combat en cliquant sur fuite
.Possibilié de récupérer les statistiques du joueur en fin de partie 
```
## Implémentation détaillée
### Implémentation: approche technique
```
1.backend: Une base de données permettant de mémoriser les Pokémon et les joueurs
   Une table utilisateurs
      reprenant les champs du formulaire et leur ajoutant un id (id_utilisateur, user_name, sexe, language_prefere et mdp)
   Une table Pokémon
      avec les champs id_pokemon, nom_pokemon, sexe_pokemon et pv_totaux
   table attaques
      avec les champs id_attaques, id_pokemon, nom_attaque et degats 
   table score
      avec les champs id_score, id_utilisateur, victoire, defaite
2.backend: Un serveur web capable de proposer les pages html, js et css ainsi que de proposer des webservices 
3.backend: 
   -Un webservice capable d'envoyer et de recevoir des données utilisateurs (Morgan)
       retour: JSON
       nom: getUserInfo
       paramètres: in username, in password
   -Un webservice capable de recevoir les infos utilisateurs afin de verifier s'ils exitent déjà (Morgan)
       retour: JSON tableau contenant utilisateurs
       nom: getAllUsers
       paramètres: in n/a
   -Un webservice capable de recevoir les infos utilisateurs afin d'envoyer les données d'utilisateur au serveur (Morgan)
       retour: RAW Envoit à la base de données les infos utilisateurs
       nom: sendUserInfo
       paramètres: in username, mdp, sexe, lang
   -Un webservice capable d'envoyer les noms, le sexe et les pv totaux du Pokémon (Florian)
       nom: get_Pokémon
       paramètres: in n/a
   -Un webservice capable de mettre à jour un tableau des scores (Nathan)
       retour: int
       paramètres: tinyint
       nom: get_score
   -Un webservice capable d'envoyer les attaques au pokémon (Mickael)
       paramètres: in nom, in degats
       nom: get_attaques
   -Un webservice permettant d'ajouter un score au tableau des scores 
       paramètres:in id_utilisateur, in victoire, in defaite 
       nom:addScore
   -Un webservice qui envoit la liste des utilisateurs et de leurs ratios
       paramètres: in idUtilisateur, in nbVictoire, in nbDefaite
       nom: sendScore
   
4.frontend:
    - une page web (html, css, js) de présentation
    - une page web (html, css, js) de formulaire permettant d'appeler des webservices et de traiter les réponses et qui propose une interface utilisateur pour
        -demander un nom
        -demander un mod de passe
        -demander un prénom
        -demander un sexe
        -demander un language de programmation préféré
        -et d'enregistrer ces derniers
    -une page web (html, css, js) de combat permettant d'appeler des webservices et de traiter les réponses et qui propose une interface utilisateur pour:
        -afficher la zone de combat, les pokémons, le menu d'ordres et le nom d'utilisateur
        -modifier les pv des pokémon
        -stocker victoires/défaites
    -une page web (html, css, js) de fin permettant d'appeler  un webservice et qui propose une interface utilisateur pour:
        -afficher les scores des joueurs
      
