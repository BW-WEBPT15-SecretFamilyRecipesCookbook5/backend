const db = require('../../data/dbConfig.js');

// .createTable('recipes', recipes => {
//     recipes.increments('id')
//         .notNullable()
//         .unique();
//     recipes.string('title', 32)
//         .notNullable()
//         .unique();
//     recipes.string('recipe_image_src');
//     recipes.string('author', 32);
//     recipes.string('category_id')
//         .notNullable();
//     
//     recipes.string('directions');
//     recipes.string('description');
//     recipes.string('user_id');
//     recipes.string('notes');
// })
module.exports = {
    add,
    edit,
    remove,
    findById, 
    findByUser
    //findCategory,
    //addIngredients,
};

function findByUser(user_id) {
    return db('recipes')
        // 
};

function findById(id) {
    return db('recipes')
        .select([
            'recipes.id',
            'recipes.title',
            'recipes.source',
            'category.category_name',
            'ingredients.name as ingredient_name',
            'recipe_ingredients.measurement',
            'recipes.instructions',
        ])
        .join('category', 'category.id', 'recipes.category_id')
        .join(
            'recipe_ingredients', 
            'recipes.id', 
            'recipe_ingredients.recipe_id', 
        )
        .join(
            'ingredients',
            'ingredients.id',
            'recipe_ingredients.ingredient_id',
        )
        .where({'recipes.id': id})
        .first();
};

function add(recipe) {
    return db('recipes')
        .join('category', 'category.id', 'recipes.category_id')
        .join(
            'recipe_ingredients', 
            'recipes.id', 
            'recipe_ingredients.recipe_id', 
        )
        .join(
            'ingredients',
            'ingredients.id',
            'recipe_ingredients.ingredient_id',
        )
        .insert(recipe)
        .then(([id]) => {
            return findById(id);
        });
};

function edit(id, recipe) {
    return db('recipes')
        .join('category', 'category.id', 'recipes.category_id')
        .join(
            'recipe_ingredients', 
            'recipes.id', 
            'recipe_ingredients.recipe_id', 
        )
        .join(
            'ingredients',
            'ingredients.id',
            'recipe_ingredients.ingredient_id',
        )
        .where({id})
        .update(recipe)
        .then(([id]) => {
            return findById(id);
        });

};

function remove(id) {
    return db('recipes')
        .where({id})
        .delete()
};