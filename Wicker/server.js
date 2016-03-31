var express = require('express'),
    app = express()
;

app
  .set('view engine', 'ejs')
  .use(express.static('./public'))
  .use(require('./accounts'))
  .get('*', function(req, res) {
    res.render('index', {
      user: JSON.stringify(req.session.user || null)
    });
  })
  .listen(3000)
;

console.log('Server running on http://localhost:3000');
