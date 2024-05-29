create table if not exists recipe_x_ingredient (
    recipe_id int not null references recipe(id),
    ingr_id int not null references ingredient(id),
    primary KEY(recipe_id, ingr_id),
    quantity DECIMAL(6, 2),
    unit_id int references unit(id)
);