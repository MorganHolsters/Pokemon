CREATE PROCEDURE "DBA"."p_sendUserInfo"(IN username varchar(100), IN pass varchar(32), IN sex TINYINT, IN lang VARCHAR(100))
BEGIN
    insert into utilisateurs (user_name, mot_de_passe, sexe, language_prefere)
    VALUES 
    (username, pass, sex, lang)
END;
