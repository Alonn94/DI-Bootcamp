-- CREATE TABLE actors (
-- actor_id SERIAL PRIMARY KEY,
-- first_name VARCHAR(50) NOT NULL,
-- last_name VARCHAR (200) NOT NULL,
-- age DATE not NULL,
-- number_oscars SMALLINT NOT NULL)


-- SELECT first_name, age FROM actors

-- INSERT INTO actors(first_name, last_name, age, number_oscars)
-- VALUES
-- ('Matt','Damon','08/10/1970',5)


-- INSERT INTO actors(first_name,last_name, age, number_oscars)
-- VALUES
-- ('Jennifer','Aniston','11/02/1969',5),
-- ('Gal','Gadot','04/30/1985',2),
-- ('Brad','Pitt','12/04/1963',2)

-- INSERT INTO actors(first_name,last_name, age, number_oscars)
-- VALUES
-- ('Anya','Taylor-Joy','04/16/1996',0),
-- ('Tom','Hanks','07/9/1956',2)

-- INSERT INTO actors(first_name,last_name, age, number_oscars)
-- VALUES
-- ('Will','Smith','09,25,1968',2)
-- SELECT first_name, number_oscars FROM actors WHERE number_oscars>3


-- SELECT first_name, number_oscars FROM actors where first_name = 'Gal' or first_name='Matt' ORDER BY number_oscars


-- UPDATE actors 
-- SET first_name = 'Nathalie',
-- last_name = 'Portman'
-- WHERE
-- first_name= 'Gal' AND last_name='Gadot';
-- DELETE FROM actors WHERE first_name=Brad;


-- DELETE FROM actors WHERE first_name='Brad';

-- ALTER TABLE actors ADD COLUMN country VARCHAR(100);

-- UPDATE actors
-- SET country = 'USA'
-- WHERE 
-- country is NULL;


--1)
-- SELECT 
-- COUNT(actor_id)
-- FROM actors ;

-- SELECT * FROM actors
-- Either you can use the count method that counts the column of the table, or just look at the number of colums in the table on the left side 

--2)

-- INSERT INTO actors(first_name,last_name, age, number_of_oscars)
-- VALUES
-- ('Lady','Gaga','03/03/1986',0)


-- DELETE FROM actors WHERE first_name='Lady';
INSERT INTO actors(first_name,last_name, age, number_of_oscars)
VALUES
('Lady','Gaga','',);
SELECT * FROM actors

--it does not let me add the actor, syntax error bc the information is missing

