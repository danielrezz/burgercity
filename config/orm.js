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
    selectAll: async function (tableName) {
        let SQL_STATEMENT = `SELECT * FROM ${tableName}`;

        try {
            const [rows, fields] = await connection.promise().query(SQL_STATEMENT, tableName);
            return rows;
        } catch (error) {
            console.log(error);
        }
    },

    insertOne: async function (tableName, columnNames, vals) {
        let SQL_STATEMENT = `INSERT INTO ${tableName} (${columnNames.toString()})
                            VALUES (${printQuestionMarks(vals.length)})`;

        try {
            const [rows, fields] = await connection.promise().query(SQL_STATEMENT, [tableName, columnNames, vals]);
            return rows;
        } catch (error) {
            console.log(error);
        }

    },

    updateOne: async function (tableName, objColVals, condition) {
        let SQL_STATEMENT = `UPDATE ${tableName}
                            SET ${objToSql(objColVals)}
                            WHERE ${condition}`;

        try {
            const [rows, fields] = await connection.promise().query(SQL_STATEMENT, [tableName, objColVals, condition]);
            return rows;
        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = orm;