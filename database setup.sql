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
    responsejson MEDIUMTEXT,
    fillform int DEFAULT '1',
    PRIMARY KEY(code),
    FOREIGN KEY(creator) REFERENCES userdata(username)
);
USE peapods;
CREATE TABLE formdata(
    id int NOT NULL AUTO_INCREMENT,
    code varchar(6) NOT NULL,
    responsejson MEDIUMTEXT NOT NULL,
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
INSERT INTO forms (code, creator, formjson,groupjson, responsejson) VALUES ('abcdef','Administrator','', '{"formTitle":"Websys Groups","groups":[{"members":[{"name":"Nick Meyer","contact":"meyern4@rpi.edu"},{"name":"Jolee McCluskey","contact":"mcclusk@rpi.edu"},{"name":"Xinyuan Sun","contact":"sunxi5@rpi.edu"},{"name":"Sam Schants","contact":"schants@rpi.edu"},{"name":"Peter Gramenides","contact":"gramenp@rpi.edu"}]},{"members":[{"name":"Nick Meyer","contact":"meyern4@rpi.edu"},{"name":"Jolee McCluskey","contact":"mcclusk@rpi.edu"},{"name":"Xinyuan Sun","contact":"sunxi5@rpi.edu"},{"name":"Sam Schants","contact":"schants@rpi.edu"},{"name":"Peter Gramenides","contact":"gramenp@rpi.edu"}]},{"members":[{"name":"Nick Meyer","contact":"meyern4@rpi.edu"},{"name":"Jolee McCluskey","contact":"mcclusk@rpi.edu"},{"name":"Xinyuan Sun","contact":"sunxi5@rpi.edu"},{"name":"Sam Schants","contact":"schants@rpi.edu"},{"name":"Peter Gramenides","contact":"gramenp@rpi.edu"}]},{"members":[{"name":"Nick Meyer","contact":"meyern4@rpi.edu"},{"name":"Jolee McCluskey","contact":"mcclusk@rpi.edu"},{"name":"Xinyuan Sun","contact":"sunxi5@rpi.edu"},{"name":"Sam Schants","contact":"schants@rpi.edu"}]},{"members":[{"name":"Nick Meyer","contact":"meyern4@rpi.edu"},{"name":"Jolee McCluskey","contact":"mcclusk@rpi.edu"},{"name":"Xinyuan Sun","contact":"sunxi5@rpi.edu"},{"name":"Sam Schants","contact":"schants@rpi.edu"},{"name":"Peter Gramenides","contact":"gramenp@rpi.edu"}]},{"members":[{"name":"Nick Meyer","contact":"meyern4@rpi.edu"},{"name":"Jolee McCluskey","contact":"mcclusk@rpi.edu"},{"name":"Xinyuan Sun","contact":"sunxi5@rpi.edu"},{"name":"Sam Schants","contact":"schants@rpi.edu"},{"name":"Peter Gramenides","contact":"gramenp@rpi.edu"}]},{"members":[{"name":"Nick Meyer","contact":"meyern4@rpi.edu"},{"name":"Jolee McCluskey","contact":"mcclusk@rpi.edu"},{"name":"Xinyuan Sun","contact":"sunxi5@rpi.edu"},{"name":"Sam Schants","contact":"schants@rpi.edu"}]},{"members":[{"name":"Nick Meyer","contact":"meyern4@rpi.edu"},{"name":"Jolee McCluskey","contact":"mcclusk@rpi.edu"},{"name":"Xinyuan Sun","contact":"sunxi5@rpi.edu"},{"name":"Sam Schants","contact":"schants@rpi.edu"},{"name":"Peter Gramenides","contact":"gramenp@rpi.edu"}]},{"members":[{"name":"Nick Meyer","contact":"meyern4@rpi.edu"},{"name":"Jolee McCluskey","contact":"mcclusk@rpi.edu"},{"name":"Xinyuan Sun","contact":"sunxi5@rpi.edu"},{"name":"Sam Schants","contact":"schants@rpi.edu"},{"name":"Peter Gramenides","contact":"gramenp@rpi.edu"}]},{"members":[{"name":"Nick Meyer","contact":"meyern4@rpi.edu"},{"name":"Jolee McCluskey","contact":"mcclusk@rpi.edu"},{"name":"Xinyuan Sun","contact":"sunxi5@rpi.edu"},{"name":"Sam Schants","contact":"schants@rpi.edu"}]}]}', '{"data":[{"name":"a a","contact":"a","g":0,"c":-1,"answers":[],"data":[0.83,0.37,0.44,0.36,0.23,0.95,0.81,0.46,0.73,0.11]},{"name":"a a","contact":"a","g":0,"c":-1,"answers":[],"data":[0.83,0.23,0.44,0.45,0.23,0.95,0.34,0.23,0.73,0.11]},{"name":"a a","contact":"a","g":0,"c":-1,"answers":[],"data":[0.83,0.23,0.98,0.43,0.23,0.95,0.76,0.46,0.23,0.11]},{"name":"a a","contact":"a","g":0,"c":-1,"answers":[],"data":[0,0.1,0.44,0.15,0.23,0.95,0.81,0.76,0.73,0.176]},{"name":"b a","contact":"a","g":1,"c":-1,"answers":[],"data":[0.35,0.89,0.54,0.55,0.77,0.42,0.66,0.8,0.81,0.84]},{"name":"c a","contact":"a","g":2,"c":-1,"answers":[],"data":[0.36,0.83,0.04,0.03,0.86,0.72,0.6,0.94,0.33,0.95]},{"name":"d a","contact":"a","g":2,"c":-1,"answers":[],"data":[0.01,0.7,0.12,0.11,0.44,0.12,0.51,0.96,0.5,0.36]},{"name":"e a","contact":"a","g":3,"c":-1,"answers":[],"data":[0.02,0.08,0.18,0.57,0.67,0.15,0.96,0.29,0.97,0.77]},{"name":"f a","contact":"a","g":0,"c":-1,"answers":[],"data":[0.9,0.76,0.1,0.11,0.19,0.79,0.86,0.57,0.46,0.49]},{"name":"g a","contact":"a","g":1,"c":-1,"answers":[],"data":[0.08,0.98,0.88,0.49,0.63,0.73,0.41,0.7,0.52,0.43]},{"name":"h a","contact":"a","g":0,"c":-1,"answers":[],"data":[0.93,0.91,0.87,0.26,0.01,0.62,0.82,0.71,0.8,0.1]},{"name":"i a","contact":"a","g":3,"c":-1,"answers":[],"data":[0.65,0.51,0.46,0.18,0.21,0.07,0.23,0.64,0.07,0.41]}]}');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ \"name\" : \"a a\", \"contact\" : \"a\", \"g\" : -1, \"c\" : -1, \"answers\" : [], \"data\" : [0.83,0.37,0.44,0.36,0.23,0.95,0.81,0.46,0.73,0.11] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ \"name\" : \"b a\", \"contact\" : \"a\", \"g\" : -1, \"c\" : -1, \"answers\" : [], \"data\" : [0.35,0.89,0.54,0.55,0.77,0.42,0.66,0.8,0.81,0.84] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ \"name\" : \"c a\", \"contact\" : \"a\", \"g\" : -1, \"c\" : -1, \"answers\" : [], \"data\" : [0.36,0.83,0.04,0.03,0.86,0.72,0.6,0.94,0.33,0.95] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ \"name\" : \"d a\", \"contact\" : \"a\", \"g\" : -1, \"c\" : -1, \"answers\" : [], \"data\" : [0.01,0.7,0.12,0.11,0.44,0.12,0.51,0.96,0.5,0.36] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ \"name\" : \"e a\", \"contact\" : \"a\", \"g\" : -1, \"c\" : -1, \"answers\" : [], \"data\" : [0.02,0.08,0.18,0.57,0.67,0.15,0.96,0.29,0.97,0.77] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ \"name\" : \"f a\", \"contact\" : \"a\", \"g\" : -1, \"c\" : -1, \"answers\" : [], \"data\" : [0.9,0.76,0.1,0.11,0.19,0.79,0.86,0.57,0.46,0.49] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ \"name\" : \"g a\", \"contact\" : \"a\", \"g\" : -1, \"c\" : -1, \"answers\" : [], \"data\" : [0.08,0.98,0.88,0.49,0.63,0.73,0.41,0.7,0.52,0.43] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ \"name\" : \"h a\", \"contact\" : \"a\", \"g\" : -1, \"c\" : -1, \"answers\" : [], \"data\" : [0.93,0.91,0.87,0.26,0.01,0.62,0.82,0.71,0.8,0.1] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ \"name\" : \"i a\", \"contact\" : \"a\", \"g\" : -1, \"c\" : -1, \"answers\" : [], \"data\" : [0.65,0.51,0.46,0.18,0.21,0.07,0.23,0.64,0.07,0.41] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.49, 0.22, 0.59, 0.15, 0.02, 0.79, 0.54, 0.86, 0.63, 0.41] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.13, 0.45, 0.05, 0.7, 0.44, 0.9, 0.4, 0.2, 0.81, 0.94] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.18, 0.94, 0.15, 0.17, 1.0, 0.78, 0.37, 0.41, 0.91, 0.08] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.81, 0.86, 0.37, 0.72, 0.55, 0.81, 0.46, 0.39, 0.41, 0.14] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.57, 0.17, 0.99, 0.9, 0.49, 0.53, 0.28, 0.73, 0.1, 0.85] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.75, 0.08, 0.86, 1.01, 0.7, 0.66, 0.56, 0.8, 0.02, 0.61] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.54, 0.78, 1.0, 0.0, 0.36, 0.2, 0.88, 0.79, 1.0, 0.27] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.84, 0.38, 0.25, 0.13, 0.67, 0.64, 0.07, 0.72, 0.79, 0.67] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.53, 0.37, 0.31, 0.39, 0.07, 0.53, 0.24, 0.66, 0.5, 0.01] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.02, 0.47, 0.72, 0.97, 0.04, 0.91, 0.71, 0.37, 0.07, 0.34] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.8, 0.69, 0.08, 0.21, 0.72, 0.77, 0.91, 0.41, 0.94, 0.16] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.32, 0.19, 0.32, 0.5, 0.07, 0.43, 0.28, 0.28, 0.39, 0.68] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.27, 0.38, 0.84, 0.09, 0.6, 0.66, 0.57, 0.76, 0.25, 0.8] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.24, 0.19, 0.73, 0.51, 0.6, 0.9, 0.91, 0.85, 0.81, 0.37] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.39, 0.47, 0.31, 0.17, 0.74, 0.1, 0.9, 0.92, 0.87, 0.91] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.2, 0.91, 0.27, 0.56, 0.44, 0.67, 0.45, 0.2, 0.28, 0.08] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.09, 0.7, 0.06, 0.65, 0.8, 0.53, 0.65, 0.27, 0.63, 0.72] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.49, 0.48, 0.95, 0.92, 0.6, 0.61, 0.45, 0.56, 0.51, 0.16] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.39, 0.82, 0.09, 0.43, 0.4, 0.43, 0.88, 0.86, 0.57, 0.46] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.33, 0.54, 0.89, 0.56, 0.21, 0.18, 0.18, 0.2, 0.04, 0.46] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.17, 0.86, 0.53, 0.07, 0.76, 0.54, 0.87, 0.3, 0.08, 0.49] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.12, 1.0, 0.45, 0.65, 0.76, 0.57, 0.82, 0.79, 0.6, 0.06] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.25, 0.7, 0.66, 0.59, 0.7, 0.01, 0.54, 0.88, 0.8, 0.07] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.2, 0.8, 0.26, 0.95, 0.7, 0.52, 0.65, 0.98, 0.57, 0.39] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.76, 0.2, 0.75, 0.39, 0.62, 0.92, 0.39, 0.22, 0.31, 0.16] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.38, 0.66, 0.71, 0.5, 0.71, 0.03, 0.72, 0.04, 0.59, 0.67] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.05, 0.35, 0.9, 0.15, 0.34, 0.78, 0.86, 0.77, 0.2, 0.27] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.93, 0.31, 0.72, 0.98, 0.56, 0.45, 0.98, 0.17, 0.04, 0.5] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.4, 0.64, 0.09, 0.09, 0.34, 0.24, 0.29, 0.52, 1.0, 0.55] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.19, 0.14, 0.93, 0.21, 0.99, 0.24, 0.05, 0.56, 0.5, 0.95] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.21, 0.65, 0.79, 0.73, 0.29, 0.2, 0.06, 0.71, 0.5, 0.7] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.63, 0.46, 0.13, 0.15, 0.25, 0.55, 0.24, 0.97, 0.64, 0.78] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.06, 0.33, 0.03, 0.61, 0.58, 0.6, 0.62, 0.95, 0.46, 0.99] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.2, 0.08, 0.98, 0.55, 0.29, 0.7, 0.99, 0.7, 0.18, 0.89] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.21, 0.29, 0.72, 0.99, 0.09, 0.48, 0.74, 0.73, 0.63, 0.88] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.55, 0.05, 0.44, 0.07, 0.51, 0.85, 0.5, 0.7, 0.85, 0.81] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.56, 0.73, 0.18, 0.63, 0.4, 0.03, 0.59, 0.67, 0.87, 0.66] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.18, 0.68, 0.54, 0.57, 0.53, 0.24, 0.28, 0.03, 0.56, 0.45] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.18, 0.66, 0.03, 0.02, 0.06, 0.78, 0.03, 0.44, 0.68, 0.34] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.82, 0.15, 0.35, 0.35, 0.9, 0.4, 0.71, 0.04, 0.81, 0.51] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.38, 0.8, 0.15, 0.33, 0.89, 0.94, 0.35, 0.04, 0.51, 0.03] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.4, 0.98, 0.92, 0.55, 0.46, 0.56, 0.74, 0.98, 0.94, 0.58] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.02, 0.74, 1.01, 0.22, 0.57, 0.4, 0.45, 0.58, 0.7, 0.88] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.53, 0.17, 0.23, 0.66, 0.11, 0.49, 0.02, 0.98, 0.11, 0.27] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.27, 0.65, 0.76, 0.13, 0.9, 0.67, 1.0, 0.95, 0.8, 0.54] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.14, 0.55, 0.81, 0.9, 0.31, 0.45, 0.14, 1.01, 0.44, 0.48] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.35, 0.84, 0.77, 0.13, 0.32, 0.51, 1.01, 0.29, 0.17, 0.21] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.89, 0.8, 0.82, 0.34, 0.82, 0.11, 0.81, 0.62, 1.01, 0.11] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.53, 0.37, 0.47, 0.05, 0.36, 0.43, 0.35, 0.13, 0.62, 0.49] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.58, 0.76, 0.14, 0.07, 0.23, 0.47, 0.68, 0.7, 0.27, 0.82] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.24, 0.43, 0.24, 0.93, 0.07, 0.27, 0.18, 0.02, 0.72, 0.57] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.22, 0.27, 0.43, 0.32, 0.45, 0.96, 0.24, 0.38, 0.71, 0.63] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.77, 0.72, 0.02, 0.35, 0.15, 0.54, 0.03, 1.01, 0.59, 0.68] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.49, 0.62, 0.47, 0.63, 0.75, 0.13, 0.41, 0.85, 0.17, 0.78] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.1, 0.07, 0.42, 0.84, 1.01, 0.48, 0.24, 0.37, 0.61, 0.59] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.07, 0.99, 0.11, 0.43, 0.81, 0.43, 0.05, 0.11, 0.81, 0.58] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.47, 0.16, 0.09, 0.08, 0.45, 0.68, 0.68, 0.11, 0.34, 0.92] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.33, 0.96, 0.89, 0.72, 0.49, 0.46, 0.73, 0.83, 0.14, 0.7] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.47, 0.72, 0.97, 0.61, 0.43, 0.21, 0.36, 0.13, 0.57, 0.33] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.82, 0.52, 0.53, 0.89, 0.37, 0.87, 0.54, 0.1, 1.0, 0.83] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.77, 0.0, 0.0, 0.86, 0.92, 0.53, 0.62, 0.59, 0.09, 0.72] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.08, 0.74, 0.64, 0.0, 0.63, 0.99, 0.54, 0.6, 0.3, 0.16] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.41, 0.51, 0.75, 0.86, 0.54, 0.56, 0.01, 0.6, 0.85, 0.2] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.11, 0.79, 0.42, 0.33, 0.18, 0.6, 0.7, 0.59, 0.35, 0.2] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.29, 0.26, 0.28, 0.5, 0.3, 0.74, 0.29, 0.07, 0.8, 0.78] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.55, 0.89, 0.72, 0.06, 0.94, 0.44, 0.6, 0.68, 0.18, 0.35] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.81, 0.94, 0.17, 0.8, 0.48, 0.01, 0.14, 0.34, 0.83, 0.96] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.18, 0.62, 0.84, 0.41, 0.64, 0.28, 0.62, 0.8, 0.41, 0.72] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.05, 0.65, 0.42, 0.02, 0.91, 0.84, 0.78, 0.97, 0.6, 0.08] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.95, 0.09, 0.69, 0.63, 0.71, 0.12, 0.24, 0.58, 0.89, 0.71] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.74, 0.75, 0.13, 0.23, 0.08, 0.84, 0.83, 0.12, 0.8, 0.57] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.68, 0.11, 0.37, 0.34, 0.53, 0.46, 0.01, 0.36, 0.28, 0.6] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.68, 0.29, 0.01, 0.68, 0.1, 0.06, 0.51, 0.44, 0.06, 0.31] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.67, 0.94, 0.53, 0.55, 0.24, 0.28, 0.11, 0.53, 1.01, 0.79] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.37, 0.09, 0.36, 0.5, 0.37, 0.58, 0.28, 0.01, 0.52, 0.69] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [1.0, 0.44, 0.68, 0.33, 0.0, 0.0, 0.23, 0.53, 0.0, 0.43] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.6, 0.31, 0.0, 0.96, 0.97, 0.42, 0.11, 0.18, 0.09, 0.96] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.5, 0.95, 0.15, 0.46, 0.54, 0.11, 0.32, 0.6, 0.32, 0.74] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.85, 0.33, 0.94, 0.67, 0.3, 0.31, 0.47, 0.33, 0.25, 0.66] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.57, 0.08, 0.82, 0.23, 0.56, 0.61, 0.63, 0.69, 0.16, 0.63] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.96, 0.5, 0.75, 0.37, 0.05, 0.96, 0.09, 0.52, 0.18, 0.75] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.38, 0.61, 0.96, 0.92, 0.35, 0.27, 0.91, 0.65, 0.22, 0.91] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.96, 0.05, 0.07, 0.68, 0.41, 0.75, 0.96, 0.89, 0.7, 0.15] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.28, 0.7, 0.88, 0.17, 0.1, 0.84, 0.57, 0.68, 1.0, 0.42] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.1, 0.18, 0.22, 1.01, 0.09, 0.79, 0.37, 0.88, 0.24, 0.38] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [1.0, 1.01, 0.44, 0.96, 0.69, 0.43, 0.35, 0.54, 0.42, 0.03] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.7, 0.09, 0.47, 0.86, 0.1, 0.74, 0.4, 0.73, 0.4, 0.26] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.19, 0.65, 0.77, 0.19, 0.1, 0.48, 0.39, 0.58, 0.99, 0.83] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.09, 0.7, 0.57, 0.09, 0.2, 0.78, 1.01, 0.5, 0.95, 0.05] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.84, 0.08, 0.7, 0.47, 0.2, 0.11, 0.0, 0.32, 0.19, 0.97] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.71, 0.37, 0.93, 0.04, 1.01, 0.9, 0.8, 0.14, 0.54, 1.0] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.73, 0.53, 0.0, 0.91, 0.14, 0.59, 0.81, 0.38, 0.68, 0.92] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.74, 0.67, 0.84, 0.28, 0.75, 0.28, 0.42, 0.61, 0.08, 0.55] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.41, 0.57, 0.8, 0.21, 0.75, 0.47, 0.51, 0.94, 0.54, 0.55] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.12, 0.29, 0.7, 0.05, 0.21, 0.16, 0.39, 0.15, 0.54, 0.27] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.54, 0.25, 0.66, 0.71, 0.97, 0.99, 0.28, 0.54, 1.0, 0.5] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.2, 0.15, 0.69, 0.99, 0.45, 0.19, 0.32, 0.54, 0.65, 0.86] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.09, 0.41, 0.94, 0.56, 0.85, 0.88, 0.12, 0.89, 0.34, 0.73] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.27, 0.04, 0.94, 0.72, 0.99, 0.17, 0.15, 0.9, 0.65, 0.68] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.04, 0.43, 0.37, 0.78, 0.52, 0.18, 0.56, 0.29, 0.12, 0.78] }');
INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ "name" : "i a", "contact" : "a", "g" : -1, "c" : -1, "answers" : [], "data" : [0.53, 0.24, 0.25, 0.08, 0.34, 0.69, 0.4, 0.52, 0.68, 0.34] }');