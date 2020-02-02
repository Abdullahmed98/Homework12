var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "employee_tracker_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    console.log("Welcome to the employee tracker!");
    console.log("");
    console.log("Here is the full list of the employees in our database");
    console.log("");
    showFull();
    promptUser();
});

function showFull() {
    connection.query("SELECT employees.id, employees.first_name, employees.last_name, roles.title, roles.salary, departments.dep_name FROM employees JOIN roles ON employees.role_id = roles.id JOIN departments ON roles.dep_id = departments.id", function (err, res) {
        if (err) throw err;
        console.table(res);
    });

};

function promptUser() {
    return inquirer.prompt(
        {
            type: "list",
            message: "What would you like to do?:",
            name: "initialUserPrompt",
            choices: [
                "Add a department?",
                "Add an employee?",
                "Add a role?"
            ]
        }
    )
}

promptUser()
    .then(function (answers) {
        if (answers.initialUserPrompt === "Add a department?") {
            inquirer.prompt({
                type: "input",
                message: "Department name: ",
                name: "addDepartment"
            }).then(function (answers) {
                connection.query("INSERT INTO departments(dep_name) VALUES(" + answers.addDepartment + ")", function (err, res) {
                    if (err) throw err;
                    console.log("Table updated! Here is the changes you made!");
                    console.table(res);
                })
            })
        }
    })
