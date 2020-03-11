exports.up = function(knex) {
    return knex.schema
      .createTable('users', tbl => {
          tbl.increments('id');
          tbl.string('username').notNullable().unique();
          tbl.string('password').notNullable();
      })

      .createTable('category', tbl => {
          tbl.increments('id');
          tbl.string('category_name', 32).notNullable().unique();
      })

      .createTable('recipes', tbl => {
          tbl.increments('id');
          tbl.string('title').notNullable();
          tbl.string('image_src');
          tbl.string('author');
          tbl.string('instructions');
          tbl.string('user_id').notNullable();
          tbl.string('category');
          tbl.string('ingredients')
          tbl
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
      });
      
  };
  
  exports.down = function(knex) {
      return knex.schema
          .dropTableIfExists('users')
          .dropTableIfExists('ingredients')
          .dropTableIfExists('category')
          .dropTableIfExists('recipes')
          .dropTableIfExists('recipe_ingredients');
  };