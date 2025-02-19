-- Part1

-- CREATE TABLE Customer (
-- id Serial Primary Key ,
-- first_name VARCHAR(50) NOT NULL,
-- last_name VARCHAR (50) NOT NULL
-- )

-- CREATE TABLE Customer_profile(
-- id Serial Primary key,
-- isLoggedIn BOOLEAN DEFAULT FALSE,
-- customer_id INTEGER,
-- FOREIGN KEY (customer_id) REFERENCES Customer (id) on DELETE CASCADE
-- )

-- INSERT INTO Customer(first_name, last_name) 
-- VALUES
-- ('John', 'Doe'),
-- ('Jerome', 'Lalu'),
-- ('Lea', 'Rive');

-- INSERT INTO Customer_profile(isLoggedIN,customer_id)
-- VALUES
-- (TRUE, (SELECT id from Customer WHERE first_name = 'John')),
-- (FALSE, (SELECT id from Customer WHERE first_name = 'Jerome'))

-- SELECT * from Customer_profile

-- SELECT customer.first_name
-- from customer
-- JOIN Customer_profile on customer_profile.id = customer.id
-- WHERE Customer_profile.isLoggedIn = True

-- SELECT customer.first_name, customer_profile.isLoggedIn
-- from Customer
-- left join customer_profile on customer.id = customer_profile.id

-- SELECT COUNT (*) as notloggedin
-- from customer 
-- left join customer_profile on customer.id = customer_profile.id
-- WHERE customer_profile.isLoggedIn= FALSE


-- Part2

-- CREATE TABLE Book (
-- book_id SERIAL PRIMARY KEY,
-- title VARCHAR (50) NOT NULL,
-- Author Varchar (50) NOT NULL
-- )

-- Select * from Book

-- INSERT INTO Book (title, author)
-- VALUES
-- ('Alice In Wonderland', 'Lewis Carroll'),
-- ('Harry Potter', 'J.K Rowling'),
-- ('To Kill a Mockingbird', 'Harper Lee');

-- Select * from Book

-- Select * from Book
-- CREATE TABLE Student (
-- student_id SERIAL PRIMARY KEY,
-- name VARCHAR(50) NOT NULL UNIQUE,
-- age INT CHECK (age <= 15)
-- )

-- Select * from student

-- INSERT INTO Student (name, age) VALUES
-- ('John', 12),
-- ('Lera', 11),
-- ('Patrick', 10),
-- ('Bob', 14)

-- Select * from student

-- CREATE TABLE Library (
-- book_fk_id INTEGER NOT NULL,
-- student_fk_id INTEGER NOT NULL,
-- borrowed_date DATE,
-- Foreign key (book_fk_id) REFERENCES Book(book_id) on DELETE CASCADE ON UPDATE CASCADE,
-- Foreign key (student_fk_id)REFERENCES Student(student_id) on DELETE CASCADE ON UPDATE CASCADE
-- )

-- Select * from library


-- INSERT into Library (book_fk_id, student_fk_id, borrowed_date)
-- Values
-- ((Select book_id from book WHERE title='Alice In Wonderland'),
-- (Select student_id from student WHERE name ='John'),'02/15/2022'),
-- ((Select book_id from book WHERE title='To Kill a Mockingbird'),
-- (Select student_id from student WHERE name='Bob'),'02/03/2021'),
-- ((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
-- (SELECT student_id FROM Student WHERE name = 'Lera'), '2021-05-23'),
-- ((SELECT book_id FROM Book WHERE title = 'Harry Potter'),
-- (SELECT student_id FROM Student WHERE name = 'Bob'), '2021-08-12')


-- SELECT * FROM Library;

-- SELECT student.name, book.title
-- from library 
-- join student on library.student_fk_id = student.student_id
-- join book on library.book_fk_id = book.book_id

-- SELECT AVG (student.age) as average_age
-- from library 
-- join student on library.student_fk_id = student.student_id
-- join book on library.book_fk_id = book.book_id
-- WHERE book.title = 'Alice In Wonderland'

-- DELETE from student where NAME = 'Patrick'

-- DELETE from student where NAME = 'Lera' -- I delete Lera because there was no patrick inserted to begin with - i mixed up the name, and added two BOBS

Select * from library













