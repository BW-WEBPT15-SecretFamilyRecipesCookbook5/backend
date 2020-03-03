
exports.up = function(knex) {
  return knex.schema
    .createTable('users', tbl => {
        tbl.increments('id')
            .notNullable()
            .unique();
        tbl.string('username', 32)
            .notNullable()
            .unique();
        tbl.string('password', 32)
            .notNullable();
        tbl.string('first-name', 32);
        tbl.string('last-name', 32);
        tbl.string('email', 32);
    })
    .createTable('recipes', tbl => {
        tbl.increments('id')
            .notNullable()
            .unique();
        tbl.string('title', 32)
            .notNullable()
            .unique();
        tbl.string('recipe_image_src');
        tbl.string('author', 32);
        tbl.string('category_id')
            .notNullable();
        tbl.string('instructions', 32);
        tbl.string('directions');
        tbl.string('description');
        tbl.string('user_id');
        tbl.string('notes');
    })
    .createTable('category', tbl => {
        tbl.increments('id')
            .notNullable()
            .unique();
        tbl.string('category_name', 32)
            .notNullable()
            .unique()
    })
};

exports.down = function(knex) {
  
};
