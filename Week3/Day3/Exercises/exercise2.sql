-- UPDATE film -- 1)
-- Set language_id = 5
-- WHERE film_id= 147

-- UPDATE film 
-- Set language_id = 6
-- WHERE film_id= 299


-- Select * from customer -- 2)foreign key of store and address are stored in customer table - when inserting new customer, store_id and address_id must already exist in their table

-- Select * from customer_review_new -- 3)table can be dropped, customerreview table is a child table, so it can be deleted without consideration

-- SELECT COUNT(*) AS outstanding_rentals --4)
-- FROM rental
-- WHERE return_date IS NULL;
 
-- SELECT film.film_id, film.title, film.rental_rate --5
-- FROM rental   
-- JOIN inventory 
-- ON rental.inventory_id = inventory.inventory_id
-- JOIN film ON inventory.film_id = film.film_id
-- WHERE rental.return_date IS NULL
-- ORDER BY film.rental_rate DESC
-- LIMIT 30;


-- Select film.film_id, film.title, film.description     --6
-- from film 
-- join film_actor on film.film_id = film_actor.film_id
-- join actor on film_actor.actor_id = actor.actor_id
-- WHERE actor.first_name = 'Penelope' and actor.last_name = 'Monroe'
-- and film.description ILIKE '%sumo%'

-- select * from film


-- Select film.film_id,film.title,film.length, film.rating
-- from film
-- join film_category on film.film_id = film_category.film_id
-- join category on film_category.category_id = category.category_id
-- WHERE category.name = 'Documentary' 
-- and film.length < 60
-- and film.rating = 'R'

-- Select film.film_id, film.title, payment.amount, rental.return_date
-- from rental 
-- join customer on rental.customer_id = customer.customer_id
-- join payment on rental.rental_id= payment.rental_id
-- join inventory on rental.inventory_id = inventory.inventory_id 
-- join film on inventory.film_id = film.film_id
-- Where customer.first_name = 'Matthew' and customer.last_name = 'Mahan'
-- and payment.amount > 4
-- and rental.return_date BETWEEN '07/28/2005' and '08/01/2005'

-- SELECT film.film_id, film.title, film.description, film.replacement_cost
-- FROM rental 
-- JOIN customer  ON rental.customer_id = customer.customer_id
-- JOIN inventory ON rental.inventory_id = inventory.inventory_id
-- JOIN film ON inventory.film_id = film.film_id
-- WHERE customer.first_name = 'Matthew' AND customer.last_name = 'Mahan'
-- AND (film.title ILIKE '%boat%' OR film.description ILIKE '%boat%')
-- ORDER BY film.replacement_cost DESC
-- LIMIT 1;
