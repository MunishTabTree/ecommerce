// Includes
require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const fileUpload = require('express-fileupload');

// Set View Engine as EJS
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'static')));

// File Upload Default Configuration
app.use(fileUpload());

// Middleware Configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
/**
 * Database Configuration
 */
const db = require('./model');
db.sequelize.sync()


/**
 * Routing Configuration
 * 1. User Routes
 * 2. Admin Routes
 */
app.use('/',require('./routes/user.route'));
app.use('/admin',require('./routes/admin.route'));


// Listen Function to start the application
app.listen(process.env.PORT, () => { console.log(`Process Running at port ${process.env.PORT}`) })
