
-- THE TABLE WITH THE FK (FOREIGN KEY) IS THE CHILD
-- INSERTING DATA ON THE CHILD TABLE 

-- INSERT INTO movies (movie_title, movie_story, actor_playing_id)
-- VALUES
-- ('Good Will Hunting', 
--     'Written by Affleck and Damon, the film follows 20-year-old South Boston janitor Will Hunting',
-- (SELECT actor_id FROM actors WHERE first_name = 'Matt' AND last_name = 'Damon')),
--  ('Oceans Eleven', 
--     'American heist film directed by Steven Soderbergh and written by Ted Griffin.', 
-- (SELECT actor_id from actors WHERE first_name='Matt' AND last_name='Damon'));


-- CREATE TABLE producers (
-- producer_id SERIAL,
-- first_name VARCHAR (100)Not NULL,
-- last_name VARCHAR (100) Not NULL,
-- the_id_of_a_movie INTEGER,
-- actor_playing_id INTEGER,
-- PRIMARY KEY (producer_id),
-- FOREIGN KEY (the_id_of_a_movie) REFERENCES movies (movie_id)
-- );

-- INSERT INTO producers (first_name,last_name, the_id_of_a_movie)
-- VALUES
-- ('Steven','Spielberg',(SELECT movie_id from movies WHERE movie_title = 'Good Will Hunting'));

-- ALTER TABLE producers
-- DROP COLUMN actor_playing_id;

SELECT * from producers
