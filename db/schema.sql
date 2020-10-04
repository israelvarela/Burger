DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	id int PRIMARY KEY AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
    devoured BOOLEAN 
);

