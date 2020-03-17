const express = require('express');
const app = express();
const expressLayout = require('express-ejs-layouts');
const indexRoute = require('./routes/index');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(
  process.env.DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  },
  () => console.log('connected to DB')
);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayout);
app.use(express.static('public'));

app.use('/', indexRoute);

app.listen(5000, () => console.log('Listening at PORT 5000'));
