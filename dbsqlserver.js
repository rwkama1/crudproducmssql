const sql = require('mssql');
const Producto = require('./product')
const config = {
    user: 'rwkama60_SQLLogin_1',
    password:'7ch5noj95a',
    database: 'BDProductMSSQL',
    server: 'BDProductMSSQL.mssql.somee.com',
    port: 1433,
    options: {
            trustedConnection: false,
            enableArithAbort: true,
            encrypt: false
        }
    
}

const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('Connected to MSSQL')
        return pool
    })
    .catch(err => console.log('Database Connection Failed! Bad Config: ', err))

module.exports = { sql,poolPromise };

