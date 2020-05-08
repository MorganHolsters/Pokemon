CREATE PROCEDURE "DBA"."p_sendScores"(IN idUtilisateur VARCHAR (100) ,IN nbVictoire INTEGER , IN nbDefaite INTEGER)
BEGIN
    update score
    set 
        score.victoire = nbVictoire,
        score.defaite = nbDefaite
    where id_utilisateur = idUtilisateur;
END;
