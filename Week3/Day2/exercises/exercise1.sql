
-- CREATE TABLE items (
-- item_id SERIAL PRIMARY KEY,
-- item_name VARCHAR(50) NOT NULL,
-- item_price SMALLINT NOT NULL
-- );

-- CREATE TABLE customers (
-- customer_id SERIAL PRIMARY KEY,
-- customer_first_name VARCHAR(50) NOT NULL,
-- customer_last_name VARCHAR(50) NOT NULL
-- );

-- INSERT INTO items (
-- item_name, item_price)
-- VALUES
-- ('Small Desk', 100),
-- ('Large Desk', 300),
-- ('Fan', 80);


-- INSERT INTO customers (
-- customer_first_name, customer_last_name)
-- VALUES
-- ('Greg', 'Jones'),
-- ('Sandra', 'Jones'),
-- ('Scott', 'Scott'),
-- ('Trevor', 'Green'),
-- ('Melanie', 'Johnson');

-- select * from items ORDER BY item_price ASC --1)

-- select * from items WHERE item_price >= 80 ORDER BY item_price DESC --2)

-- ALTER TABLE customers
-- DROP CONSTRAINT PRIMARY KEY;

-- select customer_first_name from customers ORDER BY customer_first_name ASC FETCH FIRST 3 ROWS ONLY

--3)

-- SELECT customer_last_name from customers ORDER BY customer_last_name DESC --4)
-- Select * from customers



