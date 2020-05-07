CREATE FUNCTION "DBA"."fun_checkUsername"(IN username VARCHAR(100))
RETURNS TINYINT 
BEGIN
    IF EXISTS (SELECT user_name FROM utilisateurs WHERE user_name LIKE username)
        THEN RETURN 1;
    ELSE
        RETURN   0;
ENDIF 
END


CREATE SERVICE "css" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call dba.http_getCSS(:url);

CREATE PROCEDURE "DBA"."http_getCSS"(in url char(255))
BEGIN
  call sa_set_http_header('Content-Type', 'text/css'); 
    Call sa_set_http_header('Access-Control-Allow-Origin', '*'); 
    select xp_read_file(dba.getPath() || 'css\' || url); 
END;



CREATE SERVICE "img" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call dba.http_getIMG(:url);

ALTER PROCEDURE "DBA"."http_getIMG"(in url char(255))
BEGIN
  call sa_set_http_header('Content-Type', 'image/png'); 
    Call sa_set_http_header('Access-Control-Allow-Origin', '*'); 
    select xp_read_file(dba.getPath() || 'img\' || url); 
END


CREATE SERVICE "js" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call dba.http_getJS(:url);

CREATE PROCEDURE "DBA"."http_getJS"(in url char(255))
BEGIN
  call sa_set_http_header('Content-Type', 'application/javascript'); 
    Call sa_set_http_header('Access-Control-Allow-Origin', '*'); 
    select xp_read_file(dba.getPath() || 'js\' || url); 
END;



CREATE SERVICE "page" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call dba.http_getPage(:url);
CREATE SERVICE "root" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call dba.http_getPage(:url);

CREATE PROCEDURE "DBA"."http_getPage"(in url char(255))
BEGIN
    call sa_set_http_header('Content-Type', 'text/html; charset=utf-8'); 
    Call sa_set_http_header('Access-Control-Allow-Origin', '*'); 
    select xp_read_file(dba.getPath() || url || '.html'); 
END;



CREATE SERVICE "getAllUsers" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" METHODS 'GET' AS call s_getAllUsers();
CREATE PROCEDURE "DBA"."s_getAllUsers"()
BEGIN
    SELECT user_name
        FROM utilisateurs 
END



CREATE SERVICE "getUserInfo" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" METHODS 'GET' AS call p_getUserInfo(:username,:mdp);
CREATE PROCEDURE "DBA"."p_getUserInfo" (IN username VARCHAR(100), IN mdp VARCHAR(32))
BEGIN
    SELECT user_name, mot_de_passe
        FROM utilisateurs
    WHERE user_name = username AND mot_de_passe = mdp
END



CREATE SERVICE "sendUserInfo" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" METHODS 'GET' AS call p_sendUserInfo(:username,:mdp,:sexe,:lang);
CREATE PROCEDURE "DBA"."p_sendUserInfo"(IN username varchar(100), IN pass varchar(32), IN sex TINYINT, IN lang VARCHAR(100))
BEGIN
    insert into utilisateurs (user_name, mot_de_passe, sexe, language_prefere)
    VALUES 
    (username, pass, sex, lang)
END





