const sql = require("msnodesqlv8");

const connectionString = "server=TIMI\\MSSQLSERVER01;Database=Medical;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0};Protocol=TCP;";
const query = "SELECT * FROM Vaccines";

sql.query(connectionString, query, (err, rows) => {
    console.log(rows);
});
