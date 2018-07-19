var express = require('express');
var router = express.Router();
var config = require('../config');

/* GET home page */
router.get('/', (req, res) => {
  var context = {
    route: config.routes['index']
  }

  res.render('index', context);
});

/* GET static page */
router.get('/:parent/:child?', (req, res) => {
  try {
    var context = {
      route: req.params.child ? config.routes[req.params.parent].children[req.params.child] : config.routes[req.params.parent]
    }
  
    var view = req.params.child ? req.params.parent + '-' + req.params.child : req.params.parent
  
    res.render(view, context);
  }
  catch(e) {
    var err = new Error('Not Found');
    err.status = 404;
    throw err;
  }
});

module.exports = router;
