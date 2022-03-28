var mysql = require('mysql');

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};


const setPeople = () => {
    var con = mysql.createConnection(config)
    con.query(`INSERT INTO people(name) values('Anderson Graciano')`)
    con.end()
}

exports.setPeople = setPeople;

