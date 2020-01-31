CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT,
    dep_name varchar(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE employees (
    Emp_id INT NOT NULL AUTO_INCREMENT,
    first_name varchar(30),
    last_name varchar(30),
    PRIMARY KEY(Emp_id)
);

CREATE TABLE roles (
    role_id INT NOT NULL AUTO_INCREMENT,
    title varchar(30),
    salary decimal,
    PRIMARY KEY(role_id)
);

INSERT INTO departments VALUES(1,'Production'),(2,"Research"),(3,"Marketing"),(4,"Human Resource"),(5,"Finane");

INSERT INTO roles VALUES(1, "Production Lead", 100000),(2, "Production Junior", 50000),(3,"Research Lead",80000),(4,"Research Junior",40000),(5,"Marketing Lead", 110000),(6,"Marketing Junior", 65000),(7,"Human Resource Lead", 75000),(8,"Human Resource Junior",37750),(9,"Finance Lead", 90000),(10,"Finance Junior",45000);

INSERT INTO employees VALUES(1,"Carol","Hammond"),(2,"Antoinette", "Tate"),(3,"Priscilla","Moran"),(4,"Seth","Weber"),(5,"Ida","Reeves"),(6,"Kent","Warren"),(7,"Tracy","Black"),(8,"Keith","Warren"),(9,"William","James"),(10,"Al","Rose"),(11,"Frances","Lopez"),(12,"Joyce", "Wilson"),(13,"Norma","Morgan"),(14,"Jean","Brooks"),(15,"Sarah","Johnson"),(16,"Alice","Stewart"),(17,"Alan Lewis"),(18,"Pamela","Reed"),(19,"Craig","Wright"),(20,"Larry","Howard");