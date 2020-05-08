CREATE FUNCTION "DBA"."fun_checkUsername"(IN username VARCHAR(100))
RETURNS TINYINT 
BEGIN
    IF EXISTS (SELECT user_name FROM utilisateurs WHERE user_name LIKE username)
        THEN RETURN 1;
    ELSE
        RETURN   0;
ENDIF 
END
