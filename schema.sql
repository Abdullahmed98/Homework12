CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

CREATE TABLE departments (
    dep_id INT NOT NULL AUTO_INCREMENT,
    dep_name varchar(30) NOT NULL,
    PRIMARY KEY (dep_id)
);

CREATE TABLE employees (
    emp_id INT NOT NULL AUTO_INCREMENT,
    role_id INT,
    first_name varchar(30),
    last_name varchar(30),
    PRIMARY KEY (emp_id),
    FOREIGN KEY (role_id) REFERENCES roles(role_id)
);

CREATE TABLE roles (
    role_id INT NOT NULL AUTO_INCREMENT,
    dep_id INT,
    title varchar(30),
    salary decimal,
    PRIMARY KEY (role_id),
    FOREIGN KEY (dep_id) REFERENCES departments(dep_id)
);

INSERT INTO departments VALUES(1,'Production'),(2,"Research"),(3,"Marketing"),(4,"Human Resource"),(5,"Finane");

INSERT INTO roles VALUES(1,1, "Production Lead", 100000),(2,2, "Production Junior", 50000),(3,3,"Research Lead",80000),(4,4,"Research Junior",40000),(5,5,"Marketing Lead", 110000),(6,6,"Marketing Junior", 65000),(7,7,"Human Resource Lead", 75000),(8,8,"Human Resource Junior",37750),(9,9,"Finance Lead", 90000),(10,10,"Finance Junior",45000);

INSERT INTO employees VALUES(1,1,"Carol","Hammond"),(2,2,"Antoinette", "Tate"),(3,3,"Priscilla","Moran"),(4,4,"Seth","Weber"),(5,5,"Ida","Reeves"),(6,6,"Kent","Warren"),(7,7,"Tracy","Black"),(8,8,"Keith","Warren"),(9,9,"William","James"),(10,10,"Al","Rose");