let mysql = require("mysql");

let connection = mysql.createConnection({

    host: "localhost",
    port: 3306,
    user: "root",
    password: "drum1007",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadID);
});

module.exports = connection;