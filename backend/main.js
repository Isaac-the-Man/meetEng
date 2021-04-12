'use strict';

const express = require('express');
const config = require('./config.json');
const db = require('./modules/db.js');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const apiRouter = require('./modules/api.js')(db);
const userRouter = require('./modules/users');
const authRouter = require('./modules/auth');

const app = express();

// middleware
app.use(bodyParser.json());
app.use(morgan('combined'));

// mongoose
mongoose.connect('mongodb://db:27017/meeteng', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log("Connected to database.");
}).catch((e) => {
    console.error("Error connecting to database.")
    console.error(e);
});

app.get('/api', (req, res) => {
  res.send('Nothing to see here :eyes:');
});

app.use('/api/form', apiRouter);

app.use('/api/user', userRouter);

app.use('/api/auth', authRouter);

app.listen(config.PORT, config.HOST, () => {
    console.log(`Running on http://${config.HOST}:${config.PORT}`);
});
