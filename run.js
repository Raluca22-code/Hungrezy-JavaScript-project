var api = require('./api.js').app;
const sql = require("msnodesqlv8");

api.put('/message', function(request, response) {
    const query = 'SELECT * FROM Vaccines';
    const connectionString = 'server=TIMI\\MSSQLSERVER01;Database=Medical;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0};Protocol=TCP;';

    sql.query(connectionString, query, function(error, rows) {
      if (error) {
        console.error(error);
        response.status(500).send('Internal server error');
      } else {
        response.json(rows);
      }
    });
});

api.listen(3000, function(){
  console.log('CORS-enabled web server is listening on port 3000...');
});
