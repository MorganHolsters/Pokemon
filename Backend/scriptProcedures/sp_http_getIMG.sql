CREATE PROCEDURE "DBA"."http_getIMG"(in url char(255))
// renvoie le contenu de l image
BEGIN
  call sa_set_http_header('Content-Type', 'image/png'); 
    Call sa_set_http_header('Access-Control-Allow-Origin', '*'); 
    select xp_read_file(dba.getPath() || 'img\' || url);  
END;
