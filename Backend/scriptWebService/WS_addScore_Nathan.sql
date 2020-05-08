CREATE SERVICE "addScore" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" METHODS 'GET' AS call p_addScore(:id_utilisateur,:victoire,:defaite);
