
exports.up = function(knex) {
    return knex.schema
  
    .createTable('users', users => {
        users.increments('id')
            .notNullable()
            .unique();
        users.string('username', 32)
            .notNullable()
            .unique();
        users.string('password', 32)
            .notNullable();
        users.string('first-name', 32);
        users.string('last-name', 32);
        users.string('email', 32);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
  };
