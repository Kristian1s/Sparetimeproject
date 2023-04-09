var express = require('express');
var router = express.Router();
var db = require("../models");
var MealService = require("../services/mealService");
var mealService = new MealService(db);
const { requiresAuth } = require('express-openid-connect');

// GET home page. 
router.get('/',requiresAuth(), function(req, res, next) {
  res.render('profile', {
    title: 'MealTracker',
    isAuthenticated: req.oidc.isAuthenticated()
  });
});

// Find meal mathing serachString
router.post('/findFood', async function(req,res,next){
  let searchString = req.body.search 
  let meals= await mealService.findMeal(searchString)
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(JSON.stringify(meals));

})

module.exports = router;
