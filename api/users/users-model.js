const db = require('../../data/dbConfig.js');

const getById = (id) => {
    return db('users')
        .where({id: id})
        .first();
}

const getByUsername = (username) => {
    return db('users')
        .where({username: username})
        .first();
}

const insert = (user) => {
    return db('users')
        .insert(user)
        .then(( [id] ) => getById(id));
}

module.exports = {
    getById,
    getByUsername,
    insert
}
