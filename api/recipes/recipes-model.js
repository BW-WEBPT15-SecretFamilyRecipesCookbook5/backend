const db = require('../../data/dbConfig.js');

module.exports = {
    add,
    edit,
    remove,
    findById, 
    findByUser
    //***THESE ARE IDEAS FOR FUTURE RELEASE */
    //findCategory,
    //addIngredients,
};


//find any user by the user_id (foreign key to primary key of users table?)
function findByUser(user_id) {
    return db('recipes')
        .select(
            'recipes.id',
            'recipes.title',
            'recipes.img_source',
            'category.category_name',
            'ingredients.name',
            'recipe_ingredients.measurement',
            'recipes.directions',
            'recipes.user_id'
        )
        .join(
            'category', 
            'category.id', 
            'recipes.category_id')
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
        .where({
            user_id: user_id
        })
};

//find any recipe by id (primary id)
function findById(id) {
    return db('recipes')
        .select([
            'recipes.id',
            'recipes.title',
            'recipes.image_source',
            'category.category_name',
            'recipes.ingredients as ingredient_name',
            'recipes.directions',
            'recipes.user_id'
        ])
        .join(
            'category', 
            'category.id', 
            'recipes.category_id'
            )
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
        .where({
            'recipes.id': id
        })
        .first();
};

function add(recipe) {
    return db('recipes')
        .insert(recipe)
        .then(([id]) => {
            console.log(id);
            return findById(id);
        });
};

function edit(id, recipe) {
    return db('recipes')
        .where({id})
        .update(recipe)
        .then(([id]) => {
            console.log(id);
            return findById(id);
        });
        
};

function remove(id) {
    return db('recipes')
        .where({id})
        .del()
};