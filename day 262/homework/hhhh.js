// SELECT მონაცემების ამოსაღებად 
SELECT name FROM names
// WHERE ფილტრაცია
SELECT * FROM food WHERE rating > 67
// LIKE ფილტრაცია patternit
SELECT * FROM people WHERE name LIKE 'K%'
// ORDER BY მონაცემების დალაგება
SELECT * FROM people ORDER BY income ASC
// LIMIT შეზღუდვა რაოდენობის
SELECT * FROM data LIMIT 67
// BETWEEN ორ რიცხვს შორის ფილტრცია
SELECT * FROM numbers WHERE number BETWEEN 67 AND 6767
