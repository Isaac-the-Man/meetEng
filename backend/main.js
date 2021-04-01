'use strict';

const express = require('express');
const config = require('./config.json');
const db = require('./modules/db.js');
const apiRouter = require('./modules/api.js')(db);

const app = express();
app.get('/api', (req, res) => {
  res.send('Nothing to see here :eyes:');
});

app.use('/api/form', apiRouter);

app.listen(config.PORT, config.HOST, () => {
    console.log(`Running on http://${config.HOST}:${config.PORT}`);
});
