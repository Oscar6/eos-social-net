-- Creating db
CREATE DATABASE eos_social;

-- Creating users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(191)
  password TEXT
);

-- Creating posts table
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users (id),
  title VARCHAR(100),
  description TEXT
);

-- Creating comments table
CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users (id),
  post_id INTEGER REFERENCES posts (id),
  description TEXT
);
