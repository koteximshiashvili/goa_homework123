const Database = require("better-sqlite3");
const db = new Database("db.db");

db.exec(`
    CREATE TABLE customers (
        id INT AUTOINCREMENT PRIMARY KEY,
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        created_at CURRENT_TIMESTAMP,
    );
        CREATE TABLE products (
        id INTEGER AUTOINCREMENT PRIMARY KEY,
        name TEXT NOT NULL,
        price REAL NOT NULL,
        stock INT DEFAULT 0,
        category TEXT,
        CHECK (price > 0)
    );
    CREATE TABLE orders (
        id INT AUTO_INCREMENT PRIMARY KEY,
        customer_id INT,
        status TEXT DEFAULT ('pending'),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (customer_id) REFERENCES customers(id)
    );
    CREATE TABLE order_items (
        order_id INT,
        product_id INT,
        quantity INT NOT NULL,
        PRIMARY KEY (order_id, product_id),
        FOREIGN KEY (order_id) REFERENCES orders(id),
        FOREIGN KEY (product_id) REFERENCES products(id),
        CHECK (quantity > 0)
    );
    INSERT INTO customers (first_name, last_name, email)
    VALUES 
    ('testi', 'testadze', 'testi@test.testi'),
    ('shemowmeba', 'shemowmebadze', 'shemowmeba@shemowmeb.shemowmeba');

    INSERT INTO products (name, price, stock, category)
    VALUES
    ('Laptop', 1500.99, 10, 'Electronics'),
    ('Phone', 800.99, 20, 'Electronics');
`)