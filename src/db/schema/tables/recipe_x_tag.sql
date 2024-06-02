create table if not exists recipe_x_tag (
    recipe_id int not null,
    tag_id int not null,
    primary KEY(recipe_id, tag_id)
);