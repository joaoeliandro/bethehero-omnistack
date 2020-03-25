const express = require('express');

const app = express();

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

app.listen(3333);