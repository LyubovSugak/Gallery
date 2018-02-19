DROP TABLE IF EXISTS paintings;
DROP TABLE IF EXISTS photos;
DROP TABLE IF EXISTS authors;


CREATE TABLE paintings (
  id SERIAL primary key,
  author_id INTEGER,
  categorie VARCHAR(30),
  technique VARCHAR(30),
  image TEXT,
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE photos (
  id SERIAL primary key,
  author_id INTEGER,
  genre VARCHAR(30),
  style VARCHAR(30),
  image TEXT,
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE handcrafts (
  id SERIAL primary key,
  author_id INTEGER,
  categorie VARCHAR(30),
  image TEXT,
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE new (
  id SERIAL primary key,
  image TEXT,
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE authors (
  id SERIAL primary key,
  author_image TEXT,
  first VARCHAR(30),
  last VARCHAR(30),
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO paintings (author_id, categorie, technique, image) VALUES (1, 'landscape', 'oil', '2.jpg');
INSERT INTO paintings (author_id, categorie, technique, image) VALUES (2, 'landscape', 'whatecolor-pencil', '18.jpg');
INSERT INTO authors (author_image, first, last) VALUES ('lana.jpg', 'Lana', 'Nakene');
INSERT INTO authors (author_image, first, last) VALUES ('lyuba.jpg.jpg', 'Lyuba', 'Sugak');

ALTER TABLE authors CHANGE COLUMN image author_image;

SELECT users.first AS user_first, users.last AS user_last, 
        profiles.age AS profiles_age, profiles.city AS profiles_city
        FROM signature
        LEFT JOIN users
        ON users.id = signature.user_id 
        LEFT JOIN profiles
        ON users.id = profiles.user_id;

SELECT users.first AS user_first, users.last AS user_last, 
        profiles.age AS profile_age, profiles.city AS profile_city, profiles.homepage AS profile_homepage
        FROM signature
        LEFT JOIN users
        ON users.id = signature.user_id 
        LEFT JOIN profiles
        ON users.id = profiles.user_id

INSERT INTO friend_request (sender_id, recipient_id, status) VALUES (4, 9, 2);

DELETE FROM paintings WHERE id = 2;

const PENDING = 1, ACCEPTED = 2;

const q = `
    SELECT users.id, first, last, image, status
    FROM friend_requests
    JOIN users
    ON (status = ${PENDING} AND recipient_id = $1 AND requester_id = users.id)
    OR (status = ${ACCEPTED} AND recipient_id = $1 AND requester_id = users.id)
    OR (status = ${ACCEPTED} AND requester_id = $1 AND recipient_id = users.id)
`;




