CREATE PROCEDURE "DBA"."http_getCSS"(in url char(255))
// renvoie le contenu de la feuille de style et param url
BEGIN
-- 
  call sa_set_http_header('Content-Type', 'text/css'); 
    Call sa_set_http_header('Access-Control-Allow-Origin', '*'); 
    select xp_read_file(dba.getPath() || 'css\' || url); 
--
END;
