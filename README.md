# Projet-Pokémon
## Présentation de l'équipe
Ce projet a été créé par Holsters Morgan, PARFONDRY Mickaël, GRÉGOIRE Nathan et HOUTRELLE Florian de la classe 1TL1.
## Description du projet
### Besoin du client 
Nous désirons créer un site web simulant un combat Pokémon avec la possibilité de sauver les résultats.
### Fonctionnalités principales
```
.Une page présentant le jeu et ses règles ;
.Une page d’identification / inscription ;
.Une page de combat de Pokémon attribuant aleatoirement un pokemon et ses attaques correspondantes ;
.Une page de fin de partie affichant un tableau des scores de tous les utilisateurs.
```
### Fonctionnalités secondaires
```
.Possibilité d'arrêter le combat en cliquant sur le bouton « Fuite » ;
.Possibilité de récupérer les statistiques du joueur en fin de partie.
```
## Implémentation détaillée
### Implémentation: approche technique
```
1.Backend: Une base de données permettant de mémoriser les Pokémon et les joueurs
   Une table utilisateurs
      comprenant les champs du formulaire d’identification / inscription et générant un id (id_utilisateur, user_name, sexe, 		language_prefere et mdp)
   Une table Pokémon
      comprenant les champs id_pokemon, nom_pokemon, sexe_pokemon et pv_totaux
   Une table attaques
      comprenant les champs id_attaques, id_pokemon, nom_attaque et degats 
   Une table score
      comprenant les champs id_score, id_utilisateur, victoire, defaite
      
2.Backend: Un serveur web capable de proposer les pages html, js et css ainsi que des webservices 

3.Backend (les WebServices): 

   -Un webservice capable d'envoyer et de recevoir des données utilisateurs (Morgan)
       retour: tableau avec utilisateur et mot de passe pour confimer l'existance de l'utilisateur ou tableau vide (dans le cas echeant)
	exemple: url = /getUserInfo?username=crillow&mdp=morgan
	[
		{
		"user_name": "crillow",
		"mot_de_passe": "morgan"
		}
	]
       nom: getUserInfo
       paramètres: in username, in password
       
   -Un webservice capable de recevoir les infos utilisateurs afin de vérifier s'ils existent déjà (Morgan)
       retour: tableau associatif contenant tout les utilisateurs et leurs ID
       exemple:
        [
		{
		"user_name": "crillow",
		"id_utilisateur": 1
		},
		{
		"user_name": "shorino",
		"id_utilisateur": 2
		},
	]
       nom: getAllUsers
       paramètres: in n/a
       
   -Un webservice capable de recevoir les infos utilisateurs afin d'envoyer les données d'utilisateur au serveur (Morgan)
       retour: RAW (Envoi à la base de données les infos utilisateurs)
       exemple: insert into utilisateurs (user_name, mot_de_passe, sexe, language_prefere)
       nom: sendUserInfo
       paramètres: in username, mdp, sexe, lang
       
   -Un webservice capable d'envoyer le nom, le sexe et les pv totaux des Pokémon (Florian)
       retour: tableau JSON des caractéristiques des Pokémon
       exemple: 
       [
		{
		"nom_pokemon": "Florizare",
		"pv_totaux": 900,
		"sexe_pokemon": 0
		},
		{
		"nom_pokemon": "Dracaufeu",
		"pv_totaux": 800,
		"sexe_pokemon": 1
		},
		{
		"nom_pokemon": "Tortank",
		"pv_totaux": 1000,
		"sexe_pokemon": 0
		}
	]
       nom: get_Pokémon
       paramètres: in n/a

   -Un webservice capable d'envoyer les attaques au Pokémon (Mickael)
       retour: tableau Json des compétences des Pokémon et leurs dégats respectifs 
       exemple : 
       [
	{
		"id_pokemon": 1,
		"nom_attaques": "Charge",
		"degats": 50
	},
	{
		"id_pokemon": 1,
		"nom_attaques": "Tranch'herbe",
		"degats": 80
	},
	{
		"id_pokemon": 1,
		"nom_attaques": "Damoclès",
		"degats": 120
	},
	{
		"id_pokemon": 1,
		"nom_attaques": "Lance-Soleil",
		"degats": 200
	}
       ]
       nom: get_attaques
       paramètres: in pid(pokemon ID) tinyint
          
   -Un webservice capable de mettre à jour un tableau des scores (Nathan)
       retour: JSON tableau associatif avec les victoires et defaites par utilisateurs
       exemple: 
       [
		{
		"id_score": 1,
		"user_name": "crillow",
		"victoire": 6,
		"defaite": 7
		},
		{
		"id_score": 2,
		"user_name": "shorino",
		"victoire": 4,
		"defaite": 2
		},
		{
		"id_score": 3,
		"user_name": "Oracle",
		"victoire": 1,
		"defaite": 0
		}
	]
       nom: getScore
       paramètres: in n/a
           
   -Un webservice permettant d'ajouter un score au tableau des scores (Nathan)
       retour: envoie du js vers la base de donnees l'id utilisateur et le nombre de victoire/defaites initialiser a zero (appeler    	        uniquement si l'utilisateur n'existe pas encore)
       exemple: insert into score (id_utilisateur, victoire, defaite)
       nom: addScore
       paramètres: in id_utilisateur, in victoire, in defaite 
       
   -Un webservice qui met a jour le nombre de victoire et defaite de l'utilisateurs actuel au serveur (Nathan)
       retour: envoie du js vers la base de donnees le nombre de victoires et de defaites en fonction de l'utilisateur actuel
       exemple: 
       		update score
    		set 
        		score.victoire = nbVictoire,
        		score.defaite = nbDefaite
    			where id_utilisateur = idUtilisateur;
       nom: sendScore
       paramètres: in idUtilisateur, in nbVictoire, in nbDefaite
   
4.Frontend:
    - une page web (html, css, js) de présentation
    - une page web (html, css, js) de formulaire permettant d'appeler des webservices, de traiter les réponses et proposant une interface utilisateur pour :
        -demander un nom
        -demander un mot de passe
        -demander un prénom
        -demander un sexe
        -demander un langage de programmation préféré
        -d'enregistrer ces informations
    -une page web (html, css, js) de combat permettant d'appeler des webservices, de traiter les réponses et proposant une interface utilisateur pour:
        -afficher la zone de combat, les Pokémons, le menu des ordres et le nom d'utilisateur
        -modifier les pv des Pokémon
        -stocker les victoires/défaites
    -une page web (html, css, js) de fin permettant d'appeler un webservice et proposant une interface utilisateur pour:
        -afficher les scores des joueurs
