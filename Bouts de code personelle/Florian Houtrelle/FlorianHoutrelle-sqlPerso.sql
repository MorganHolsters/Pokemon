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


CREATE PROCEDURE "DBA"."p_getPokemon" ()
BEGIN  
    select DBA.pokemon.nom_pokemon, DBA.pokemon.pv_totaux, DBA.pokemon.sexe_pokemon
        from pokemon
end;

CREATE SERVICE "getPokemon" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call p_getPokemon();


