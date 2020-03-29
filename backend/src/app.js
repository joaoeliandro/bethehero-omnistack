const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
// app.use(cors({
//     origin: 'http://joaobetehero.heroku.com'
// }));
app.use(express.json());
/**
 * Tipos de parametros
 * 
 * Query Params: parametros nomeados enviados na rota após "?"
 *        serve para filtros, paginação
 * 
 * Route Params: paramentros utilizados para identificar recursos
 * 
 * Request Body: corpo da requisição, utilizado para criar ou alterar recursos
 */
app.use(routes);
app.use(errors());

module.exports = app;