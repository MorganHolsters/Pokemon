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
	"victoire" INTEGER NOT NULL DEFAULT 0,
	"defaite" INTEGER NOT NULL DEFAULT 0,
	PRIMARY KEY ( "id_score" ASC )
) IN "system";

CREATE TABLE "DBA"."utilisateurs" (
	"id_utilisateur" INTEGER NOT NULL DEFAULT AUTOINCREMENT,
    "id_score" INTEGER,
	"user_name" VARCHAR(100) NULL,
	"mot_de_passe" VARCHAR(32) NULL,
	"sexe" TINYINT NULL,
	"language_prefere" VARCHAR(100) NULL,
	PRIMARY KEY ( "id_utilisateur" ASC ),
    CONSTRAINT "FK_score" FOREIGN KEY ( "id_score" ASC ) REFERENCES "DBA"."score" ( "id_score" )
) IN "system";
