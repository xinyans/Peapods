-- Make sure you have an approrpriate virtual host configured so the php works
-- properly.

-- run the following code in your phpmyadmin to setup the database
-- you can use the register function to create your own login information
-- make sure to change the database login information when you pull


DROP DATABASE peapods;
CREATE DATABASE peapods;
USE peapods;
CREATE TABLE userdata(
    id int NOT NULL AUTO_INCREMENT,
	lastName varchar(255) NOT NULL,
    firstName varchar(255) NOT NULL,
    username varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    PRIMARY KEY(id)
);
USE peapods;
CREATE TABLE formdata(
    formid int NOT NULL AUTO_INCREMENT,
    usercode varchar(20) NOT NULL,
    userid int NOT NULL,
    formjson varchar(3000) NOT NULL,
    fillform int DEFAULT '1',
    PRIMARY KEY(formid)
);
USE peapods;
CREATE TABLE groupdata(
    usercode varchar(20) NOT NULL,
    groupjson varchar(3000) NOT NULL
);
USE peapods;
CREATE TABLE logins(
    loginCookie varchar(35) NOT NULL,
    username varchar(255) NOT NULL,
    CONSTRAINT row_unique UNIQUE (username, loginCookie)
);
USE peadpods;
INSERT INTO groupdata (usercode, groupjson) VALUES ('testcode', '{"formTitle":"Websys Groups","groups":[{"members":[{"name":"Nick Meyer","contact":"meyern4@rpi.edu"},{"name":"Jolee McCluskey","contact":"mcclusk@rpi.edu"},{"name":"Xinyuan Sun","contact":"sunxi5@rpi.edu"},{"name":"Sam Schants","contact":"schants@rpi.edu"},{"name":"Peter Gramenides","contact":"gramenp@rpi.edu"}]},{"members":[{"name":"Nick Meyer","contact":"meyern4@rpi.edu"},{"name":"Jolee McCluskey","contact":"mcclusk@rpi.edu"},{"name":"Xinyuan Sun","contact":"sunxi5@rpi.edu"},{"name":"Sam Schants","contact":"schants@rpi.edu"},{"name":"Peter Gramenides","contact":"gramenp@rpi.edu"}]},{"members":[{"name":"Nick Meyer","contact":"meyern4@rpi.edu"},{"name":"Jolee McCluskey","contact":"mcclusk@rpi.edu"},{"name":"Xinyuan Sun","contact":"sunxi5@rpi.edu"},{"name":"Sam Schants","contact":"schants@rpi.edu"},{"name":"Peter Gramenides","contact":"gramenp@rpi.edu"}]},{"members":[{"name":"Nick Meyer","contact":"meyern4@rpi.edu"},{"name":"Jolee McCluskey","contact":"mcclusk@rpi.edu"},{"name":"Xinyuan Sun","contact":"sunxi5@rpi.edu"},{"name":"Sam Schants","contact":"schants@rpi.edu"}]},{"members":[{"name":"Nick Meyer","contact":"meyern4@rpi.edu"},{"name":"Jolee McCluskey","contact":"mcclusk@rpi.edu"},{"name":"Xinyuan Sun","contact":"sunxi5@rpi.edu"},{"name":"Sam Schants","contact":"schants@rpi.edu"},{"name":"Peter Gramenides","contact":"gramenp@rpi.edu"}]},{"members":[{"name":"Nick Meyer","contact":"meyern4@rpi.edu"},{"name":"Jolee McCluskey","contact":"mcclusk@rpi.edu"},{"name":"Xinyuan Sun","contact":"sunxi5@rpi.edu"},{"name":"Sam Schants","contact":"schants@rpi.edu"},{"name":"Peter Gramenides","contact":"gramenp@rpi.edu"}]},{"members":[{"name":"Nick Meyer","contact":"meyern4@rpi.edu"},{"name":"Jolee McCluskey","contact":"mcclusk@rpi.edu"},{"name":"Xinyuan Sun","contact":"sunxi5@rpi.edu"},{"name":"Sam Schants","contact":"schants@rpi.edu"}]},{"members":[{"name":"Nick Meyer","contact":"meyern4@rpi.edu"},{"name":"Jolee McCluskey","contact":"mcclusk@rpi.edu"},{"name":"Xinyuan Sun","contact":"sunxi5@rpi.edu"},{"name":"Sam Schants","contact":"schants@rpi.edu"},{"name":"Peter Gramenides","contact":"gramenp@rpi.edu"}]},{"members":[{"name":"Nick Meyer","contact":"meyern4@rpi.edu"},{"name":"Jolee McCluskey","contact":"mcclusk@rpi.edu"},{"name":"Xinyuan Sun","contact":"sunxi5@rpi.edu"},{"name":"Sam Schants","contact":"schants@rpi.edu"},{"name":"Peter Gramenides","contact":"gramenp@rpi.edu"}]},{"members":[{"name":"Nick Meyer","contact":"meyern4@rpi.edu"},{"name":"Jolee McCluskey","contact":"mcclusk@rpi.edu"},{"name":"Xinyuan Sun","contact":"sunxi5@rpi.edu"},{"name":"Sam Schants","contact":"schants@rpi.edu"}]}]}');