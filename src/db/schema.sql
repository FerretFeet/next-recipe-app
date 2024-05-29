DROP DATABASE IF EXISTS recipe_app;
CREATE DATABASE recipe_app;

\c recipe_app

CREATE SEQUENCE IF NOT EXISTS user_id_seq START 1;
create table if not exists user_account (
    id INT primary key default nextval('user_id_seq'),
    username varchar(16) not null unique
);

create sequence if not exists recipe_id_seq;
CREATE TABLE IF NOT EXISTS recipe (
    id INT primary key default nextval('recipe_id_seq'),
    recipe_name varchar(32) not null,
    user_id INT not null references user_account(id),
    description TEXT,
    instructions text,
    prep_time int,
    cook_time int,
    serving_size int
);

create sequence if not exists ingredient_id_seq;
create table if not exists ingredient (
    id int primary key default nextval('ingredient_id_seq'),
    ingr_name varchar(16) not null unique
);

create sequence if not exists unit_id_seq;
create table if not exists unit (
    id int primary key default nextval('unit_id_seq'),
    unit varchar(16) not null unique
);

create sequence if not exists tag_id_seq;
create table if not exists tag (
    id int primary key default nextval('tag_id_seq'),
    tag_name varchar(16) not null unique
);

create table if not exists recipe_x_tags (
    recipe_id int not null references recipe(id),
    tag_id int not null references tag(id),
    primary KEY(recipe_id, tag_id)
);

create table if not exists recipe_x_ingredient (
    recipe_id int not null references recipe(id),
    ingr_id int not null references ingredient(id),
    primary KEY(recipe_id, ingr_id),
    quantity DECIMAL(6, 2),
    unit_id int references unit(id)
);
