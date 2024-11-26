const express=require('express')
const { getMessage, sendMessage }= require("../Controllers/MessageController");
const {auth}=require('../Middleware/Auth')

const Router = express.Router();

Router.post('/send/:id',auth,sendMessage);
Router.get('/getmessage/:id',auth,getMessage)

module.exports=Router