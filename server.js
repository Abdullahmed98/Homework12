var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "employee_tracker_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    queryshowtable();
});

function queryshowtable() {
    connection.query("SELECT employees.emp_id, employees.first_name, employees.last_name, roles.title, departments.dep_name, roles.salary FROM employees, roles, departments", function(err, res) {
        for (var i = 0; i < res.length; i++) {
           console.log([res[i].employees.emp_id, res[i].employees.first_name, res[i].employees.last_name, res[i].roles.title, res[i].departments.dep_name, res[i].roles.salary]) 
        }
    });

}



