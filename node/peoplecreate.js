var mysql = require("mysql");

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};

const createTable = () => {
    var con = mysql.createConnection(config)
    connection.query('CREATE TABLE IF NOT EXISTS people (id int not null auto_increment, name VARCHAR(255), primary key(id))')
    con.end()
}

exports.createTable = createTable;