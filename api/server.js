const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRouter = require('./auth/auth-router.js');
const recipesRouter = require('./recipes/recipes-router.js');
const usersRouter = require('./users/users-router.js');



const server = express();


server.use(express.json());
server.use(helmet());
server.use(cors());

const whiteList = [
    "http://localhost:3000",
    "http://localhost:3003",
    "https://secret-familyrecipes.netlify.com/"
];

const corsOptions = {
    credentials: true,
    origin: 'http://localhost:3000'
};

server.use(cors(corsOptions));


server.use('/api/auth', authRouter);
server.use('/api/recipes/', recipesRouter);
server.use('/api/users', usersRouter);


module.exports = server;
