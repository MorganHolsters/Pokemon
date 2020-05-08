CREATE PROCEDURE "DBA"."s_getAllUsers"()
BEGIN
    SELECT user_name, id_utilisateur
        FROM utilisateurs 
END
