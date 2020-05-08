CREATE TABLE "DBA"."pokemon" (
	"id_pokemon" TINYINT NOT NULL,
	"nom_pokemon" VARCHAR(100) NULL,
	"pv_totaux" SMALLINT NULL,
	"sexe_pokemon" TINYINT NULL,
	PRIMARY KEY ( "id_pokemon" ASC )
) IN "system";
CREATE TABLE "DBA"."attaques" (
	"id_attaques" INTEGER NOT NULL DEFAULT AUTOINCREMENT,
	"id_pokemon" TINYINT NULL,
	"nom_attaques" VARCHAR(100) NULL,
	"degats" TINYINT NULL,
	PRIMARY KEY ( "id_attaques" ASC ),
	CONSTRAINT "FK_pokemon" FOREIGN KEY ( "id_pokemon" ASC ) REFERENCES "DBA"."pokemon" ( "id_pokemon" )

) IN "system";
CREATE TABLE "DBA"."utilisateurs" (
	"id_utilisateur" INTEGER NOT NULL DEFAULT AUTOINCREMENT,
	"user_name" VARCHAR(100) NULL,
	"mot_de_passe" VARCHAR(32) NULL,
	"sexe" TINYINT NULL,
	"language_prefere" VARCHAR(100) NULL,
	PRIMARY KEY ( "id_utilisateur" ASC )
) IN "system";
CREATE TABLE "DBA"."score" (
	"id_score" INTEGER NOT NULL DEFAULT AUTOINCREMENT,
	"id_utilisateur" INTEGER NULL,
	"victoire" INTEGER NULL,
	"defaite" INTEGER NULL,
	PRIMARY KEY ( "id_score" ASC ),
	CONSTRAINT "FK_utilisateur" FOREIGN KEY ( "id_utilisateur" ASC ) REFERENCES "DBA"."utilisateurs" ( "id_utilisateur" )
) IN "system";



CREATE FUNCTION "DBA"."fun_checkUsername"(IN username VARCHAR(100))
RETURNS TINYINT 
BEGIN
    IF EXISTS (SELECT user_name FROM utilisateurs WHERE user_name LIKE username)
        THEN RETURN 1;
    ELSE
        RETURN   0;
ENDIF 
END;



insert into pokemon (id_pokemon, nom_pokemon, pv_totaux, sexe_pokemon) values
(1,'Florizare',900,0),
(2,'Dracaufeu',800,1),
(3,'Tortank',1000,0),
(4,'Pikachu',800,1),
(5,'Magicarpe',900,0),
(6,'Mew',1000,1)


insert into attaques (id_pokemon, nom_attaques, degats)values
(1,'Charge',50),
(1,'Tranch''herbe',80),
(1,'Damoclès',120),
(1,'Lance-Soleil',200),
(2,'Cru-Aile',60),
(2,'Flammèche',90),
(2,'Crocs Feu',140),
(2,'Boutefeu',230),
(3,'Charge',40),
(3,'Pistolet à O',70),
(3,'Vibraqua',100),
(3,'Hydrocanon',170),
(4,'Éclair',60),
(4,'Boule Élek',90),
(4,'Tonnerre',140),
(4,'Fatal-foudre',230),
(5,'Trempette',0),
(5,'Trempette',0),
(5,'Trempette',0),
(5,'Trempette',0),
(6,'Écras''Face',40),
(6,'Psyko',60),
(6,'Pouvoir Antique',100),
(6,'Aurasphère',170)

insert into utilisateurs (user_name, mot_de_passe, sexe, language_prefere)
VALUES 
('crillow', 'morgan', 0, 'html'),
('shorino', 'mickael', 1, 'css')

insert into score (id_utilisateur, victoire, defaite)
values
(1, 1, 1),
(2, 1, 1)
insert into pokemon (id_pokemon, nom_pokemon, pv_totaux, sexe_pokemon) values
(1,'Florizare',900,0),
(2,'Dracaufeu',800,1),
(3,'Tortank',1000,0),
(4,'Pikachu',800,1),
(5,'Magicarpe',900,0),
(6,'Mew',1000,1)


CREATE FUNCTION "DBA"."getPath"()
// renvoi le path de la DB
returns long varchar
deterministic
BEGIN
 declare dbPath long varchar; 
 declare dbName long varchar; 
 set dbPath = (select db_property ('file'));    
 set dbName = (select db_property('name')) + '.db'; 
 set dbPath = left(dbPath, length(dbPath)-length(dbName)); 
 return dbPath;
END;
  
CREATE PROCEDURE "DBA"."p_addScore"(IN idUtilisateur INTEGER  ,IN nbVictoire INTEGER , IN nbDefaite INTEGER)
BEGIN
    insert into score (id_utilisateur, victoire, defaite)
    VALUES 
    (idUtilisateur, nbVictoire, nbDefaite)
