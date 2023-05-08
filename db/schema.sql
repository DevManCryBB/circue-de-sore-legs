DROP DATABASE IF EXISTS exercise_project_db;
CREATE DATABASE exercise_project_db;
USE exercise_project_db;

CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(30) NOT NULL,
    user_email VARCHAR(30) NOT NULL,
    active BOOLEAN
);

CREATE TABLE exercise_categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    category_title VARCHAR(30)
);

CREATE TABLE exercises (
    exercise_id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT NOT NULL,
    exercise_title VARCHAR(30) NOT NULL,
    description TEXT,
    funny_quip TEXT
);

CREATE TABLE daily_schedule (
    schedule_id INT AUTO_INCREMENT PRIMARY KEY,
    exercise_id INT NOT NULL,
    user_id INT NOT NULL,
    day VARCHAR(30) NOT NULL
);
SHOW TABLES;
DESCRIBE users;
DESCRIBE exercise_categories;
DESCRIBE exercises;
DESCRIBE daily_schedule;