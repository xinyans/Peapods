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
