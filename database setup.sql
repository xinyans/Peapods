-- Make sure you have an approrpriate virtual host configured so the php works
-- properly.

-- run the following code in your phpmyadmin to setup the database
-- you can use the register function to create your own login information
-- make sure to change the database login information when you pull

DROP DATABASE IF EXISTS peapods;
CREATE DATABASE peapods;
USE peapods;
CREATE TABLE userdata(
	lastName varchar(255) NOT NULL,
    firstName varchar(255) NOT NULL,
    username varchar(255) NOT NULL UNIQUE,
    password varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    PRIMARY KEY(username)
);
USE peapods;
CREATE TABLE forms(
    code varchar(6) NOT NULL,
    creator varchar(255) NOT NULL,
    formjson MEDIUMTEXT NOT NULL,
    groupjson MEDIUMTEXT,
    fillform int DEFAULT '1',
    PRIMARY KEY(code),
    FOREIGN KEY(creator) REFERENCES userdata(username)
);
USE peapods;
CREATE TABLE formdata(
    id int NOT NULL AUTO_INCREMENT,
    code varchar(6) NOT NULL,
    responsejson MEDIUMTEXT NOT NULL,
    fillform int DEFAULT '1',
    PRIMARY KEY(id),
    FOREIGN KEY(code) REFERENCES forms(code)
);
USE peapods;
CREATE TABLE logins(
    loginCookie varchar(35) NOT NULL,
    username varchar(255) NOT NULL,
    CONSTRAINT row_unique UNIQUE (username, loginCookie)
);
USE peapods;
INSERT INTO userdata (lastname, firstname, username, password, email) VALUES ('ADMIN', 'ISTRATOR', 'Administrator', 'pass', 'a@a.com');
USE peapods;
INSERT INTO forms (code, creator, formjson,groupjson) VALUES ('abcdef','Administrator','', '{"formTitle":"Websys Groups","groups":[{"members":[{"name":"Nick Meyer","contact":"meyern4@rpi.edu"},{"name":"Jolee McCluskey","contact":"mcclusk@rpi.edu"},{"name":"Xinyuan Sun","contact":"sunxi5@rpi.edu"},{"name":"Sam Schants","contact":"schants@rpi.edu"},{"name":"Peter Gramenides","contact":"gramenp@rpi.edu"}]},{"members":[{"name":"Nick Meyer","contact":"meyern4@rpi.edu"},{"name":"Jolee McCluskey","contact":"mcclusk@rpi.edu"},{"name":"Xinyuan Sun","contact":"sunxi5@rpi.edu"},{"name":"Sam Schants","contact":"schants@rpi.edu"},{"name":"Peter Gramenides","contact":"gramenp@rpi.edu"}]},{"members":[{"name":"Nick Meyer","contact":"meyern4@rpi.edu"},{"name":"Jolee McCluskey","contact":"mcclusk@rpi.edu"},{"name":"Xinyuan Sun","contact":"sunxi5@rpi.edu"},{"name":"Sam Schants","contact":"schants@rpi.edu"},{"name":"Peter Gramenides","contact":"gramenp@rpi.edu"}]},{"members":[{"name":"Nick Meyer","contact":"meyern4@rpi.edu"},{"name":"Jolee McCluskey","contact":"mcclusk@rpi.edu"},{"name":"Xinyuan Sun","contact":"sunxi5@rpi.edu"},{"name":"Sam Schants","contact":"schants@rpi.edu"}]},{"members":[{"name":"Nick Meyer","contact":"meyern4@rpi.edu"},{"name":"Jolee McCluskey","contact":"mcclusk@rpi.edu"},{"name":"Xinyuan Sun","contact":"sunxi5@rpi.edu"},{"name":"Sam Schants","contact":"schants@rpi.edu"},{"name":"Peter Gramenides","contact":"gramenp@rpi.edu"}]},{"members":[{"name":"Nick Meyer","contact":"meyern4@rpi.edu"},{"name":"Jolee McCluskey","contact":"mcclusk@rpi.edu"},{"name":"Xinyuan Sun","contact":"sunxi5@rpi.edu"},{"name":"Sam Schants","contact":"schants@rpi.edu"},{"name":"Peter Gramenides","contact":"gramenp@rpi.edu"}]},{"members":[{"name":"Nick Meyer","contact":"meyern4@rpi.edu"},{"name":"Jolee McCluskey","contact":"mcclusk@rpi.edu"},{"name":"Xinyuan Sun","contact":"sunxi5@rpi.edu"},{"name":"Sam Schants","contact":"schants@rpi.edu"}]},{"members":[{"name":"Nick Meyer","contact":"meyern4@rpi.edu"},{"name":"Jolee McCluskey","contact":"mcclusk@rpi.edu"},{"name":"Xinyuan Sun","contact":"sunxi5@rpi.edu"},{"name":"Sam Schants","contact":"schants@rpi.edu"},{"name":"Peter Gramenides","contact":"gramenp@rpi.edu"}]},{"members":[{"name":"Nick Meyer","contact":"meyern4@rpi.edu"},{"name":"Jolee McCluskey","contact":"mcclusk@rpi.edu"},{"name":"Xinyuan Sun","contact":"sunxi5@rpi.edu"},{"name":"Sam Schants","contact":"schants@rpi.edu"},{"name":"Peter Gramenides","contact":"gramenp@rpi.edu"}]},{"members":[{"name":"Nick Meyer","contact":"meyern4@rpi.edu"},{"name":"Jolee McCluskey","contact":"mcclusk@rpi.edu"},{"name":"Xinyuan Sun","contact":"sunxi5@rpi.edu"},{"name":"Sam Schants","contact":"schants@rpi.edu"}]}]}');
INSERT INTO `formdata` (`id`, `code`, `responsejson`, `fillform`) VALUES (NULL, 'abcdef', '{ \"name\" : \"a a\", \"contact\" : \"a\", \"g\" : -1, \"c\" : -1, \"answers\" : [], \"data\" : [0.83,0.37,0.44,0.36,0.23,0.95,0.81,0.46,0.73,0.11] }', '1');
INSERT INTO `formdata` (`id`, `code`, `responsejson`, `fillform`) VALUES (NULL, 'abcdef', '{ \"name\" : \"b a\", \"contact\" : \"a\", \"g\" : -1, \"c\" : -1, \"answers\" : [], \"data\" : [0.35,0.89,0.54,0.55,0.77,0.42,0.66,0.8,0.81,0.84] }', '1');
INSERT INTO `formdata` (`id`, `code`, `responsejson`, `fillform`) VALUES (NULL, 'abcdef', '{ \"name\" : \"c a\", \"contact\" : \"a\", \"g\" : -1, \"c\" : -1, \"answers\" : [], \"data\" : [0.36,0.83,0.04,0.03,0.86,0.72,0.6,0.94,0.33,0.95] }', '1');
INSERT INTO `formdata` (`id`, `code`, `responsejson`, `fillform`) VALUES (NULL, 'abcdef', '{ \"name\" : \"d a\", \"contact\" : \"a\", \"g\" : -1, \"c\" : -1, \"answers\" : [], \"data\" : [0.01,0.7,0.12,0.11,0.44,0.12,0.51,0.96,0.5,0.36] }', '1');
INSERT INTO `formdata` (`id`, `code`, `responsejson`, `fillform`) VALUES (NULL, 'abcdef', '{ \"name\" : \"e a\", \"contact\" : \"a\", \"g\" : -1, \"c\" : -1, \"answers\" : [], \"data\" : [0.02,0.08,0.18,0.57,0.67,0.15,0.96,0.29,0.97,0.77] }', '1');
INSERT INTO `formdata` (`id`, `code`, `responsejson`, `fillform`) VALUES (NULL, 'abcdef', '{ \"name\" : \"f a\", \"contact\" : \"a\", \"g\" : -1, \"c\" : -1, \"answers\" : [], \"data\" : [0.9,0.76,0.1,0.11,0.19,0.79,0.86,0.57,0.46,0.49] }', '1');
INSERT INTO `formdata` (`id`, `code`, `responsejson`, `fillform`) VALUES (NULL, 'abcdef', '{ \"name\" : \"g a\", \"contact\" : \"a\", \"g\" : -1, \"c\" : -1, \"answers\" : [], \"data\" : [0.08,0.98,0.88,0.49,0.63,0.73,0.41,0.7,0.52,0.43] }', '1');
INSERT INTO `formdata` (`id`, `code`, `responsejson`, `fillform`) VALUES (NULL, 'abcdef', '{ \"name\" : \"h a\", \"contact\" : \"a\", \"g\" : -1, \"c\" : -1, \"answers\" : [], \"data\" : [0.93,0.91,0.87,0.26,0.01,0.62,0.82,0.71,0.8,0.1] }', '1');
INSERT INTO `formdata` (`id`, `code`, `responsejson`, `fillform`) VALUES (NULL, 'abcdef', '{ \"name\" : \"i a\", \"contact\" : \"a\", \"g\" : -1, \"c\" : -1, \"answers\" : [], \"data\" : [0.65,0.51,0.46,0.18,0.21,0.07,0.23,0.64,0.07,0.41] }', '1');
