var express = require('express');
var router = express.Router();
var db = require("../models");
var MealService = require("../services/mealService");
var mealService = new MealService(db);


/* GET home page. */
router.get('/', async function(req, res, next) {
    const meals = await mealService.get()
  res.render('meals',
   {meals: meals,
    isAuthenticated: req.oidc.isAuthenticated()
  });
});

router.post('/', async function(req,res,next){
  // #swagger.tags = ['Meals']
  // #swagger.description = "Creates a new meal."
  /* #swagger.parameters['body'] =  {
    "name": "body",
    "typeId": "body",
    "calories": "body",
    "protein": "body",
      "schema": {
        $ref: "#/definitions/Meal"
      }
    }
  */
 let name = req.body.MealName;
 let type = req.body.MealType;
 let calories = req.body.Calories;
 let protein = req.body.Protein;
 await mealService.createMeal(name, type, calories, protein)
 res.end();
})
module.exports = router;
