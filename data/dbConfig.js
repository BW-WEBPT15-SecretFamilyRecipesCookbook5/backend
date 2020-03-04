const knex = require('knex');

const  env = process.env.development;
const knexConfig = require('../knexfile');

const db = knex(knexConfig[env])

module.exports = db;