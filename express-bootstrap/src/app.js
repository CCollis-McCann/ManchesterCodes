const { jokesController, randomJokeController, personalJokeController } = require('./controllers');
const express = require('express');

const app = express();
app.use(express.static('public'));

app.get('/jokes', jokesController);
app.get('/jokes/random', randomJokeController);
app.get('/jokes/personal/:first/:last', personalJokeController);

module.exports = app;
