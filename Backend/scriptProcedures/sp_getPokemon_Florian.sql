CREATE PROCEDURE "DBA"."p_getPokemon" (in pid tinyint)
BEGIN  
    select DBA.pokemon.nom_pokemon, DBA.pokemon.pv_totaux, DBA.pokemon.sexe_pokemon
        from pokemon
     where id_pokemon = pid
end;
