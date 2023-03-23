var express = require('express');
var router = express.Router();
const { requiresAuth } = require('express-openid-connect');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', {
     title: 'MealTracker',
     isAuthenticated: req.oidc.isAuthenticated()
    });
});



router.get('/login',requiresAuth , function(req, res, next) {
    res.render('login', {
       title: 'MealTracker',
      userProfile: JSON.stringify(req.oidc.user, null, 2)
      });
  });
  module.exports = router;
  