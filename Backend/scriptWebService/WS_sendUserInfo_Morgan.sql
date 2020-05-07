CREATE SERVICE "sendUserInfo" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" METHODS 'GET' AS call p_sendUserInfo(:username,:mdp,:sexe,:lang);
