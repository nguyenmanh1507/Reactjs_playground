var Firebase = require('firebase'),
    firebase = new Firebase('https://ngmanh-wicker.firebaseio.com/'),
    users = firebase.child('users'),
    router = require('express').Router(),
    crypto = require('crypto')
;

function hash(password) {
  return crypto.createHash('sha512')
              .update(password)
              .digest('hex')
  ;
}

router
  .use(require('body-parser').json())
  .use(require('cookie-parser')())
  .use(require('express-session')({
    resave: false,
    saveUnitialized: true,
    secret: '$oRDiDr0ach1~28'
  }))
  .post('/api/signup', function(req, res) {
    var username = req.body.username,
        password = req.body.password
    ;

    if(!username || !password) return res.json({
      signedIn: false,
      message: 'No username or password'
    });

    users.child(username).once('value', function(snapshot) {
      if(snapshot.exists())
        return res.json({
          signedIn: false,
          message: 'Username already in use'
        });

      var userObj = {
        username: username,
        password: hash(password)
      };

      users.child(username).set(userObj);
      req.session.user = userObj;

      res.json({
        signedIn: true,
        user: userObj
      });

    });
  })
  .post('/api/signin', function(req, res) {
    var username = req.body.username,
        password = req.body.password
    ;

    if(!username || !password) return res.json({
      signedIn: false,
      message: 'No username or password'
    });

    users.child(username).once('value', function(snapshot) {
      if(!snapshot.exists() || snapshot.child('passwordHash').val() !== hash(password))
        return res.json({
          singedIn: false,
          message: 'Wrong username or password'
        });

      var user = snapshot.exportVal();

      req.session.user = user;
      res.json({
        singedIn: true,
        user: user
      });
    });
  })
  .post('/api/signout', function(req, res) {
    delete req.session.user;
    res.json({
      signedIn: false,
      message: 'You have been signed out'
    });
  })
;

module.exports = router;
