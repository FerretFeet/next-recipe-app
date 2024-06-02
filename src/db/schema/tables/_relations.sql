ALTER TABLE recipe
    ADD CONSTRAINT fk_recipe_user 
    FOREIGN KEY (user_id) 
    REFERENCES user_account(id);

ALTER TABLE ingredient
    ADD CONSTRAINT fk_ingredient_recipe 
    FOREIGN KEY (recipe_id) 
    REFERENCES recipe(id);

ALTER TABLE recipe_x_tag
    ADD CONSTRAINT fk_rxt_recipe 
    FOREIGN KEY (recipe_id) 
    REFERENCES recipe(id),
    ADD CONSTRAINT fk_rxt_tag 
    FOREIGN KEY (tag_id) 
    REFERENCES tag(id);

ALTER TABLE recipe_x_ingredient
    ADD CONSTRAINT fk_rxi_recipe
    FOREIGN KEY (recipe_id) 
    REFERENCES recipe(id),
    ADD CONSTRAINT fk_rxi_ingredient
    FOREIGN KEY (ingr_id) 
    REFERENCES ingredient(id),
    ADD CONSTRAINT fk_rxi_unit
    FOREIGN KEY (unit_id) 
    REFERENCES unit(id);