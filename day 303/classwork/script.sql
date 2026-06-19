-- 1. Clean up any existing tables from previous tests
DROP TABLE IF EXISTS users_unindexed;
DROP TABLE IF EXISTS users_indexed;

-- 2. Create the UNINDEXED table
CREATE TABLE users_unindexed (
    id INTEGER PRIMARY KEY,
    username TEXT,
    email TEXT,
    signup_date TEXT
);

-- 3. Create the INDEXED table (Identical structure)
CREATE TABLE users_indexed (
    id INTEGER PRIMARY KEY,
    username TEXT,
    email TEXT,
    signup_date TEXT
);

-- 4. Create an index on the email column of the second table
CREATE INDEX idx_users_email_username ON users_indexed(email, username);

-- 5. Generate and insert 20,000 rows of mock data
WITH RECURSIVE generate_rows(row_num) AS (
    SELECT 1
    UNION ALL
    SELECT row_num + 1 FROM generate_rows WHERE row_num < 20000
)
INSERT INTO users_unindexed (username, email, signup_date)
SELECT 
    'user_' || row_num AS username,
    'user_' || row_num || '@example.com' AS email,
    '2026-05-14' AS signup_date
FROM generate_rows;

-- Copy data into indexed table
INSERT INTO users_indexed SELECT * FROM users_unindexed;