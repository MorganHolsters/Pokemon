CREATE PROCEDURE "DBA"."http_getPage"(in url char(255))
// renvoie le contenu de la page html 
BEGIN
--
    call sa_set_http_header('Content-Type', 'text/html; charset=utf-8'); 
    Call sa_set_http_header('Access-Control-Allow-Origin', '*'); 
    select xp_read_file(dba.getPath() || url || '.html'); 
-- 
END;
