DROP DATABASE IF EXISTS peapods;
CREATE DATABASE peapods DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE peapods;

CREATE TABLE forms(
    `id` int AUTO_INCREMENT,
    `code` char(6) NOT NULL,
    `creator` varchar(200) NOT NULL,
    `form_data` MEDIUMTEXT NOT NULL,
    PRIMARY KEY(id)
);

