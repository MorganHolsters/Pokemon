CREATE PROCEDURE "DBA"."p_addScore"(IN idUtilisateur INTEGER  ,IN nbVictoire INTEGER , IN nbDefaite INTEGER)
BEGIN
    insert into score (id_utilisateur, victoire, defaite)
    VALUES 
    (idUtilisateur, nbVictoire, nbDefaite)
END;
