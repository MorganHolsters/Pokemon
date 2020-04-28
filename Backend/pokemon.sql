CREATE TABLE "DBA"."pokemon" (
    "id_pokemon"                     tinyint NOT NULL
   ,"nom_pokemon"                    varchar(100) NULL
   ,"pv_totaux"                      smallint NULL
   ,"sexe_pokemon"                   tinyint NULL
   ,PRIMARY KEY ("id_pokemon") 
)


CREATE TABLE "DBA"."attaques" (
    "id_attaques"                    int NOT NULL DEFAULT autoincrement
   ,"id_pokemon"                     tinyint NULL
   ,"nom_attaques"                   varchar(100) NULL
   ,"degats"                         tinyint NULL
   ,PRIMARY KEY ("id_attaques") 
)


CREATE TABLE "DBA"."utilisateurs" (
    "id_utilisateur"                 int NOT NULL DEFAULT autoincrement
   ,"user_name"                      varchar(100) NULL
   ,"mot_de_passe"                   varchar(32) NULL
   ,"sexe"                           tinyint NULL
   ,"language_prefere"               varchar(100) NULL
   ,PRIMARY KEY ("id_utilisateur") 
)


CREATE TABLE "DBA"."score" (
    "id_score"                       int NOT NULL DEFAULT autoincrement
   ,"id_utilisateur"                 int NULL
   ,"victoire"                       int NULL
   ,"defaite"                        int NULL
   ,PRIMARY KEY ("id_score") 
)





ALTER TABLE "DBA"."attaques"
    ADD FOREIGN KEY "FK_pokemon" ("id_pokemon")
    REFERENCES "DBA"."pokemon" ("id_pokemon")
    


ALTER TABLE "DBA"."score"
    ADD FOREIGN KEY "FK_utilisateur" ("id_utilisateur")
    REFERENCES "DBA"."utilisateurs" ("id_utilisateur")
    

inert into pokemon (id_pokemon, nom_pokemon, pv_totaux, sexe_pokemon) values
(1,'Florizare',900,0)
(2,'Dracaufeu',800,1)
(3,'Tortank',1000,0)
(4,'Pikachu',800,1)
(5,'Magicarpe',900,0)
(6,'Mew',1000,1)





insert into attaques (id_pokemon, nom_attaques, degats)
(1,'Charge',50)
(1,'Tranch''herbe',80)
(1,'Damoclès',120)
(1,'Lance-Soleil',200)
(2,'Cru-Aile',60)
(2,'Flammèche',90)
(2,'Crocs Feu',140)
(2,'Boutefeu',230)
(3,'Charge',40)
(3,'Pistolet à O',70)
(3,'Vibraqua',100)
(3,'Hydrocanon',1704,'Éclair',60)
(4,'Boule Élek',90)
(4,'Tonnerre',140)
(4,'Fatal-foudre',230)
(5,'Trempette',0)
(5,'Trempette',0)
(5,'Trempette',0)
(5,'Trempette',0)
(6,'Écras''Face',40)
(6,'Psyko',60)
(6,'Pouvoir Antique',100)
(6,'Aurasphère',170)
