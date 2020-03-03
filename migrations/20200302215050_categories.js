
exports.up = function(knex) {
  return knex.schema

    .createTable('category', category => {
        category.increments();
            
        category.string('category_name', 64)
            .notNullable()
            .unique();
    })

};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('category');
  };
