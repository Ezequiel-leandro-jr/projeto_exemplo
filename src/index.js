//importando e habilitando a biblioteca express, inserindo-a numa variavel
const express = require('express');

//variável app recebendo a biblioteca express
const app = express();

//chamada da variável app.listen indicando se o servidor foi iniciado
app.listen(4444);

//método get para retornar a apresentação
app.get('/exemplo', (request, response) => {
    console.log('server OK');
    return response.send('Olá, meu nome é Ezequiel e este é meu primeiro servidor criado!');
});