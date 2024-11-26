const express = require('express');
const { auth } = require('../Middleware/Auth');

const Router = express.Router(); // Correctly initialize the Router instance
const { sendOtp, signUp, login, getOtherUsers } = require('../Controllers/UserController');

// Define the routes
Router.post('/signup', signUp);
Router.post('/login', login);
Router.post('/sendotp', sendOtp);
Router.get('/getotherusers', auth, getOtherUsers);

module.exports = Router;
