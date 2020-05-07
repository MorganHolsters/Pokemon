CREATE PROCEDURE "DBA"."s_getAllUsers"()
BEGIN
    SELECT user_name 
        FROM utilisateurs 
END;
