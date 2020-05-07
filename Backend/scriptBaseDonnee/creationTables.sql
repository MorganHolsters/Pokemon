CREATE TABLE "DBA"."attaques" (
	"id_attaques" INTEGER NOT NULL DEFAULT AUTOINCREMENT,
	"id_pokemon" TINYINT NULL,
	"nom_attaques" VARCHAR(100) NULL,
	"degats" TINYINT NULL,
	PRIMARY KEY ( "id_attaques" ASC ),
	CONSTRAINT "FK_pokemon" FOREIGN KEY ( "id_pokemon" ASC ) REFERENCES "DBA"."pokemon" ( "id_pokemon" )

) IN "system";
CREATE TABLE "DBA"."pokemon" (
	"id_pokemon" TINYINT NOT NULL,
	"nom_pokemon" VARCHAR(100) NULL,
	"pv_totaux" SMALLINT NULL,
	"sexe_pokemon" TINYINT NULL,
	PRIMARY KEY ( "id_pokemon" ASC )
) IN "system";
CREATE TABLE "DBA"."score" (
	"id_score" INTEGER NOT NULL DEFAULT AUTOINCREMENT,
	"id_utilisateur" INTEGER NULL,
	"victoire" INTEGER NULL,
	"defaite" INTEGER NULL,
	PRIMARY KEY ( "id_score" ASC ),
	CONSTRAINT "FK_utilisateur" FOREIGN KEY ( "id_utilisateur" ASC ) REFERENCES "DBA"."utilisateurs" ( "id_utilisateur" )

) IN "system";

CREATE TABLE "DBA"."utilisateurs" (
	"id_utilisateur" INTEGER NOT NULL DEFAULT AUTOINCREMENT,
	"user_name" VARCHAR(100) NULL,
	"mot_de_passe" VARCHAR(32) NULL,
	"sexe" TINYINT NULL,
	"language_prefere" VARCHAR(100) NULL,
	PRIMARY KEY ( "id_utilisateur" ASC )
) IN "system";