END;

CREATE PROCEDURE "DBA"."s_getAllUsers"()
BEGIN
    SELECT user_name, id_utilisateur
        FROM utilisateurs 
END;

CREATE PROCEDURE "DBA"."p_getAttaques"(in pid tinyint)
begin   
    select DBA.attaques.id_pokemon, DBA.attaques.nom_attaques, DBA.attaques.degats 
        from attaques
        
     where id_pokemon = pid 
end;
  
CREATE PROCEDURE "DBA"."p_getPokemon" ()
BEGIN  
    select DBA.pokemon.nom_pokemon, DBA.pokemon.pv_totaux, DBA.pokemon.sexe_pokemon
        from pokemon
end;

CREATE PROCEDURE "DBA"."p_score"()
BEGIN
    select score.id_score, utilisateurs.user_name, score.victoire, score.defaite
    from score 
    JOIN utilisateurs on score.id_utilisateur = utilisateurs.id_utilisateur

    order by victoire DESC, defaite ASC
END;

CREATE PROCEDURE "DBA"."p_getUserInfo" (IN username VARCHAR(100), IN mdp VARCHAR(32))
BEGIN
    SELECT user_name, mot_de_passe
        FROM utilisateurs
    WHERE user_name = username AND mot_de_passe = mdp
END;

CREATE PROCEDURE "DBA"."http_getCSS"(in url char(255))
// renvoie le contenu de la feuille de style et param url
BEGIN
-- 
  call sa_set_http_header('Content-Type', 'text/css'); 
    Call sa_set_http_header('Access-Control-Allow-Origin', '*'); 
    select xp_read_file(dba.getPath() || 'css\' || url); 
--
END;
  
CREATE PROCEDURE "DBA"."http_getIMG"(in url char(255))
// renvoie le contenu de l image
BEGIN
  call sa_set_http_header('Content-Type', 'image/png'); 
    Call sa_set_http_header('Access-Control-Allow-Origin', '*'); 
    select xp_read_file(dba.getPath() || 'img\' || url);  
END;

CREATE PROCEDURE "DBA"."http_getJS"(in url char(255))
// renvoie le contenu du script js 
BEGIN
  call sa_set_http_header('Content-Type', 'application/javascript'); 
    Call sa_set_http_header('Access-Control-Allow-Origin', '*'); 
    select xp_read_file(dba.getPath() || 'js\' || url);           
END;

CREATE PROCEDURE "DBA"."http_getPage"(in url char(255))
// renvoie le contenu de la page html 
BEGIN
    call sa_set_http_header('Content-Type', 'text/html; charset=utf-8'); 
    Call sa_set_http_header('Access-Control-Allow-Origin', '*'); 
    select xp_read_file(dba.getPath() || url || '.html'); 
END;

CREATE PROCEDURE "DBA"."p_sendScores"(IN idUtilisateur VARCHAR (100) ,IN nbVictoire INTEGER , IN nbDefaite INTEGER)
BEGIN
    update score
    set 
        score.victoire = nbVictoire,
        score.defaite = nbDefaite
    where id_utilisateur = idUtilisateur;
END;

CREATE PROCEDURE "DBA"."p_sendUserInfo"(IN username varchar(100), IN pass varchar(32), IN sex TINYINT, IN lang VARCHAR(100))
BEGIN
    insert into utilisateurs (user_name, mot_de_passe, sexe, language_prefere)
    VALUES 
    (username, pass, sex, lang)
END;


  
CREATE SERVICE "addScore" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" METHODS 'GET' AS call p_addScore(:id_utilisateur,:victoire,:defaite);


CREATE SERVICE "css" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call dba.http_getCSS(:url);

  
CREATE SERVICE "getAllUsers" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" METHODS 'GET' AS call s_getAllUsers();

CREATE SERVICE "getAttaques" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call p_getAttaques(:pid);

CREATE SERVICE "getPokemon" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call p_getPokemon();

CREATE SERVICE "getScore" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call p_score();

CREATE SERVICE "getUserInfo" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" METHODS 'GET' AS call p_getUserInfo(:username,:mdp);

CREATE SERVICE "img" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call dba.http_getIMG(:url);

CREATE SERVICE "js" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call dba.http_getJS(:url);


CREATE SERVICE "page" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call dba.http_getPage(:url);

CREATE SERVICE "root" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call dba.http_getPage(:url);

  
CREATE SERVICE "sendScores" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" METHODS 'GET' AS call p_sendScores(:id_Utilisateur,:victoire,:defaite);

CREATE SERVICE "sendUserInfo" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" METHODS 'GET' AS call p_sendUserInfo(:username,:mdp,:sexe,:lang);
