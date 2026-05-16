const Database = require("better-sqlite3")
const db = Database("dd.db")
db.exec(`
    SELECT *
    FROM employees
    WHERE department_id = (
        SELECT id
        FROM departments
        WHERE name = 'New York'
    );
    SELECT *
    FROM employees
    WHERE salary = (
        SELECT MAX(salary)
        FROM employees
        WHERE department_id = (
            SELECT id
            FROM departments
            WHERE name = 'goa'
        )
    );
    SELECT *
    FROM employees
    WHERE salary = (
        SELECT MAX(salary)
        FROM employees
        WHERE department_id = 5
    );
    SELECT department.name FROM departments WHERE (SELECT AVG(salary) FROM departments) > 50000
`)