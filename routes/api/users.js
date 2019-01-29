var router = require('express').Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');

// Preload User objects on routes with ':user'
router.param('user', function(req, res, next, id) {
  User.findById(id)
    .then(function (user) {
      if (!user) { return res.sendStatus(404); }

      req.user = user;

      return next();
    }).catch(next);
});

/**
* Get all Users. /api/users
*/
router.get('/', function(req, res, next) {
  var query = {};
  var limit = 20;
  var offset = 0;

  if(typeof req.query.limit !== 'undefined'){
    limit = req.query.limit;
  }

  if(typeof req.query.offset !== 'undefined'){
    offset = req.query.offset;
  }

    return Promise.all([
      User.find(query)
        .limit(Number(limit))
        .skip(Number(offset))
        .sort({createdAt: 'desc'})
        .exec(),
      User.count(query).exec()
    ]).then(function(results){
      var users = results[0];
      var usersCount = results[1];

      return res.json({
        users: users.map(function(user){
          return user.toJSON();
        }),
        usersCount: usersCount
      });
   });

});

/**
* Get an User by ID. /api/users/:userId
*/
router.get('/:user', function (req, res, next) {
  return res.json({ user: req.user.toJSON() });
});

/**
* Add a new User. /api/users
*/
router.post('/', function(req, res, next) {
     var user = new User(req.body);
     user.displayName = user.firstName + " " + user.lastName;
    return user.save().then(function(){
      return res.json({user: user.toJSON()});
    });
});

/**
* Update an User. /api/users/:userId
*/
router.put('/:user', function(req, res, next) {
      if(typeof req.body.firstName !== 'undefined'){
        req.user.firstName = req.body.firstName;
      }

      if(typeof req.body.lastName !== 'undefined'){
        req.user.lastName = req.body.lastName;
      }

      req.user.displayName = req.user.firstName + ' ' + req.user.lastName;

      if(typeof req.body.email !== 'undefined'){
        req.user.email = req.body.email;
      }

      req.user.save().then(function(user){
        return res.json({user: user.toJSON()});
      }).catch(next);
});

/**
* Delete an User. /api/users/:userId
*/ 
router.delete('/:user', function(req, res, next) {
      return req.user.remove().then(function(){
        return res.sendStatus(204);
      });
});

module.exports = router;
