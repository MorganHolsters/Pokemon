CREATE SERVICE "getUserInfo" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" METHODS 'GET' AS call p_getUserInfo(:username,:mdp);
