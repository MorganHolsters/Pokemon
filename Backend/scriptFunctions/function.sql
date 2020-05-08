  
CREATE FUNCTION "DBA"."fun_checkUsername"(IN username VARCHAR(100))
RETURNS TINYINT 
BEGIN
    IF EXISTS (SELECT user_name FROM utilisateurs WHERE user_name LIKE username)
        THEN RETURN 1;
    ELSE
        RETURN   0;
ENDIF 
END

CREATE FUNCTION "DBA"."getPath"()
// renvoi le path de la DB
returns long varchar
deterministic
BEGIN
 declare dbPath long varchar; 
 declare dbName long varchar; 
 set dbPath = (select db_property ('file'));    
 set dbName = (select db_property('name')) + '.db'; 
 set dbPath = left(dbPath, length(dbPath)-length(dbName)); 
 return dbPath;
END;
  
