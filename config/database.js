const mysql = require('mysql2');

const pool = mysql.createPool({

    host:"",
    user:"",
    password:"",
    database:"",
    connectionLimit: 50,
    waitingForConnection: true,
    debug:false,
});

pool.id = ""