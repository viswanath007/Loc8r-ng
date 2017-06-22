require('dotenv').config();

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const passport = require('passport');
const path = require('path');
const config = require('./config/database');

// Connect to Database
require('./app_api/models/locations');

// Routes
const routesApi = require('./app_api/routes/locations');
const users = require('./app_api/controllers/users');
const reviews = require('./app_api/controllers/reviews');

const app = express();

// port number
const port = process.env.PORT || 3000;

// cors middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// bodyparser Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.use('/users', users);
app.use('/api', routesApi);

// Other Routes
const routes = require('./app_api/controllers/reviews');
routes(app);

// start server
app.listen(port, () => {
  console.log('Server is running on  port ' + port);
});