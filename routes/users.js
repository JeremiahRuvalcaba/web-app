var express = require('express');
var router = express.Router();
var expresValidator = require('express-validator');



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', (req, res, next) => {
  
  req.check('email', 'Invalid email address').isEmail();
  req.check('password', 'Password is Invalid'.isLength({min: 4})).equals(req.body.cpassword)

  var errors = req.validationErrors();
  if(errors){
    req.session.errors = errors;
  }
  
  res.redirect('/')
});
  
  /**
      console.log(req.body);
      res.send('/index');
    
      username: 'faf',
      email: 'fddafsd',
      password: [ 'fasdfas', 'asfdsdf' ],
      age: 'Are you 13+?',
      tos: 'tos'
   

  
  
  let username = req.body.username;
  let email = req.body.email;
  let password = req.body.password;
  let cpassword = req.body.cpassword;
   */
  



module.exports = router;
