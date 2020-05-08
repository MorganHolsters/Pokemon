Create PROCEDURE "DBA"."p_getAttaques"(in pid tinyint)
begin   
    select DBA.attaques.id_pokemon, DBA.attaques.nom_attaques, DBA.attaques.degats 
        from attaques
        
     where id_pokemon = pid 
end


CREATE SERVICE "getAttaques" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call p_getAttaques(:pid);


