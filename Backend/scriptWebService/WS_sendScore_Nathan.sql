CREATE SERVICE "sendScores" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" METHODS 'GET' AS call p_sendScores(:id_Utilisateur,:victoire,:defaite);
