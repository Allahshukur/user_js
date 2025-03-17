// importing mysql module
const mysql = require('mysql2');
const config = require("../config.js");

// configurations for creating mysql db
const connection = mysql.createConnection(config.db);

// executing db
connection.connect(function (err) {

    if (err) {
        console.log("error occurred while connecting");
    } else {
        console.log("db created with mysql successfully");
    }
});

module.exports = connection.promise();