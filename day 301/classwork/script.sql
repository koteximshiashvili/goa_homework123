CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    salary DECIMAL(10, 2)
);

CREATE VIEW employee_view AS SELECT id, name, salary FROM employees;

CREATE TRIGGER employee_view_insert INSTEAD OF INSERT ON employee_view BEGIN
INSERT INTO employees (name, salary) VALUES (NEW.name, NEW.salary);
END;

INSERT INTO employee_view (name, salary)
VALUES ('John', 5000);

INSERT INTO employee_view (name, salary)
VALUES ('Alice', 6500);

SELECT * FROM employees;