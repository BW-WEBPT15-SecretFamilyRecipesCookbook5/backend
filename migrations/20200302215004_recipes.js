
exports.up = function(knex) {
    return knex.schema

        .createTable('recipes', recipes => {
            recipes.increments('id')
                .notNullable()
                .unique();
            recipes.string('title', 32)
                .notNullable()
                .unique();
            recipes.string('recipe_image_src');
            recipes.string('author', 32);
            recipes.string('category_id')
                .notNullable();
            recipes.string('instructions');
            recipes.string('directions');
            recipes.string('description');
            recipes.string('user_id');P
            recipes.string('notes');

            recipes.primary(['recipe_id', 'user_id'])
        })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes');
  };
