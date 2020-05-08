CREATE PROCEDURE "DBA"."http_getJS"(in url char(255))
// renvoie le contenu du script js 
BEGIN
  call sa_set_http_header('Content-Type', 'application/javascript'); 
    Call sa_set_http_header('Access-Control-Allow-Origin', '*'); 
    select xp_read_file(dba.getPath() || 'js\' || url);           
END;
