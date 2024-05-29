create sequence if not exists ingredient_id_seq;
create table if not exists ingredient (
    id int primary key default nextval('ingredient_id_seq'),
    name varchar(16) not null unique
    recipe_id int references recipe(id)
);