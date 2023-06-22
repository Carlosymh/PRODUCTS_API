const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');


// API | router

router.get('/', productsController.getImages);


module.exports = router