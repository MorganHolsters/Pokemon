CREATE SERVICE "getAllUsers" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" METHODS 'GET' AS call s_getAllUsers();
