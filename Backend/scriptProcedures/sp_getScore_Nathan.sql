CREATE PROCEDURE "DBA"."p_score"()
BEGIN
    select score.id_score, utilisateurs.user_name, score.victoire, score.defaite
    from score 
    JOIN utilisateurs on score.id_utilisateur = utilisateurs.id_utilisateur

    order by victoire DESC
END;
