// routes/pizza.js
const express = require('express');
const router = express.Router();
const pizzaController = require('../controllers/pizzaController');

router.get('/options', pizzaController.getPizzaOptions);

module.exports = router;
