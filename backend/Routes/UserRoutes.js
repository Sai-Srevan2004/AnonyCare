const express = require('express');
const { auth } = require('../Middleware/Auth');

const Router = express.Router(); // Correctly initialize the Router instance
const { sendOtp, signUp, login, getAllUserDetails } = require('../Controllers/UserController');

// Define the routes
Router.post('/signup', signUp);
Router.post('/login', login);
Router.post('/sendotp', sendOtp);
Router.get('/getuserdetails', auth, getAllUserDetails);

module.exports = Router;
