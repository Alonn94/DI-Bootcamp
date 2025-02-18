-- select * from customer --1

-- Select (first_name, last_name) as "full_name" from customer --2


-- Select distinct create_date from customer --3

-- Select * from customer order by first_name DESC --4

-- Select film_id, title, description, release_year, rental_rate from film Order by rental_rate ASC --5


-- select address,phone from address WHERE district= 'Texas' --6

-- select * from film WHERE film_id = 15 or film_id=150. --7

-- Select film_id, title, description,length, rental_rate from film WHERE title= 'Cat and Dogs' --8

-- Select film_id, title, description,length, rental_rate from film WHERE title LIKES 'Ca%' --9


-- Select * from film order by rental_rate ASC FETCH first 10 rows only --10;

-- Select * from film order by rental_rate ASC FETCH next 10 rows only --11

-- SELECT customer.first_name, customer.last_name, payment.amount, payment.payment_date
-- FROM customer
-- JOIN payment
-- ON customer.customer_id = payment.customer_id

-- Select * from film WHERE film_id not in ( select film_id from inventory) -- 12

-- Select * from city

-- SELECT city.city, country.country
-- FROM city
-- left JOIN country
-- ON city.country_id = country.country_id
