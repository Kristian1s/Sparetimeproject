var express = require('express');
var router = express.Router();
var db = require("../models");
const types = require('../models/types');
var MealService = require("../services/mealService");
var mealService = new MealService(db);


/* GET home page. */
router.get('/', async function(req, res, next) {
    const meals = await mealService.get()
  res.render('meals', {meals: meals, user: req.user});
});

router.post('/', async function(req,res,next){
 let name = req.body.MealName;
 let type = req.body.MealType;
 let calories = req.body.Calories;
 let protein = req.body.Protein;
 await mealService.createMeal(name, type, calories, protein)
 res.end();
})
module.exports = router;
