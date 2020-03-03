exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: '1',
          username: 'Mom',
          password: '123',
          "first-name":"Lily",
          "last-name":"Potter",
          "email":"always@neverWithSnape.com"
        },
        {
          id: '2',
          username: 'GrandmaLucy',
          password: '123',
          "first-name":"Lucille",
          "last-name":"Ball",
          "email":"but@Ricky.com"
        },
        {
          id: '3',
          username: 'AuntieEdna',
          password: '123',
          "first-name":"Edna",
          "last-name":"Mole",
          "email":"Edna@iMakeSuperSuits.super"
        }
      ]);
    });
};
