-- CREATE TABLE items (
-- item_id SERIAL PRIMARY KEY,
-- product_name VARCHAR(50) NOT NULL,
-- price SMALLINT NOT NULL)

-- INSERT INTO items (product_name,price)
-- VALUES
-- ('Small Desk',100);

-- INSERT INTO items (product_name,price)
-- VALUES
-- ('Large Desk',300),
-- ('Fan',80);
-- SELECT * FROM items

-- CREATE TABLE customers (
-- customer_id SERIAL PRIMARY KEY,
-- first_name VARCHAR(50) NOT NULL,
-- last_name VARCHAR(50) NOT NULL);


-- INSERT INTO customers (first_name,last_name)
-- VALUES
-- ('Greg','Jones'),
-- ('Sandra','Jones'),
-- ('Scott','Scott'),
-- ('Trevor','Green'),
-- ('Melanie','Johnson');

-- SELECT * FROM items --1
-- SELECT * FROM items WHERE price >80 --2
-- SELECT * FROM items WHERE price <=300 --3
-- SELECT * FROM customers WHERE  last_name = 'Smith' -- 4 empty table, bc no one with the name Smith exists
-- SELECT * FROM customers WHERE last_name = 'Jones' -- 5
-- SELECT * FROM customers WHERE first_name != 'Scott' -- 6





