const Database = require('better-sqlite3');

const db = new Database("school.db");
db.pragma('foreign_keys = ON');
db.exec(`
    CREATE TABLE IF NOT EXISTS classes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        grade INTEGER,
        student_count INTEGER
    );
    CREATE TABLE IF NOT EXISTS students (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        grade_id INTEGER,
        student TEXT,
        count INTEGER,
        FOREIGN KEY (grade_id) REFERENCES classes(id)
    );
        CREATE TRIGGER IF NOT EXISTS new_students
        BEFORE INSERT ON students
        BEGIN
        UPDATE students 
        SET count = count + 1
        UPDATE classes
        SET student_count = student_count + 1
        WHERE id = NEW.grade_id
        END;
`)

db.exec(`
    CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        price REAL
    );
        CREATE TRIGGER IF NOT EXISTS negative_fix 
        BEFORE INSERT ON products
        BEGIN
        UPDATE products
        SET price = 0
        WHERE NEW.price < 0;
        END;
`)
db.exec(`
    INSERT INTO products (name, price) VALUES ("smth", -2)
`)