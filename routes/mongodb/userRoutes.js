const express = require('express');
const router = express.Router();
const userController = require('../../controllers/mongodb/userController');


router.get('/register', (req, res) => {
    res.render('register');
  });
  
  router.post('/register', userController.registerUser);
  router.get('/login', (req, res) => {
    res.render('login');
  });
  
  router.post('/login', userController.loginUser);

router.get('/', userController.getUsers);

router.get('/check', userController.checkRules);
router.delete('/:id', userController.deleteUser);

// router.get('/:id', userController.getUserById);


module.exports = router;