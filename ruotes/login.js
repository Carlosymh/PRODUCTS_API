const express = require('express');
const login  = require('../login/login');
const router = express.Router();


// API | router

router.post('/',  login.login);


module.exports = router