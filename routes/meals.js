var express = require('express');
var router = express.Router();
var db = require("../models");
var MealService = require("../services/mealService");
var mealService = new MealService(db);


/* GET home page. */
router.get('/', async function(req, res, next) {
    const meals = await mealService.get()
  res.render('meals', {meals: meals});
});

module.exports = router;
