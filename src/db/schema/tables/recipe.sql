create sequence if not exists recipe_id_seq;
CREATE TABLE IF NOT EXISTS recipe (
    id INT primary key default nextval('recipe_id_seq'),
    name varchar(32) not null,
    user_id INT not null,
    description TEXT,
    instructions text,
    prep_time int,
    cook_time int,
    serving_size int,
    views int,
    adds int
);