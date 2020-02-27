const express = require('express');
const Users = require('../users/users-model.js');

const router = express.Router();

// GET api/users/:id
router.get('/:id', (req, res) => {
    const { id } = req.params;

    Users.getById(id)
        .then((user) => {
            res.status(200).json(user)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: 'Could not retrieve user using getById in auth-router.js'});
        })
})

module.exports = router;