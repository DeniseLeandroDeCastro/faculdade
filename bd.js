var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ifrn@992',
    database: 'bdFaculdade'
});

module.exports = con;