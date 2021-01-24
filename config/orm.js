const connection = require("../config/connection.js");

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    };
    return arr.toString();
};

function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)) {

            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        };
    };

    return arr.toString();
};

let orm = {
    selectAll: function (tableName, cb) {

        let SQL_STATEMENT = `SELECT * FROM ${tableName}`;

        connection.query(SQL_STATEMENT, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    insertOne: function (tableName, columnNames, vals, cb) {
        let SQL_STATEMENT = `INSERT INTO ${tableName} (${columnNames.toString()})
                            VALUES (${printQuestionMarks(vals.length)})`;

        console.log(SQL_STATEMENT);

        connection.query(SQL_STATEMENT, vals, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });

    },

    updateOne: function (tableName, objColVals, condition, cb) {
        let SQL_STATEMENT = `UPDATE ${tableName}
                            SET ${objToSql(objColVals)}
                            WHERE ${condition}`;

        console.log(SQL_STATEMENT);
        connection.query(SQL_STATEMENT, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;