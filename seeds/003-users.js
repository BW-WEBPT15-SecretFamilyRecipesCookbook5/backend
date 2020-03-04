exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: '1',
          username: 'Harry',
          password: '123'
        },
        {
          id: '2',
          username: 'Hermione',
          password: '123'
        },
        {
          id: '3',
          username: 'Ron',
          password: '123'
        }
      ]);
    });
};