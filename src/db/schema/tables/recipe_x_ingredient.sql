create table if not exists recipe_x_ingredient (
    recipe_id int not null,
    ingr_id int not null,
    primary KEY(recipe_id, ingr_id),
    quantity DECIMAL(6, 2),
    unit_id int
);