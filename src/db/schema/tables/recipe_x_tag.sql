create table if not exists recipe_x_tags (
    recipe_id int not null references recipe(id),
    tag_id int not null references tag(id),
    primary KEY(recipe_id, tag_id)
);