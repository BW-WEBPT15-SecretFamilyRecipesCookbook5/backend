
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          id: 1,
          title: 'macaroni',
          recipe_image_src:'https://images.unsplash.com/photo-1543339520-51ebace10a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
          author: 'Grandma Lucy',
          category_id: '2',
          directions: '1. Add water to pot, 2.Bring to boil, 3. Cook Macaroni, 4. Stir in cheese',
          user_id: '2'
        },
        {
          id: 2,
          title: 'cereal',
          recipe_image_src:'https://images.unsplash.com/photo-1506368197720-c242fdaa44dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
          author: 'mom',
          category_id: '1',
          directions: 'cereal first, then milk',
          user_id: '1'
        },
        {
          id: 3,
          title: 'rice',
          recipe_image_src:'https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
          author: 'mom',
          category_id: '2',
          directions: 'cook it',
          user_id: '2'
        }
      ]);
    });
};
