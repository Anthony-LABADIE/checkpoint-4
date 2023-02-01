CREATE TABLE
    `realisateur` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `lastname` varchar(255) NULL,
        `firstname` varchar(255) NULL,
        `image` varchar(255) NULL,
        PRIMARY KEY (`id`)
    );

CREATE TABLE
    `film` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `title` varchar(100) NOT NULL,
        `release_date` DATE NULL,
        `duration` INT NULL,
        `genre` varchar(100) NULL,
        `realisateur_id` INT,
        `id_status` INT NULL,
        `id_library` INT NULL,
        PRIMARY KEY (`id`),
        FOREIGN KEY (`realisateur_id`) REFERENCES `realisateur` (`id`)
    );

CREATE TABLE
    `user` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `lastname` varchar(100) NOT NULL,
        `firstname` varchar(100) NOT NULL,
        `email` varchar(100) NOT NULL,
        `password` BOOLEAN NULL,
        `image` varchar(255) NULL,
        PRIMARY KEY (`id`)
    );

CREATE TABLE
    `status` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `film_id` INT,
        `user_id` INT,
        status ENUM(
            'watched',
            'not watched',
            'plan to watch'
        ) DEFAULT 'not watched',
        `is_prenium` BOOLEAN NULL,
        PRIMARY KEY (`id`),
        FOREIGN KEY (`film_id`) REFERENCES `film` (`id`),
        FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
    );

CREATE TABLE
    `library` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `film_id` INT,
        `user_id` INT,
        PRIMARY KEY (`id`),
        FOREIGN KEY (`film_id`) REFERENCES `film` (`id`),
        FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
    );

    INSERT INTO `film` (`title`, `release_date`, `duration`, `genre`, `realisateur_id`, `id_status`, `id_library`)
VALUES 
("The Dark Knight", "2008-07-18", 152, "Action", 3, 1, 3),
("Inception", "2010-07-16", 148, "Action", 5, 1, 6),
("The Lord of the Rings: The Return of the King", "2003-12-17", 201, "Adventure", 4, 1, 5),
("Avatar", "2009-12-18", 162, "Action", 6, 1, 7),
("Interstellar", "2014-11-05", 169, "Adventure", 7, 1, 8),
("The Prestige", "2006-10-20", 130, "Drama", 8, 1, 9),
("Django Unchained", "2012-12-25", 165, "Drama", 9, 1, 10),
("The Grand Budapest Hotel", "2014-02-26", 100, "Comedy", 10, 1, 11),
("Mad Max: Fury Road", "2015-05-15", 120, "Action", 11, 1, 12),
("The Imitation Game", "2014-11-14", 113, "Drama", 12, 1, 13),
("Arrival", "2016-11-10", 116, "Science Fiction", 13, 1, 14),
("La La Land", "2016-12-09", 128, "Musical", 14, 1, 15),
("Moonlight", "2016-10-21", 111, "Drama", 15, 1, 16),
("Whiplash", "2014-10-10", 107, "Drama", 16, 1, 17),
("The Hateful Eight", "2015-12-25", 187, "Western", 17, 1, 18),
("The Martian", "2015-10-02", 144, "Science Fiction", 18, 1, 19),
("The Revenant", "2015-12-25", 156, "Drama", 19, 1, 20),
("Logan", "2017-02-28", 137, "Action", 20, 1, 21),
("Blade Runner 2049", "2017-10-06", 163, "Science Fiction", 21, 1, 22);