const express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      contactlist = require('./routes/contactlist');

const app = express();

//connect to mongodb general is the database name
mongoose.connect('mongodb://localhost/general');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api/contactlist',contactlist);

app.listen(4000,() => console.log('Backend Server:            http://localhost:4000/'));

