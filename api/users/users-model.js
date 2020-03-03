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
    db('users')
        .insert(user)
        .then(([id]) => this.getById(id));
}

module.exports = {
    getById,
    getByUsername,
    insert
}
