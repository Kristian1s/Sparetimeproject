var express = require('express');
var router = express.Router();
var db = require("../models");
var MealService = require("../services/mealService");
var mealService = new MealService(db);
const { requiresAuth } = require('express-openid-connect');

/* GET home page. */
router.get('/',requiresAuth(), function(req, res, next) {
  res.render('profile', {
    title: 'MealTracker',
    isAuthenticated: req.oidc.isAuthenticated()
  });
});

router.get('/findFood', async function(req,res,next){
  let searchString = req.body.search 
  await mealService.findMeal(searchString)
})

module.exports = router;
