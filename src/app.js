const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.options('*', cors({
    origin: ['http://betheheroeliandro.herokuapp.com'],
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    exposedHeaders: ['Access-Control-Allow-Origin'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(cors());
app.use(routes);
app.use(errors());

module.exports = app;