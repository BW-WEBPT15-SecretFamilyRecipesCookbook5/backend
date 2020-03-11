const bcrypt = require('bcryptjs');
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          username: 'katniss',
          password: bcrypt.hashSync('everdean', 10)
        },
        {
          id: 2,
          username: 'Harry',
          password: bcrypt.hashSync('Potter', 10)
        }
      ]);
    });
};