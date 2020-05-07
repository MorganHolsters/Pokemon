CREATE PROCEDURE "DBA"."p_getAttaques"(in pid tinyint, in atqid tinyint)
begin   
    select DBA.pokemon.nom_attaques, DBA.pokemon.degats
        from attaques
     where id_pokemon = pid 
end