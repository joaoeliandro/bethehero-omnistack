const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(cors({
    origin: ['http://betheheroeliandro.herokuapp.com'],
    exposedHeaders: ['Access-Control-Allow-Origin'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
app.use(routes);
app.use(errors());

module.exports = app;