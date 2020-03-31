const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors({
    origin: ['http://betheheroeliandro.herokuapp.com/'],
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    exposedHeaders: ['Access-Control-Allow-Origin'],
    allowedHeaders: ['Content-Type'],
    preflightContinue: [false]
}));
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;