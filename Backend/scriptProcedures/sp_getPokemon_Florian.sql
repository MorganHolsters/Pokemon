CREATE PROCEDURE "DBA"."p_getPokemon" ()
BEGIN  
    select DBA.pokemon.nom_pokemon, DBA.pokemon.pv_totaux, DBA.pokemon.sexe_pokemon
        from pokemon
end;
