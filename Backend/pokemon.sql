CREATE TABLE "DBA"."pokemon" (
    "id_pokemon"                     tinyint NOT NULL,
   "nom_pokemon"                    varchar(100) NULL,
   "pv_totaux"                      smallint NULL,
   "sexe_pokemon"                   tinyint NULL,
   PRIMARY KEY ("id_pokemon") 
)


CREATE TABLE "DBA"."attaques" (
    "id_attaques"                    int NOT NULL DEFAULT autoincrement,
   "id_pokemon"                     tinyint NULL,
   "nom_attaques"                   varchar(100) NULL,
   "degats"                         tinyint NULL,
   PRIMARY KEY ("id_attaques") 
)


CREATE TABLE "DBA"."utilisateurs" (
    "id_utilisateur"                 int NOT NULL DEFAULT autoincrement,
   "user_name"                      varchar(100) NULL,
   "mot_de_passe"                   varchar(32) NULL,
   "sexe"                           tinyint NULL,
   "language_prefere"               varchar(100) NULL,
   PRIMARY KEY ("id_utilisateur") 
)


CREATE TABLE "DBA"."score" (
    "id_score"                       int NOT NULL DEFAULT autoincrement,
   "id_utilisateur"                 int NULL,
   "victoire"                       int NULL,
   "defaite"                        int NULL,
   PRIMARY KEY ("id_score") 
)

ALTER TABLE "DBA"."attaques"
    ADD FOREIGN KEY "FK_pokemon" ("id_pokemon")
    REFERENCES "DBA"."pokemon" ("id_pokemon")
    


ALTER TABLE "DBA"."score"
    ADD FOREIGN KEY "FK_utilisateur" ("id_utilisateur")
    REFERENCES "DBA"."utilisateurs" ("id_utilisateur")
    

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
(1, 2, 3),
(2, 4, 2)

create service "root" type 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call dba.http_getPage(:url);


create procedure p_getPokemon (in pid tinyint)
BEGIN  
    select DBA.pokemon.nom_pokemon, DBA.pokemon.pv_totaux, DBA.pokemon.sexe_pokemon
        from pokemon
     where id_pokemon = pid
end;

CREATE SERVICE "getPokemon" TYPE 'JSON'
AUTHORIZATION OFF USER "DBA"
URL ON METHODS 'GET'
AS call p_getPokemon(:pid);

create procedure p_getAttaques(in pid tinyint, in atqid tinyint)
begin   
    select DBA.pokemon.nom_attaques, DBA.pokemon.degats
        from attaques
     where id_pokemon = pid 
end;

create service "getAttaques" 
Type 'JSON' 
authorization off 
user "dba" 
url on methods 'get' 
as call p_getAttaques(:pid)

CREATE PROCEDURE "DBA"."p_getUserInfo" (IN username VARCHAR(100), IN mdp VARCHAR(32))
BEGIN
    SELECT user_name, mot_de_passe
        FROM utilisateurs
    WHERE user_name = username AND mot_de_passe = mdp
END

CREATE SERVICE "getUserInfo" 
TYPE 'JSON' 
AUTHORIZATION OFF 
USER "DBA" 
METHODS 'GET' 
AS call p_getUserInfo(:username,:mdp);

CREATE PROCEDURE "DBA"."p_score"()
BEGIN
    select id_score, id_utilisateur, victoire, defaite
    from score

    order by victoire ASC
END

<<<<<<< Updated upstream
CREATE SERVICE "getScore" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call p_score();
=======
CREATE SERVICE "getScore" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call p_score();
>>>>>>> Stashed changes
