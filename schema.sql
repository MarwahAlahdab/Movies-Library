
CREATE TABLE IF NOT EXISTS movie (
    id SERIAL PRIMARY KEY ,
    title VARCHAR(255) NOT NULL,
    release_date INTEGER NOT NULL,
    overview VARCHAR(255) NOT NULL);