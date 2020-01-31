var mysql = require("mysql");
var inquirer = require("inquirer");
var table = require("cli-table2");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "employee_tracker_db"
});
connection.connect();

var display = function() {
    connection.query("SELECT * FROM products")
};