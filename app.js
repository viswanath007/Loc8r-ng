require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');
const config = require('./config/database');

require('./app_api/models/locations');

// var routes = require('./routes/locations');
var routesApi = require('./app_api/routes/locations');



// // connect to DB
// mongoose.connect(config.dbURI);

// // on Connection
// mongoose.connection.on('connected', () => {
//   console.log('Connected to database ' + config.dbURI);
// });

// // on Error
// mongoose.connection.on('error', (err) => {
//   console.log('Database Error: ' + err);
// });


const app = express();

const users = require('./app_api/controllers/users');


// port number
const port = process.env.PORT || 3000;

// cors middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));


// bodyparser 
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);
app.use('/api', routesApi);

// index route
app.get('/', (req, res) => {
  res.send('Invalid End Point!');
});

// Non Existed routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});


// start server
app.listen(port, () => {
  console.log('Server is running on  port ' + port);
});