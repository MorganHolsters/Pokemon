CREATE PROCEDURE "DBA"."p_getUserInfo" (IN username VARCHAR(100), IN mdp VARCHAR(32))
BEGIN
    SELECT user_name, mot_de_passe
        FROM utilisateurs
    WHERE user_name = username AND mot_de_passe = mdp
END;
