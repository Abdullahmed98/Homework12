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

function showDepartmentsTable() {
    connection.query("SELECT * FROM departments", function(err, res) {
        if (err) throw err;
        console.table(res);
    })
};

function showEmployeesTable() {
    connection.query("SELECT * FROM employees", function(err, res) {
        if (err) throw err;
        console.table(res);
    })
};

function showRolesTable() {
    connection.query("SELECT * FROM roles", function(err, res){
        if (err) throw err;
        console.table(res);
    })
}

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
                var queryString = "INSERT INTO departments (dep_name) VALUES (?);";
                var value = answers.addDepartment;
                connection.query(queryString, [value], function (err, res) {
                    if (err) throw err;
                    console.log("Table updated! Here is the changes you made!");
                    showDepartmentsTable();
                })
            })
        } else if (answers.initialUserPrompt === "Add an employee?") {
            inquirer.prompt([
                {
                type: "input",
                message: "What is the employees first name: ",
                name: "addFirstName"
                },
                {
                    type: "input",
                    message: "What is the employees second name: ",
                    name: "addLastName"
                },
                {
                    type: "list",
                    message: "What is the employees role? :",
                    name: "addEmpRole",
                    choices: [
                        "Production Lead",
                        "Production Junior",
                        "Research Lead",
                        "Research Junior",
                        "Marketing Lead",
                        "Marketing Junior",
                        "Human Resource lead",
                        "Human Resource Junior",
                        "Finane Lead",
                        "Finane Junior"
                    ]

                }
            ]).then(function (answers) {
              if  (answers.choices === "Production Lead") {
                var queryString = "INSERT INTO employees (first_name, last_name, role_id) VALUES (?, ?, ?)";
                var value = 6;
                var fName = answers.addFirstName;
                var lName = answers.addLastName;
                connection.query(queryString, [fName, lName, value], function (err, res) {
                    if (err) throw err;
                    console.log("Employee added!");
                    console.log("");
                    console.log("Here is the updated table!");
                    showEmployeesTable();
                })
              } else if (answers.choices === "Production Junior") {
                var queryString = "INSERT INTO employees (first_name, last_name, role_id) VALUES (?, ?, ?)";
                var value = "2";
                var fName = answers.addFirstName;
                var lName = answers.addLastName;
                connection.query(queryString, [fName, lName, value], function (err, res) {
                    if (err) throw err;
                    console.log("Employee added!");
                    console.log("");
                    console.log("Here is the updated table!");
                    showEmployeesTable();
                })
              } else if (answers.choices === "Research Lead") {
                var queryString = "INSERT INTO employees (first_name, last_name, role_id) VALUES (?, ?, ?)";
                var value = "3";
                var fName = answers.addFirstName;
                var lName = answers.addLastName;
                connection.query(queryString, [fName, lName, value], function (err, res) {
                    if (err) throw err;
                    console.log("Employee added!");
                    console.log("");
                    console.log("Here is the updated table!");
                    showEmployeesTable();
                })
              } else if (answers.choices === "Research Junior") {
                var queryString = "INSERT INTO employees (first_name, last_name, role_id) VALUES (?, ?, ?)";
                var value = "4";
                var fName = answers.addFirstName;
                var lName = answers.addLastName;
                connection.query(queryString, [fName, lName, value], function (err, res) {
                    if (err) throw err;
                    console.log("Employee added!");
                    console.log("");
                    console.log("Here is the updated table!");
                    showEmployeesTable();
                })
              } else if (answers.choices === "Marketing Lead") {
                var queryString = "INSERT INTO employees (first_name, last_name, role_id) VALUES (?, ?, ?)";
                var value = "5";
                var fName = answers.addFirstName;
                var lName = answers.addLastName;
                connection.query(queryString, [fName, lName, value], function (err, res) {
                    if (err) throw err;
                    console.log("Employee added!");
                    console.log("");
                    console.log("Here is the updated table!");
                    showEmployeesTable();
                })
              } else if (answers.choices === "Marketing Junior") {
                var queryString = "INSERT INTO employees (first_name, last_name, role_id) VALUES (?, ?, ?)";
                var value = "6";
                var fName = answers.addFirstName;
                var lName = answers.addLastName;
                connection.query(queryString, [fName, lName, value], function (err, res) {
                    if (err) throw err;
                    console.log("Employee added!");
                    console.log("");
                    console.log("Here is the updated table!");
                    showEmployeesTable();
                })
              } else if (answers.choices === "Human Resource Lead") {
                var queryString = "INSERT INTO employees (first_name, last_name, role_id) VALUES (?, ?, ?)";
                var value = "7";
                var fName = answers.addFirstName;
                var lName = answers.addLastName;
                connection.query(queryString, [fName, lName, value], function (err, res) {
                    if (err) throw err;
                    console.log("Employee added!");
                    console.log("");
                    console.log("Here is the updated table!");
                    showEmployeesTable();
                })
              } else if (answers.choices === "Human Resource Junior") {
                var queryString = "INSERT INTO employees (first_name, last_name, role_id) VALUES (?, ?, ?)";
                var value = "8";
                var fName = answers.addFirstName;
                var lName = answers.addLastName;
                connection.query(queryString, [fName, lName, value], function (err, res) {
                    if (err) throw err;
                    console.log("Employee added!");
                    console.log("");
                    console.log("Here is the updated table!");
                    showEmployeesTable();
                })
              } else if (answers.choices === "Finance Lead") {
                var queryString = "INSERT INTO employees (first_name, last_name, role_id) VALUES (?, ?, ?)";
                var value = "9";
                var fName = answers.addFirstName;
                var lName = answers.addLastName;
                connection.query(queryString, [fName, lName, value], function (err, res) {
                    if (err) throw err;
                    console.log("Employee added!");
                    console.log("");
                    console.log("Here is the updated table!");
                    showEmployeesTable();
                })
            //   } else if (answers.choices === "Finance Junior"); {
            //     var queryString = "INSERT INTO employees (first_name, last_name, role_id) VALUES (?, ?, ?)";
            //     var value = "10";
            //     var fName = answers.addFirstName;
            //     var lName = answers.addLastName;
            //     connection.query(queryString, [fName, lName, value], function (err, res) {
            //         if (err) throw err;
            //         console.log("Employee added!");
            //         console.log("");
            //         console.log("Here is the updated table!");
            //         showEmployeesTable();
            //     })
              }
            })
        // } else if (answers.initialUserPrompt === "Add a role?"); {
        //     inquirer.prompt([
        //         {
        //             type: "input",
        //             message: "What is the title of the role?: ",
        //             name: "addTitle"
        //         },
        //         {
        //             type: "input",
        //             message: "What is the salary for this role?: ",
        //             name: "addSalary"
        //         },
        //         {
        //             type: "list",
        //             message: "Which department fits this role the best? :",
        //             name: "addDepRole",
        //             choices: [
        //                 "Production",
        //                 "Research",
        //                 "Marketing",
        //                 "Human Resource",
        //                 "Finance"
        //             ]
        //         }
        //     ]).then (function(answers) {
        //         if (answers.choices === "Production") {
        //             console.log("I AM THE RESPONSE");
        //             var queryString = "INSERT INTO roles (title, salary, dep_id) VALUES (?, ?, ?)";
        //             var value = "1";
        //             var title = answers.addTitle;
        //             var salary = answers.addSalary;
        //             connection.query(queryString, [title, salary, value], function (err, res) {
        //                 if (err) throw err;
        //                 console.log("Role added!");
        //                 console.log("");
        //                 console.log("Here is the updated table!");
        //                 console.log("")
        //                 console.table(showRolesTable);
        //             })
        //         }
        //     });
        };
    })

