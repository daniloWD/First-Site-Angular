var oracledb = require('oracledb');

oracledb.getConnection(
    {
      user          : "useruser",
      password      : "senha",
      connectString : "localhost/orcl"
    },
    function(err, connection) {
      if (err) {
        console.error(err.message);
        return;
      }
      connection.execute(
        `SELECT STRRAZAOSOCIAL  
        FROM PROCONBASE
        WHERE WHERE STRRAZAOSOCIAL LIKE :nome`,
        ['%BRA%'],  // bind value for :id
        function(err, result) {
          if (err) {
            console.error(err.message);
            doRelease(connection);
            return;
          }
          console.log(result.rows);
          doRelease(connection);
        });
    });
  
  function doRelease(connection) {
    connection.close(
      function(err) {
        if (err)
          console.error(err.message);
      });
  }