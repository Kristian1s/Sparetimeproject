var express = require('express');
var router = express.Router();
const { requiresAuth } = require('express-openid-connect');

/* GET home page. */
router.get('/',requiresAuth(), function(req, res, next) {
  res.render('profile', {
    title: 'MealTracker',
    isAuthenticated: req.oidc.isAuthenticated()
  });
});

module.exports = router;
