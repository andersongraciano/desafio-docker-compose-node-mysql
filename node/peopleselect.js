var mysql = require('mysql');
const util = require('util');

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};


const getPeoples = (callback) => {
    var con = mysql.createConnection(config)

    con.connect(function(err) {
        if (err) throw err;
        await con.query("SELECT name FROM people", function (err, rows) {
            if (err) throw err;
            callback(con, rows);
        });
    });
  };
  
exports.getPeoples = getPeoples;
