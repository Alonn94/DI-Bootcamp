-- select name from language --1

-- select * from film

-- select * from language

-- Select film.title, film.description, language.name --2
-- from film
-- join language
-- on language.language_id = film.language_id



-- Select film.title, film.description, language.name --3
-- from film
-- right join language
-- on language.language_id = film.language_id


-- CREATE TABLE new_film (
-- nf_id SERIAL,
-- nf_name VARCHAR (100)Not NULL)



-- INSERT INTO new_film (nf_name).   --4
-- VALUES
-- ('Wicked'), ('Nosferatu')

-- Select * from new_film


-- CREATE TABLE customer_review (
-- review_id SERIAL,
-- film_id integer Not NULL,
-- language_id integer Not NULL,
-- title VARCHAR (50),
-- score INTEGER ,
-- review_text Text,
-- last_update Date Not NULL,
-- Primary Key (review_id),
-- Foreign Key (film_id) REFERENCES film (film_id) on DELETE CASCADE,
-- Foreign Key (language_id) REFERENCES language (language_id) on DELETE CASCADE)


-- CREATE TABLE customer_review_new (
-- review_id SERIAL,
-- nf_id integer Not NULL,
-- language_id integer Not NULL,
-- title VARCHAR (50),
-- score INTEGER ,
-- review_text Text,
-- last_update Date Not NULL,
-- Primary Key (review_id),
-- Foreign Key (nf_id) REFERENCES new_film (nf_id) on DELETE CASCADE,
-- Foreign Key (language_id) REFERENCES language (language_id) on DELETE CASCADE);
-- Select * from new_film

-- INSERT INTO customer_review_new (title,score,review_text,last_update, nf_id, language_id) 
-- VALUES ('Wicked',8, 'I love!!', '02/18/2025',3,1),
-- ('Nosferatu',7,'liked much, got scared once','02/18/2025',2,1)

Select * from customer_review_new -- review got deleted as well





