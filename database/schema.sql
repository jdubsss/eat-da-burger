-- Drops the burger if it exists currently --
DROP DATABASE IF EXISTS burgers_db;
-- Creates the "burger" database --
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	id INT NOT NULL auto_increment,
    burger_name VARCHAR(150) NOT NULL,
    devoured bool DEFAULT FALSE,
    date TIMESTAMP,
    PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured)
VALUES ('Cheeseburger', FALSE);

INSERT INTO burgers (burger_name, devoured)
VALUES ('Hamburger', TRUE);

INSERT INTO burgers (burger_name, devoured)
VALUES ('Bacon Cheeseburger', FALSE);

INSERT INTO burgers (burger_name, devoured)
VALUES ('Vegan Burger', FALSE);

INSERT INTO burgers (burger_name, devoured)
VALUES ('Lettuce Wrap Burger', FALSE);