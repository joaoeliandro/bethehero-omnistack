const express = require('express');

app.post('/u', (request, response) => {
    const params = request.body;

    console.log(params);
    
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Joao Eliandro'
    });
});
