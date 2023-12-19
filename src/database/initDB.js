import "dotenv/config.js";
import connectDB from "./db.js";

const db = connectDB();

const DB_NAME = process.env.MYSQL_DB;



console.log("Limpiando base de datos vieja...");
await db.query(`DROP DATABASE IF EXISTS ${DB_NAME}`);

console.log("Creando base de datos...");
await db.query(`CREATE DATABASE ${DB_NAME}`);

await db.query(`USE ${DB_NAME}`);

console.log("Creando tabla users...");
await db.query(`
CREATE TABLE users (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nickName VARCHAR(64) UNIQUE,
    email VARCHAR(255) UNIQUE,
    password VARCHAR(64) NOT NULL,
    profilePictureURL VARCHAR(255),
    isEmailValidated BOOLEAN NOT NULL DEFAULT FALSE,
    validationCode INT UNSIGNED,
    isEmailPublic BOOLEAN NOT NULL DEFAULT TRUE,
    isEnabled BOOLEAN NOT NULL DEFAULT TRUE
);
`);



console.log("Creando tabla recomendaciones...");
await db.query(`
CREATE TABLE recomendaciones (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    description TEXT NOT NULL,
    location VARCHAR(100) NOT NULL,
    lean_in VARCHAR(100) NOT NULL,
    picture VARCHAR(100),
    userId INT UNSIGNED NOT NULL,
    publishedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (userId) REFERENCES users(id)
);
`);
console.log("Creando tabla photos...");
await db.query(`
CREATE TABLE photos (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    url VARCHAR(255) NOT NULL,
    experienceId INT UNSIGNED NOT NULL,
    
    FOREIGN KEY (experienceId) REFERENCES recomendaciones(id)
);
`);
console.log("Creando tabla comments...");
await db.query(`
CREATE TABLE comments (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    message TEXT NOT NULL,
    experienceId INT UNSIGNED NOT NULL,
    userId INT UNSIGNED NOT NULL,
    
    FOREIGN KEY (experienceId) REFERENCES recomendaciones(id),
    FOREIGN KEY (userId) REFERENCES users(id)
);
`);
console.log("Creando tabla experienceLikes...");
await db.query(`
CREATE TABLE experienceLikes (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    experienceId INT UNSIGNED NOT NULL,
    userId INT UNSIGNED NOT NULL,
    likes INT UNSIGNED DEFAULT 0,
    FOREIGN KEY (experienceId) REFERENCES recomendaciones(id),
    FOREIGN KEY (userId) REFERENCES users(id)
);
`);

await db.end();
