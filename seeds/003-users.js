exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: '1',
          username: 'Harry',
          password: bcrypt.hashSync('1234', 10)
        },
        {
          id: '2',
          username: 'Hermione',
          password: bcrypt.hashSync('1234', 10)
        },
        {
          id: '3',
          username: 'Ron',
          password: bcrypt.hashSync('1234', 10)
        }
      ]);
    });
};