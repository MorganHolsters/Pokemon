CREATE SERVICE "addScore" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" METHODS 'GET' AS call p_addScore(:id_utilisateur,:victoire,:defaite);

CREATE SERVICE "sendScores" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" METHODS 'GET' AS call p_sendScores(:id_Utilisateur,:victoire,:defaite);

//----------------------------

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


CREATE PROCEDURE "DBA"."p_score"()
BEGIN
    select score.id_score, utilisateurs.user_name, score.victoire, score.defaite
    from score 
    JOIN utilisateurs on score.id_utilisateur = utilisateurs.id_utilisateur

    order by victoire DESC, defaite ASC
END;


CREATE PROCEDURE "DBA"."p_sendScores"(IN idUtilisateur VARCHAR (100) ,IN nbVictoire INTEGER , IN nbDefaite INTEGER)
BEGIN
    update score
    set 
        score.victoire = nbVictoire,
        score.defaite = nbDefaite
    where id_utilisateur = idUtilisateur;
END;
